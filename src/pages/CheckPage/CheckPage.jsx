import React, { Component } from "react";
import {Link, navigate} from "gatsby";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "../../components/CustomButtons/Button.jsx";
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
        
    }
}

export default withStyles(loginPageStyle)(CheckPage);