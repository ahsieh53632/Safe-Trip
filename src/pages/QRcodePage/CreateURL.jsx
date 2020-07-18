import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx";

import QRcodeID from "./QRcodeID.jsx";

//create URL

class CreateURL extends Component{

    localStorage;

    constructor(props) {

        super(props); 
        this.localStorage = window.localStorage;
        var cache_account = this.localStorage.getItem("account"); 
  
        this.state={

            URL:"http://localhost:8000/scanCode?info={ \"type\": \"encounter\", \"locationid\": 1,\"otherpersonid\":"+"\""+cache_account+"\""+"}"

        }   
      }

    render() {
                return(

                    <div>
                        <QRcodeID sendURL={this.state.URL}/>
                    </div>   

                )
    }

}

export default withStyles(loginPageStyle)(CreateURL);