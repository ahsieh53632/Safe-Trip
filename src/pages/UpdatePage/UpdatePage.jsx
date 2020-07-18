import React, { Component } from "react";
import {Link, navigate} from "gatsby";

import UpdateName from "./UpdateName";
import UpdateStreet from "./UpdateStreet";
import UpdatePlaceID from "./UpdatePlaceID";

import Footer from "../../components/Footer/Footer.jsx";

import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx"
import withStyles from "@material-ui/core/styles/withStyles";

import image from "assets/img/bg.jpg";

class UpdatePage extends Component{

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

            <UpdateName/>

            <UpdateStreet/>

            <UpdatePlaceID/>

            </div>
        )
    }
}

export default withStyles(loginPageStyle)(UpdatePage);