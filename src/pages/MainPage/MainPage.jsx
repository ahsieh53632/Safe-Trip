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
// import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx"
// import withStyles from "@material-ui/core/styles/withStyles";
import image from "assets/img/bg.jpg";

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
          
          <CheckPersonal/>

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

export MainPage;
