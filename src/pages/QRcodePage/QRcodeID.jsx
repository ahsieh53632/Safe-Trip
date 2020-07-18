import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import MyQRcode from "qrcode.react";
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx"

//create qrcode



class QRcodeID extends Component{

    constructor(props) {

        super(props);

      }
    
    render() {
           return (
                <div>
                    <MyQRcode value={this.props.sendURL} level="L" ></MyQRcode>
                    <div>生成網址:{this.props.sendURL}</div>
                </div>
            )
    }

}

export default withStyles(loginPageStyle)(QRcodeID);