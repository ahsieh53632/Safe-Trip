import React, { Component } from "react";
import {Link, navigate} from "gatsby";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "../../components/CustomButtons/Button.jsx";
import MyQRcode from "qrcode.react";
// import image from "assets/img/bg7.jpg";
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx"
import QRcodeplace from "./QRcodeplace.jsx";

class GetQRcode extends Component{
    constructor(props) {
        super(props);
        this.state={
            place:null,
            name:null,
            flag:null,
            ID:null,
            phonenumber:null,
            check:false,
            isgetData:false
        }
        this.handleclick=this.handleclick.bind(this);
      }


      handleclick(e){
        this.state.check = true;
      }

    render() {
        if(this.state.place!==null){
            return(
                <div>

                    <input type="text" onChange={(e)=>{ this.setState({place:e.target.value}) }}/>
            <div>{this.state.place}</div>
                    <Link to="/MainPage/QRcodeplace">
                <Button color="primary" onClick={(e)=>{this.setState({isgetData:true})}} >
                <QRcodeplace money={this.state.place} />
                    產生
                </Button>
                </Link>
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
