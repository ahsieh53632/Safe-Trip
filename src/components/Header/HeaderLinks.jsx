/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons

// React icons
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

// core components
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

import WarningSign from "pages/MainPage/WarningSign.jsx"

function HeaderLinks({ ...props }) {
    const { classes } = props;
    return (
            <WarningSign/>
    );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
