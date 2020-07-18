import React, { Component } from "react";
import {Link, navigate} from "gatsby";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "../../components/CustomButtons/Button.jsx";
import MyQRcode from "qrcode.react";
// 地名QRcode;
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx"



class QRcodeplace extends Component{
    constructor(props) {
        super(props);
        this.state={
        }
      }

    render() {
           return (
                <div>
                    <MyQRcode value={this.props.sendplace} ></MyQRcode>
                </div>
            )

           
        
    }
}

export default withStyles(loginPageStyle)(QRcodeplace);