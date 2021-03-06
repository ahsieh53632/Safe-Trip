import React from "react"
import {link, navigate} from "gatsby"


import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockOutlined from "@material-ui/icons/LockOutlined";
import MainPage from "./MainPage/MainPage.jsx"
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import {
    ThemeProvider
  } from "@material-ui/styles"
import { Typography } from "@material-ui/core"  
import theme from "../components/theme"
import "assets/scss/material-kit-react.scss?v=1.4.0";
import image from "assets/img/1.jpg";
class LoginPage extends React.Component {
    localStorage;
    state = {account: "", password: "", cardAnimation: "cardHidden"}
    constructor(props) {
        super(props);
        this.localStorage = null;
        if (typeof window !== "undefined") {
            this.localStorage = window.localStorage;
            console.log(this.localStorage);
        }
        
        if(this.localStorage != null) {
            console.log(this.localStorage);
            var cache_account = this.localStorage.getItem("account");
            var cache_pwd = this.localStorage.getItem("password");
            fetch('https://safe-trip.herokuapp.com/LoginPage/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "account": cache_account,
                "pwd": cache_pwd
            })
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    navigate('/MainPage/MainPage');
                }
            })
        }
    }

    handleSubmit (event, account, password)  {
        event.preventDefault()
        console.log(account);
        console.log(password);
        fetch('https://safe-trip.herokuapp.com/LoginPage/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "account": account,
                "pwd": password
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                if (this.localStorage != null) {
                    this.storeCache();
                }
                navigate('/MainPage/MainPage');
            } else {
                alert('WRONG username or password');
                navigate('/');
            }
        })
    }

    componentDidMount() {
        // we add a hidden class to the card and after 700 ms we delete it and the transition appears
        setTimeout(
          function() {
            this.setState({ cardAnimation: "" });
          }.bind(this),
          700
        );
      }

    storeCache() {
        console.log('stroing cred in cache');
        this.localStorage.setItem("account", this.state.account);
        this.localStorage.setItem("password", this.state.password); 
    }


    handleReg (event, account, password)  {
        event.preventDefault()
        fetch('https://safe-trip.herokuapp.com/LoginPage/reg', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "account": account,
                "pwd": password
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                if (this.localStorage != null) {
                    this.storeCache()
                }
                console.log('success')
                navigate('/MainPage/MainPage')
            } else {
                alert('user name used already!')
            }
        })
    }



    render() {
        const { classes, ...rest } = this.props;
        return(
                <div
                    className={classes.pageHeader}
                    style={{
                backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
                >
                <div className={classes.container} >
                <GridContainer justify="center">
                <GridItem  xs={12} sm={12} md={6}>
                <Card className={classes[this.state.cardAnimation]}>
                    <CardHeader color="warning" className={classes.cardHeader}>
                    <ThemeProvider theme={theme}>
                      <Typography variant="body1">Safe Trip login</Typography>
                    </ThemeProvider>
                    </CardHeader>
                    <p className={classes.divider}></p>
                    <CardBody>
                    <CustomInput 
                        labelText="帳號"
                        id="account"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          onChange: (e) => {this.setState({account: e.target.value, password: this.state.password})},
                          endAdornment: (
                            <InputAdornment position="end">
                              <LockOutlined/>
                            </InputAdornment>
                          ),
                        }}
                        white = {true}
                      />
                       <CustomInput
                        labelText="密碼"
                        id="pwd"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          onChange: (e) => {this.setState({account: this.state.account, password: e.target.value})},
                          endAdornment: (
                            <InputAdornment position="end">
                              <LockOutlined/>
                            </InputAdornment>
                          ),
                        }}
                        />
                    </CardBody>
                    <GridContainer justify="center">
                    <form ref="form" onSubmit={(e) => this.handleSubmit(e, this.state.account, this.state.password)}>
                        <Button type="submit" size="80px">log in</Button>
                    </form>
                    <form ref="form2" onSubmit={(e) => this.handleReg(e, this.state.account, this.state.password)}>
                        <Button type="submit" size="80px">register</Button>
                    </form>
                    </GridContainer>
                </Card>
                </GridItem>
                </GridContainer>
                </div>
            </div>
        )
      }
    }
    
export default withStyles(loginPageStyle)(LoginPage);