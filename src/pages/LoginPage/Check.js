import React,{useState,useEffect} from 'react';


const Check=(props)=>{
    const[isRightID,setRightID]=useState(false);
    const[isRightpassward,setRightpassward]=useState(false);
    const checkID=()=>{
        if(props.ID==="1234")
            setRightID(true)
        }
    useEffect(()=>{
        checkID();
    },[props.ID]);
}
export default Check