import React, { Component } from "react";

import "../../assets/scss/material-kit-react.scss?v=1.4.0";
import {Link} from "gatsby";
import withStyles from "@material-ui/core/styles/withStyles";
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx";
import Button from "components/CustomButtons/Button.jsx";
import image from "assets/img/1.jpg";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NoIconHeader from "components/Header/NoIconHeader.jsx";

import QRcodeset from "./QRcodeset.jsx";

//生成qrcode頁面

class CreateQRcode extends Component{
    state;

    constructor(props) {
        super(props);       
      }

    render() {
      return(
        <div>
          <NoIconHeader
            brand="Safe-Trip"
            fixed
            changeColorOnScroll={{
            height: 100,
            color: "white",
            }}/>
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
                <QRcodeset/>
                <Link to="/MainPage/MainPage">
                <Button color="primary" >
                Previous Page
            </Button>
            </Link>
            </div>
          </div>
        )
    }

}

export default withStyles(loginPageStyle)(CreateQRcode);
