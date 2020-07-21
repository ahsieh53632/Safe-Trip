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
            address:"",
            LocationName:"",
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

                <Button color="primary" onClick={(e)=>{this.setState({placeURL:"https://safetripsite.herokuapp.com/createLoc?info={ \"Type\":create, \"locationName\":"+this.state.LocationName+",\"address\":"+this.state.address+"}"})}}>
                    生成QRcode
                    </Button>
                <h4>請輸入地名</h4>
                <input type="text" onChange={(e)=>{ this.setState({LocationName:e.target.value}) }}/>
                <h4>請輸入地址</h4>
                <input type="text" onChange={(e)=>{ this.setState({address:e.target.value}) }}/>
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