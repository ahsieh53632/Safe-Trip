import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx";

import UpdateStreet from "../UpdatePage/UpdateName.jsx"
//create URL

class GetPersonalStreet extends Component{

    constructor(props) {
        super(props); 
  
        this.state={



        }   

      }

    render() {
        return(
            <h4>{this.props.Street}</h4>
        )
        

                
    }

}

export default withStyles(loginPageStyle)(GetPersonalStreet);