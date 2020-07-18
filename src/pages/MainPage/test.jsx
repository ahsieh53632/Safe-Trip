import React, { Component } from "react";
import {Link, navigate} from "gatsby";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "../../components/CustomButtons/Button.jsx";
import MyQRcode from "qrcode.react";
// import image from "assets/img/bg7.jpg";

import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx"

class GetQRcode extends Component{
      constructor(props) {
        super(props);
        this.state={
            place:null,
            name:null,
            flag:null,
            ID:null,
            phonenumber:null
        }
        this.handleClick=this.handleClick.bind(this);
      }
      componentDidMount(){
          this.handleClick();//回傳數據
      }
      handleClick(){
        fetch('http://localhost:3000/LoginPage/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "ID": this.state.ID,
                "name": this.state.name,
                "place":this.state.place,
                "flag":this.state.flag,
                "phonenumber":this.state.phonenumber
            })
        })
        .then(res => res.json())
        .then(data => {
        })
      }

    render() {
        return(
            <div>
            </div>
        )
    }
}

export default withStyles(loginPageStyle)(GetQRcode);