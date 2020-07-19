import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx";

import QRcodeID from "./QRcodeID.jsx";

//create URL

class CreateURL extends Component{

    localStorage;
    cache_account;
    constructor(props) {

        super(props);
        if (typeof window !== 'undefined') { 
            if (window.localStorage != null) {
                this.localStorage = window.localStorage;
                this.cache_account = this.localStorage.getItem("account");
            }
             
        } else {

        }
        this.state={

            URL:"https://safetripsite.herokuapp.com/scanCode?info={ \"type\": \"encounter\", \"locationid\": 1,\"otherpersonid\":"+"\""+this.cache_account+"\""+"}"

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