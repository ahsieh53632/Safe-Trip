import React, { Component } from "react";
import {Link, navigate} from "gatsby";

// import image from "assets/img/bg7.jpg";
import bool from "prop-types";



class MainPage extends Component{
      state;

    constructor(props){
        super(props);
        this.state = {
            Scan: false,
            Check: false,
            MyQRcode: false,
            UpadteInfo: false,
        };

        this.ScanButtom=this.ScanButtom.bind(this);
        this.CheckButtom=this.CheckButtom.bind(this);
        this.MyQRcodeButtom=this.MyQRcodeButtom.bind(this);
        this.UpdateButtom=this.UpdateButtom.bind(this);
    }

    ScanButtom(){

        return (
            <Link to="/Scan">
            </Link>
          );
    }

    CheckButtom(){
        return (
            // <Link to="/Check">
            <Link to="/Scan">
            </Link>
          );
    }

    MyQRcodeButtom(){
        return (
            // <Link to="/MyQRcode">
            <Link to="/Scan">
            </Link>
          );
    }

    UpdateButtom(){
        return (
            // <Link to="/UpdateInfo">
            <Link to="/Scan">
            </Link>
          );
    }

    render() {
        return(
            <div>
                <button onClick={this.ScanButtom}>掃描QRcode </button>
                <button onClick={this.CheckButtom}>檢查我的路程 </button>
                <button onClick={this.MyQRcodeButtom}>顯示我的QRcode </button>
                <button onClick={this.UpdateButtom}>更新我的路程 </button>
            </div>
        )
    }
}