import React,{useState,useEffect} from "react"
import Header from "../components/Header/Header"
import Check from "../pages/LoginPage/Check"
const LoginPage=()=>{
    const[ID,setID]=useState("");
    const[passward,setpassward]=useState("");
    const[getData,setgetData]=useState(false);
    const a=()=>{
        if(getData===true){
            return <Check ID={ID}/>;
        }
    }
    
    return(
        <div>
            <Header
          absolute
          color="transparent"
          brand="123"  
        />
        <div>輸入帳號</div>
        <input type="text" onChange={(e)=>{setID(e.target.value)}}/>
        <div>輸入密碼</div>
        <input type="text" onChange={(e)=>{setpassward(e.target.value)}}/>
        <button type="submit">確認</button>
        <button type="submit">創建帳戶</button>
        </div>
    )
    
}
export default LoginPage