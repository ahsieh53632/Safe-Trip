import React, { Component } from "react";
// import {Link, navigate} from "gatsby";


// import "../../assets/scss/material-kit-react.scss?v=1.4.0";
import Check from "./Check";
import MyQRcode from "./MyQRcode";
import UpdateInfo from "./UpdateInfo";
import AddID from "./AddID";
import CheckPersonal from "./CheckPersonal"
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NoIconHeader from "components/Header/NoIconHeader.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { cardTitle } from "assets/jss/material-kit-react.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import image from "assets/img/bg.jpg";
import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import { navigate }from "gatsby";
class MainPage extends Component{
    state;
    cache_account;
  constructor(props){
      super(props);
      this.state = {
          alert: false,
      };
      if (typeof window !== 'undefined') {
        if (window.localStorage != null) {
          this.cache_account = window.localStorage.getItem("account");
        }
      }
      
  }

  componentDidMount () {
    fetch('https://safe-trip.herokuapp.com/MainPage/alert', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "account": this.cache_account,
        })
        })
        .then(res => res.json())
        .then(d => {
          console.log(d);
            if (d.alert) {
              this.setState({alert: true})
            }
      })
  }

  
  handleLogOut() {
    if(typeof window !== 'undefined') {
      if (window.localStorage != null) {
        window.localStorage.setItem("account", null);
        window.localStorage.setItem("password", null);
      }
    }

    navigate('/');
  }

  render() {
    const { classes, ...rest } = this.props;
    
    if (this.state.alert) {
      var header = 
        <Header brand="Safe-Trip"
              fixed
              changeColorOnScroll={{
              height: 100,
              color: "white",
            }}/>
    } else {
      var header = 
        <NoIconHeader
              brand="Safe-Trip"
              fixed
              changeColorOnScroll={{
              height: 100,
              color: "white",
            }} />
    }

      return(
        <div>
            {header}
        <div
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            height: "auto",
            display: "inherit",
            position: "relative",
            margin: "0",
            padding: "0",
            paddingTop: "15vh",
            border: "0",
            alignItems: "center",
          }}
        >
          <div className={classes.container}>
          <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10}> 
          <CheckPersonal/>

          <Check/>

          <MyQRcode/>

          <UpdateInfo/>

          <AddID/>

          <Footer/>

          <Button color="primary" onClick={(this.handleLogOut)}>
            LOG OUT!
          </Button>

          </GridItem>
          </GridContainer>
          </div>

          
        </div>
        </div> 
    )
  }
}

export default withStyles(landingPageStyle)(MainPage);
