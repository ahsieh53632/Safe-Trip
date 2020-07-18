import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx";

import UpdatePhone from "../UpdatePage/UpdateName.jsx"

//create URL

class GetPersonalPhone extends Component{

    constructor(props) {
        super(props); 
  
        this.state={
            

        }   
      }

    render() {
        return(
            <h4>{this.props.Phone}</h4>

        )
        
                
    }

}

export default withStyles(loginPageStyle)(GetPersonalPhone);