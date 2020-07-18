import React, { Component } from "react";
import {Link, navigate} from "gatsby";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "../../components/CustomButtons/Button.jsx";
import MyQRcode from "qrcode.react";
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx";
import Fetchdata from "./Fetchdata.jsx"
import QRcodeID from "./QRcodeID.jsx";
//生成qrcode頁面

class GetQRcode extends Component{
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
                        <div>請輸入ID:</div>
                        <input type="text" onChange={(e)=>{ this.setState({ID:e.target.value}) }}></input>
                        <div>{this.state.URL}</div>
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
                <button onClick={(e)=>{this.setState({URL:"http://localhost:8000/scanCode?info={ \"type\": beento, \"locationid\": 0,\"otherpersonid\":"+this.state.ID+"}"})}}>生成QRcode</button>
                <div>請輸入ID名:</div>
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

export default withStyles(loginPageStyle)(GetQRcode);