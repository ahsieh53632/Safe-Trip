import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx";
import "../../assets/scss/material-kit-react.scss?v=1.4.0";
import QRcodeplace from "./QRcodeplace.jsx";
import Button from "components/CustomButtons/Button.jsx";
import {Link} from "gatsby";

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
            
            LocationID:"",
            placeURL:""

        }   
      }

      render() {
        if(this.state.placeURL!==""){
                return(
                    <div>

                        <QRcodeplace sendplace={this.state.placeURL}/>
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

                <Button color="primary" onClick={(e)=>{this.setState({placeURL:"http://localhost:8000/scanCode?info={ \"type\": beento, \"locationid\":"+this.state.LocationID+",\"otherpersonid\":"+this.cache_account+"}"})}}>
                    生成QRcode
                    </Button>
                <h4>請輸入 Location ID</h4>
                <input type="text" onChange={(e)=>{ this.setState({LocationID:e.target.value}) }}/>
                <Link to="/MainPage/MainPage">
                <Button color="primary" >
                上一頁
                </Button>
                </Link>

            </div>
        )
    }

}

export default withStyles(loginPageStyle)(CreateURL);