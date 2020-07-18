
// customQueryStringComponent.js

import React from "react"
import PropTypes from "prop-types"
import withLocation from "./withLocation"
import { navigate } from "@reach/router";

const ScanQR = ({ search }) => {
    console.log('hi');
  const { info } = search;
  console.log(info)
  var objs = JSON.parse(info);
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
return <div><h1>type:{type}</h1><p>thisid: {thisid}</p><p>locationid: {locationid}</p></div>
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
