import React, { Component } from "react";
import {Link, navigate} from "gatsby";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "../../components/CustomButtons/Button.jsx";
import MyQRcode from "qrcode.react";
// import image from "assets/img/bg7.jpg";
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx"



class QRcodeplace extends Component{
    constructor(props) {
        super(props);
        this.state={
            isgetData:false,
            place:""

        }
        this.handleclick=this.handleclick.bind(this);
      }

    render() {
            return (
                <div>
                    <MyQRcode value="http://localhost:8000/MainPage/test" ID={this.props.place}></MyQRcode>
            <div>{this.state.place}</div>
                </div>
            )

        
    }
}

export default withStyles(loginPageStyle)(QRcodeplace);