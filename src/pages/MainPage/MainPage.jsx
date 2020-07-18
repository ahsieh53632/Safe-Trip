import React, { Component } from "react";
import {Link, navigate} from "gatsby";
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "../../components/CustomButtons/Button.jsx";
// import image from "assets/img/bg7.jpg";

import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx"

class MainPage extends Component{
      state;

    constructor(props){
        super(props);
        this.state = {
            Scan: false,
            Check: false,
            MyQRcode: false,
            UpadteInfo: false,
            OnClickMyQRcode:false,
        };

        // this.ScanButtom=this.ScanButtom.bind(this);
        // this.CheckButtom=this.CheckButtom.bind(this);
        // this.MyQRcodeButtom=this.MyQRcodeButtom.bind(this);
        // this.UpdateButtom=this.UpdateButtom.bind(this);
    }


    // ScanButtom(){
    //     navigate("/MainPage/Scan")
    // }

    // CheckButtom(){
    //     navigate("/MainPage/Check")
    // }

    // MyQRcodeButtom(){
    //     navigate("/MainPage/MyQRcode")
    // }

    // UpdateButtom(){
    //     navigate("/MainPage/UpdateInfo")
    // }

    render() {
        return(
            <div>
                <Link to="/MainPage/Scan">
                <Button color="primary">
                掃描QRcode
                </Button>
                </Link>

                <Link to="/MainPage/Check">
                <Button color="primary">
                檢查我的路程
                </Button>
                </Link>

                <Link to="/MainPage/GetQRcode">
                <Button color="primary" >
                顯示我的QRcode
                </Button>
                </Link>

                <Link to="/MainPage/UpdateInfo">
                <Button color="primary">
                更新我的路程
                </Button>
                </Link>


                {/* <button onClick={this.ScanButtom}>掃描QRcode </button>
                <button onClick={this.CheckButtom}>檢查我的路程 </button>
                <button onClick={this.MyQRcodeButtom}>顯示我的QRcode </button>
                <button onClick={this.UpdateButtom}>更新我的路程 </button> */}
            </div>
        )
    }
}

export default withStyles(loginPageStyle)(MainPage);