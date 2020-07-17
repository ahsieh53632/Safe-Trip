import React from "react"
import Header from "../components/Header/Header"
import {link, navigate} from "gatsby"

class LoginPage extends React.Component {
    localStorage;
    state = {account: "", password: ""}
    constructor(props) {
        super(props);
        this.localStorage = null;
        if (typeof window !== "undefined") {
            this.localStorage = window.localStorage;
        }
        
        if(this.localStorage != null) {
            //TODO: AUTHEN!
            // Redirect to main page if username has already been set
            
        }
    }

    handleSubmit (event, account, password)  {
        event.preventDefault()
        fetch('http://localhost:3000/LoginPage/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "account": account,
                "pwd": password
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                navigate('/MainPage')
            } else {
                navigate('/')
            }
        })
    }

    handleReg (event, account, password)  {
        event.preventDefault()
        fetch('http://localhost:3000/LoginPage/reg', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "account": account,
                "pwd": password
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                navigate('/MainPage')
            } else {
                alert()
            }
        })
    }

    render() {
        return(
            <div>
            <div>輸入帳號</div>
            <input type="text" onChange={(e)=>{this.setState({account: e.target.value, password: this.state.password})}}/>
            <div>輸入密碼</div>
            <input type="password" onChange={(e)=>{this.setState({account: this.state.account, password: e.target.value})}}/>
            <form ref="form" onSubmit={(e) => this.handleSubmit(e, this.state.account, this.state.password)}>
                <button type="submit">log in</button>
            </form>
            </div>
        )
    }
    
}
export default LoginPage