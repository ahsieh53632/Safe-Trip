import React, { Component } from "react";
import {Link, navigate} from "gatsby";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "../../components/CustomButtons/Button.jsx";
<<<<<<< HEAD
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
=======
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx"


class CheckPage extends Component{
    cache_account;
    constructor(props) {
        super(props);
        this.state = { data: [], };
        if (window.localStorage != null) {
            this.cache_account = window.localStorage.getItem("account")
            console.log(this.cache_account)
        }
    }
    
    componentDidMount () {
        console.log('fectching check')
        fetch('http://localhost:3000/CheckPage/check', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "account": this.cache_account,
            })
            })
            .then(res => res.json())
            .then(d => {
                this.setState({data: d})
            })
    }
    render() {
        const { data } = this.state;

        console.log(data);
        return (
            <div>
                <h2>Infected or At rist individuals you had contact with</h2>
                {data.map(r => <ul><li>Location: {r.name}</li><li>Date: {new Date(r.date).toLocaleDateString([],{ year: 'numeric', month: 'long', day: 'numeric' })}</li></ul>)}
            </div>
        )
        
>>>>>>> d68a2ba19f0cccc0c43cc6e1f199546bb1fff22e
    }
}

export default withStyles(loginPageStyle)(CheckPage);