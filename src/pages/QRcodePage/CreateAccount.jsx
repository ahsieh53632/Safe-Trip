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

class CreateAccount extends Component{
    localStorage;
    cache_account;
    constructor(props) {
        super(props); 
        this.localStorage = window.localStorage;
        this.localStorage.setItem("account","undefined");
        var cache_account = this.localStorage.getItem("account"); 
        console.log(this.localStorage);     
        this.state={
            cache_account:null,
            place:null,
            name:null,
            flag:cache_account,
            ID:null,
            URL:"",
            phonenumber:null,
        }   
        this.storeCache=this.storeCache.bind(this);
      }
      storeCache() {
        console.log('storing cred in cache');
        this.cache_account = this.state.ID; 
        this.localStorage.setItem("account", this.cache_account);
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if( prevState.ID != this.state.ID)
            this.storeCache();
    }

    render() {
        if(this.state.URL!==""){
                return(
                    <div>
                        <div>{this.cache_account}</div>
                        <QRcodeID sendID={this.state.URL}/>
                        <Link to="/MainPage/MainPage">
                        <Button color="primary" >
                        上一頁
                    </Button>
                    </Link>
                    </div>
                    
                )
                
        }
        else return (
            <div>
                <button onClick={(e)=>{this.setState({URL:"http://localhost:8000/scanCode?info={ \"type\": beento, \"locationid\": 0,\"otherpersonid\":"+this.state.ID+"}"})}}>
                    生成QRcode
                    </button>
                <div>請輸入 Uber ID:</div>
                <input type="text" onChange={(e)=>{ this.setState({ID:e.target.value}) }}/>
                <Link to="/MainPage/MainPage">
                <Button color="primary" >
                上一頁
                </Button>
                </Link>
            </div>
        )
    }
}

export default withStyles(loginPageStyle)(CreateAccount);