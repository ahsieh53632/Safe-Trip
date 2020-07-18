import React from "react"
import {link, navigate} from "gatsby"
import { useParams } from "react-router";

import PropTypes from "prop-types";


class scanQR extends React.Component {
    

    render() {
        
        return(
            <p> {this.props.match.params.id}</p>
        )
    }
}

export default scanQR;