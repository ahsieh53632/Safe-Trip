import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx";


//create URL

class GetPersonalPhone extends Component{

    constructor(props) {
        super(props); 
  
        this.state={
            Phonenumber:""


        }   
      }

      getphone(amount){
          this.setState({Phonenumber:amount})
      }

    render() {
        return(
            <div>
                <h4>{this.props.Phone}</h4>


            </div>

        )
        
                
    }

}

export default withStyles(loginPageStyle)(GetPersonalPhone);