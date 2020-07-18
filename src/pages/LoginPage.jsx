import React from "react"
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
            console.log(this.localStorage);
            var cache_account = this.localStorage.getItem("account");
            var cache_pwd = this.localStorage.getItem("password");
            fetch('http://localhost:3000/LoginPage/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "account": cache_account,
                "pwd": cache_pwd
            })
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    navigate('/MainPage/MainPage');
                }
            })
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
                if (this.localStorage != null) {
                    this.storeCache();
                }
                navigate('/MainPage/MainPage');
            } else {
                alert('WRONG username or password');
                navigate('/');
            }
        })
    }

    storeCache() {
        console.log('stroing cred in cache');
        this.localStorage.setItem("account", this.state.account);
        this.localStorage.setItem("password", this.state.password); 
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
            console.log(data);
            if (data.success) {
                if (this.localStorage != null) {
                    this.storeCache()
                }
                console.log('success')
                navigate('/MainPage/MainPage')
            } else {
                alert('user name used already!')
            }
        })
    }
    render() {
        return(
            <div>      
            <input type="text" onChange={(e)=>{this.setState({account: e.target.value, password: this.state.password})}}/>
            <div>輸入密碼</div>
            <input type="password" onChange={(e)=>{this.setState({account: this.state.account, password: e.target.value})}}/>
            <form ref="form" onSubmit={(e) => this.handleSubmit(e, this.state.account, this.state.password)}>
                <button type="submit">log in</button>
            </form>
            <form ref="form2" onSubmit={(e) => this.handleReg(e, this.state.account, this.state.password)}>
                <button type="submit">register</button>
            </form>
            </div>
        )
    }
    
}
export default LoginPage