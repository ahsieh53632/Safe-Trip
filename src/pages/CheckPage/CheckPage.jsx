import React, { Component } from "react";
import {Link, navigate} from "gatsby";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "../../components/CustomButtons/Button.jsx";
import MyQRcode from "qrcode.react";
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx";
//生成qrcode頁面

class CheckPage extends Component{
    constructor(props) {
        super(props);
        this.state={
            place:null,
            name:null,
            flag:null,
            ID:"",
            URL:"",
            date:null,
        }   
      }
      componentDidMount(){
        const token ="";
        fetch( 'https://api.github.com/users/jserv/repos',{
            method:"GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token,
                //'id':id 
            },
            body: JSON.stringify({
                "place":this.props.place,
                "Date":this.state.date,
                "flag":this.state.flag
            })
    })
        .then(res => res.json())
        .then(data => {
            
        })
        .catch(e => {
            /*發生錯誤時要做的事情*/
            console.log(e);
        })

      }

    render() {
        if(this.state.URL!==""){
                return(
                    <div>
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
                <button onClick={(e)=>{this.setState({URL:"http://localhost:8000/scanCode?info={ \"type\": beento, \"locationid\": 0,\"otherpersonid\":"+this.state.ID+"}"})}}>生成QRcode</button>
                <div>請輸入 Uber ID:</div>
                <input type="text" onChange={(e)=>{ this.setState({ID:e.target.value}) }}/>
                <Link to="/MainPage/MainPage">
                <Button color="primary" >
                上一頁
                </Button>
                </Link>
            </div>
        )
    }
}

export default withStyles(loginPageStyle)(CheckPage);