import React, { Component } from "react";
// import {Link, navigate} from "gatsby";

import Check from "./Check";
import MyQRcode from "./MyQRcode";
import UpdateInfo from "./UpdateInfo";
import AddID from "./AddID";

import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NoIconHeader from "components/Header/NoIconHeader.jsx";
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
          alert: false,
      };
  }

  componentDidMount () {
    fetch('http://localhost:3000/CheckPage/check', {
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
            if (d.alert) {
              this.state.alert = true
            }
      })
  }

 

  render() {
    if (this.state.alert) {
      var header = 
        <Header brand="Safe-Trip"
              rightLinks={<HeaderLinks />}
              fixed
              changeColorOnScroll={{
              height: 100,
              color: "white",
            }}/>
    } else {
      var header = 
        <Header
              brand="Safe-Trip"
              rightLinks={<NoIconHeader />}
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
          {/* <WarningSign/> */}

          <Check/>

          <MyQRcode/>

          <UpdateInfo/>

          <AddID/>

          <Footer/>

        </div>
        </div> 
    )
  }
}

export default withStyles(loginPageStyle)(MainPage);