/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

import WarningSign from "pages/MainPage/WarningSign.jsx"

function HeaderLinks({ ...props }) {
    const { classes } = props;
    return (
        <List className={classes.list}>
            {/* <ListItem className={classes.listItem}>
                <Link to="/main-page" className={classes.navLink}>
                    <Home className={classes.icons} />
                    Home
                </Link>
            </ListItem> */}

            {/* <ListItem className={classes.listItem}>
            </ListItem> */}
            {/* <ListItem className={classes.listItem}>
                <MapDialog />
            </ListItem> */}

            <ListItem className={classes.listItem}>
            </ListItem>
            
        </List>
    );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
