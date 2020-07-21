// customQueryStringComponent.js

import React from "react"
import PropTypes from "prop-types"
import withLocation from "./withLocation"
import "assets/scss/material-kit-react.scss?v=1.4.0";


const ScanQRLocation = ({ search }) => {
    console.log('hi');
  let isMounted = true;
  const { info } = search;
  console.log(info)
  var cache_account = null;

  var objs = {"type": "", "locationName": "", "address": "","account": "","Date":"hihi"};
  if (typeof info !== 'undefined') {
    objs = JSON.parse(info);
  }
  console.log(objs)
var Type = objs.type;
var locationName = objs.locationName;
var address = objs.address;
var account = objs.account;
var Date = objs.Date;
  
  if (typeof window !== 'undefined') {
    if (Type === "create") {
      console.log('adding type: create');
      fetch('https://safe-trip.herokuapp.com/createLoc/create', {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  "account": account,
                  "locationName": locationName,
                  "date": Date,
                  "address":address
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
                  alert('FAILED!');
                  window.location = '/'
              }
          })
    } 
  }
return <div><h1>type:{Type}</h1><p>yourid: {account}</p><p>locationid: {locationName}</p></div>
}

ScanQRLocation.propTypes = {
  search: PropTypes.object,
}


export default withLocation(ScanQRLocation)