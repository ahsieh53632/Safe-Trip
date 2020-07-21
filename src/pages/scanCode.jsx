
// customQueryStringComponent.js

import React from "react"
import PropTypes from "prop-types"
import withLocation from "./withLocation"
import { navigate } from "@reach/router";

const ScanQR = ({ search }) => {
    console.log('hi');
  let isMounted = true;
  const { info } = search;
  console.log(info)
  var objs = {"Type": "", "locationName": "", "address": "","account":"","Date":"hihi"};
  if (typeof info !== 'undefined') {
    objs = JSON.parse(info);
  }
  console.log(objs)
  var type = objs.type;
  var locationid = objs.locationid;
  var otherpersonid = objs.otherpersonid;
  var date = objs.date;
  if (window.localStorage != null) {
    console.log(window.localStorage)
    var thisid = window.localStorage.getItem("account")
  } else {
    alert('please login or register than scan qr code again!');
    navigate('/')
  }
  if (type === "beento") {
    console.log('adding type: beento');
    fetch('https://safe-trip.herokuapp.com/scanCode/beento', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "account": thisid,
                "locationId": Number.parseInt(locationid),
                "date": date
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                alert('successfully ADDED to beento table')
                console.log('success');
                window.location = '/MainPage/MainPage'
            } else {
                alert('FAILED! please relogin or register');
                window.location = '/'
            }
        })
  } else {
    console.log('adding type: encounter');
    fetch('https://safe-trip.herokuapp.com/scanCode/encounter', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "account": thisid,
                "locationId": Number.parseInt(locationid),
                "otherpid": otherpersonid,
                "date": date
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.success) {
              if (data.cond === "RISKY") {
                alert("This person is at RISK!!!!!")
              } else {
                alert('SAFE! successfully ADDED to encounter table')
              }
              console.log('success');
              isMounted = false;
              window.location = '/MainPage/MainPage'
            } else {
              alert('FAILED! please relogin or register');
              isMounted = false;
              window.location = '/LoginPage'
            }
        })
  }
return <div><h1>type:{type}</h1><p>yourid: {thisid}</p><p>locationid: {locationid}</p></div>
}

ScanQR.propTypes = {
  search: PropTypes.object,
}


export default withLocation(ScanQR)


// class ScanQR extends React.Component {
//   type;
//   locationid;
//   date;
//   otherid;
//   thisid;

//   constructor(props) {
//     super(props);    
//     if (this.window.localStorage != null) {
//       this.thisid = this.window.localStorage.getItem("account")
//     } else {
//       alert('please login or register than scan qr code again!');
//       // navigate('/')
//     }

//     this.type = this.props.type;
//     this.locationid = this.props.locationid;
//     this.date = this.props.date;
//     this.otherid = this.props.otherid;
//   }

//   render() {
//     return (
//       <div><h1>{this.thisid}</h1><p>Custom Value: {this.locationid}</p></div>
//     )

//   }


//}
