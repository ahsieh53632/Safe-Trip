import React, { Component } from "react";
import {Link, navigate} from "gatsby";
import withStyles from "@material-ui/core/styles/withStyles";

import MyQRcode from "qrcode.react";
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx";
import QRcodeID from "./QRcodeID.jsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockOutlined from "@material-ui/icons/LockOutlined";

import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import {
    ThemeProvider
  } from "@material-ui/styles"
import { Typography } from "@material-ui/core"  

import image from "assets/img/1.jpg";
//生成qrcode頁面

class CreateQRcode extends Component{
    localStorage;
    cache_account;

    constructor(props) {
        super(props); 
        this.localStorage = window.localStorage;
        var cache_account = this.localStorage.getItem("account"); 
           
        this.state={
            //place:null,
            //name:null,
            //ID:null,
            //phonenumber:null,
            account:cache_account,
            URL:"http://localhost:8000/scanCode?info={ \"type\": \"encounter\", \"locationid\": 1,\"otherpersonid\":"+"\""+cache_account+"\""+"}",
        }   
      }

    render() {
        
                return(
                    <div>
                        <div>{this.state.account}</div>
                        <QRcodeID sendID={this.state.URL}/>
                        <Link to="/MainPage/MainPage">
                        <Button color="primary" >
                        上一頁
                    </Button>
                    </Link>
                    </div>
                    
                )
    }

}

export default withStyles(loginPageStyle)(CreateQRcode);
