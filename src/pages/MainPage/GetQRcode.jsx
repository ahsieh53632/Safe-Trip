import React, { Component } from "react";
import {Link, navigate} from "gatsby";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "../../components/CustomButtons/Button.jsx";
import MyQRcode from "qrcode.react";
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx"
import QRcodeplace from "./QRcodeplace.jsx";
import Fetchdata from "./Fetchdata.jsx"
import QRcodeID from "./QRcodeID.jsx";
//生成qrcode頁面

class GetQRcode extends Component{
    constructor(props) {
        super(props);
        this.state={
            place:"",
            name:null,
            flag:null,
            ID:null,
            phonenumber:null,
            check:false,
            isgetData:false
        }   
      }

    render() {
        if(this.state.place!==""){
            return(
                <div>
                    <div>請輸入人名:</div>
                    <input type="text" onChange={(e)=>{ this.setState({place:e.target.value}) }}></input>
            <QRcodeID sendplace={this.state.place}/>
            <div>請輸入地名:</div>
                    <input type="text" onChange={(e)=>{ this.setState({place:e.target.value}) }}></input>
            <QRcodeplace sendplace={this.state.place}/>
            <Fetchdata sendplace={this.state.place}/>
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
                <div>請輸入地名:</div>
                <input type="text" onChange={(e)=>{ this.setState({place:e.target.value}) }}/>
                <Link to="/MainPage/MainPage">
                <Button color="primary" >
                    上一頁
                </Button>
                </Link>
            </div>
        )
    }
}

export default withStyles(loginPageStyle)(GetQRcode);
