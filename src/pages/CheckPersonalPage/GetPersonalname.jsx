import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx";

//create URL

class GetPersonalname extends Component{

    constructor(props) {

        super(props); 
      }

    render() {

        return(

        <h4>{this.props.name}</h4>
        
      )
                     
    }

}

export default withStyles(loginPageStyle)(GetPersonalname);