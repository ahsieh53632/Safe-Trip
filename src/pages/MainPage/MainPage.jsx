import React, { Component } from "react";
import {Link, navigate} from "gatsby";
import Check from "./Check";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import Footer from "components/Footer/Footer.jsx";

import Button from "../../components/CustomButtons/Button.jsx";
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx"

import withStyles from "@material-ui/core/styles/withStyles";
import image from "assets/img/bg.jpg";
import MyQRcode from "./MyQRcode";
import UpdateInfo from "./UpdateInfo";

class MainPage extends Component{
    state;

  constructor(props){
      super(props);
      this.state = {
          Scan: false,
          Check: false,
          MyQRcode: false,
          UpadteInfo: false,
      };
  }

  render() {
      return(
        <div>
        <Header
          brand="SAVE_TRIP"
          rightLinks={<HeaderLinks />}
          fixed
          // changeColorOnScroll={{
          //     height: 250,
          //     color: "white",
          // }}
        />
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
          <Check/>

          <MyQRcode/>

          <UpdateInfo/>

          <Footer/>

        </div>
      </div>
    )
  }
}

export default withStyles(loginPageStyle)(MainPage);