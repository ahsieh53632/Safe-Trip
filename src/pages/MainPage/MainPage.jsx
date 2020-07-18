import React, { Component } from "react";
// import {Link, navigate} from "gatsby";

import Check from "./Check";
import MyQRcode from "./MyQRcode";
import UpdateInfo from "./UpdateInfo";
import AddID from "./AddID";

import Footer from "../../components/Footer/Footer.jsx";

import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx"
import withStyles from "@material-ui/core/styles/withStyles";

import image from "assets/img/bg.jpg";


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
          {/* <Test/> */}

          <AddID/>

          <Footer/>

        </div>
    )
  }
}

export default withStyles(loginPageStyle)(MainPage);