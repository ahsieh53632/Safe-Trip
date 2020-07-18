import React, { Component } from "react";
import {Link, navigate} from "gatsby";
import MyQRcode from "qrcode.react";
import makeStyles from "@material-ui/styles/makeStyles/makeStyles.js";

import withStyles from "@material-ui/core/styles/withStyles";
import Button from "../../components/CustomButtons/Button.jsx";
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx";
import QRcodeID from "./QRcodeID.jsx";
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import {
  ThemeProvider
} from "@material-ui/styles"
import { Typography } from "@material-ui/core"  
import theme from "../../components/theme"

import { cardTitle } from "assets/jss/material-kit-react.jsx";

class CreateQRcode extends Component{
    constructor(props) {
        super(props);
        this.state={
            place:null,
            name:null,
            flag:null,
            ID:"",
            URL:"",
            phonenumber:null,
        }   
      }

    render() {
        if(this.state.URL!==""){
                return(
                    <div>
                        <div>Input ID:</div>
                        <input type="text" onChange={(e)=>{ this.setState({ID:e.target.value}) }}></input>
                        <div>{this.state.URL}</div>
                        <QRcodeID sendID={this.state.URL}/>
                        <Link to="/MainPage/MainPage">
                        <Button color="primary" >
                        Previous Page
                    </Button>
                    </Link>
                    </div>
                )    
        }
        else return (
            <div>
                <Button onClick={(e)=>{this.setState({URL:"http://localhost:8000/scanCode?info={ \"type\": beento, \"locationid\": 0,\"otherpersonid\":"+this.state.ID+"}"})}}>Generate QRcode</Button>
                <div>Input ID:</div>
                <input type="text" onChange={(e)=>{ this.setState({ID:e.target.value}) }}/>
                <Link to="/MainPage/MainPage">
                <Button color="primary" >
                Previous Page
                </Button>
                </Link>
            </div>
        )
    }
}

export default withStyles(loginPageStyle)(CreateQRcode);