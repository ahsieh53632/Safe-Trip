import React, { Component } from "react";
// import {Link, navigate} from "gatsby";

import Check from "./Check";
import MyQRcode from "./MyQRcode";
import UpdateInfo from "./UpdateInfo";
// import Test from "./Test.jsx"

import Footer from "../../components/Footer/Footer.jsx";
// import Header from "../../components/Header/Header";
// import HeaderLinks from "../../components/Header/HeaderLinks";
// import Button from "../../components/CustomButtons/Button.jsx";

import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx"
import withStyles from "@material-ui/core/styles/withStyles";
// import { Typography } from "@material-ui/core"

import image from "assets/img/bg.jpg";


class MainPage extends Component{
    state;

  constructor(props){
      super(props);
      this.state = {
          name: null,
          ID: null,
          phonenumber: null,
          flag:null,
          place:null
      };
  }

  componentDidMount(){
    fetch( 'https://api.github.com/users/jserv/repos',{
        method:"PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            " name":this.state.name,
            "place":this.props.sendplace,
            "ID":this.state.ID,
            "phonenumber":this.state.phonenumber,
            "flag":this.state.flag
        })
})
    .then(res => res.json())
    .then(data => {
          /*接到request data後要做的事情*/
    })
    .catch(e => {
        /*發生錯誤時要做的事情*/
        console.log(e);
    })
  }

  render() {
    return (
         <div>
             <div>{this.props.sendplace}</div>
         </div>
     )

    
 
}
}

export default withStyles(loginPageStyle)(MainPage);