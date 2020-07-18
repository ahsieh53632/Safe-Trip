import React, { Component } from "react";
import {Link} from "gatsby";
import withStyles from "@material-ui/core/styles/withStyles";
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx";
import Button from "components/CustomButtons/Button.jsx";
import image from "assets/img/1.jpg";

import QRcodeset from "./QRcodeset.jsx";

//生成qrcode頁面

class CreateQRcode extends Component{
    state;

    constructor(props) {
        super(props);       
      }

    render() {
        
                return(
                    <div
                    style={{
                        backgroundImage: "url(" + image + ")",
                        backgroundSize: "cover",
                        backgroundPosition: "top center",
                        height: "auto",
                        display: "inherit",
                        position: "relative",
                        margin: "0",
                        padding: "0",
                        paddingTop: "15vh",
                        border: "0",
                        alignItems: "center",
                      }}
                    >
                        <QRcodeset/>
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
