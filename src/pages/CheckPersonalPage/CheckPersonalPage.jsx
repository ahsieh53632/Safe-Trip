import React, { Component } from "react";
import {Link, navigate} from "gatsby";
import Button from "../../components/CustomButtons/Button.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx"
import withStyles from "@material-ui/core/styles/withStyles";
import {
    ThemeProvider
  } from "@material-ui/styles"
import { Typography } from "@material-ui/core"  
import theme from "../../components/theme"
import image from "assets/img/bg.jpg";

import CheckPersonalname from"./CheckPersonalname.jsx"
import CheckPersonalPhone from"./CheckPersonalPhone.jsx"
import CheckPersonalStreet from"./CheckPersonalStreet.jsx"





class CheckPersonalPage extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
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
              }}>

            <CheckPersonalname/>

            <CheckPersonalPhone/>

            <CheckPersonalStreet/>

            <Link to="../../MainPage/MainPage">
                <Button 
                color="primary"
                >
                <ThemeProvider theme={theme}>
                    <Typography variant="body1">
                        Previous Page
                    </Typography>
                </ThemeProvider>
                </Button>
            </Link>

            <Button color="primary">
                <ThemeProvider theme={theme}>
                    <Typography variant="body1">
                        RENEW
                    </Typography>
                </ThemeProvider>
            </Button>
            <Footer/>
        </div>
        )
    }
}

export default withStyles(loginPageStyle)(CheckPersonalPage);