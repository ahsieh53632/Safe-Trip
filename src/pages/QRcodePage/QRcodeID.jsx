import React, { Component } from "react";
import {Link, navigate} from "gatsby";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "../../components/CustomButtons/Button.jsx";
import MyQRcode from "qrcode.react";
// 生成人名QRcode;
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx"



class QRcodeID extends Component{
    constructor(props) {
        super(props);
        this.state={
            URL:"http://localhost:8000/scanCode?info={ \"type\": 1, \"locationid\": here,\"otherpersonid\": }"
        }
      }

      combine(){
        this.setState({URL:this.state.URL+this.props.sendID});
      }

      componentDidMount(){
          this.combine();

      }
    
    render() {
           return (
                <div>
                <MyQRcode value={this.props.sendID}></MyQRcode>
                <div>{this.props.sendID}</div>
                </div>
            )

           
        
    }
}

export default withStyles(loginPageStyle)(QRcodeID);