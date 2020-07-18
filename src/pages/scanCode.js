
// customQueryStringComponent.js

import React from "react"
import PropTypes from "prop-types"
import withLocation from "./withLocation"

const ScanQR = ({ search }) => {
    console.log('hi');
  const { custom } = search;
  console.log(custom);
  return <div><h1>123</h1><p>Custom Value: {custom}</p></div>
}

ScanQR.propTypes = {
  search: PropTypes.object,
}

export default withLocation(ScanQR)