/**
 * Schedule component
 * @flow
 */

import React from "react";
// nodejs library that concatenates classes
//import classNames from "classnames"
// Gatsby GraphQL libraries
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Schedule } from "@material-ui/icons";
import ScheduleComponent from "./ScheduleComponent";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

type Props = {};

const ScheduleDialog = (props: Props) => {
    const { classes } = props;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button className={classes.navLink} onClick={handleClickOpen}>
                <Schedule className={classes.icons} />
                Schedule
            </Button>
            <Dialog
                fullWidth
                open={open}
                onClose={handleClose}
                aria-labelledby="schedule-dialog-title"
                aria-describedby="schedule-dialog-description"
            >
                <DialogTitle id="schedule-dialog-title" align="center">Schedule</DialogTitle>
                <DialogContent style={{ paddingBottom: "0px" }}>
                    <GridContainer
                        alignContent="center"
                        alignItems="center"
                        justify="center"
                    >
                        <GridItem sm={12} md={6}>
                            <ScheduleComponent />
                        </GridItem>
                    </GridContainer>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default withStyles(headerLinksStyle)(ScheduleDialog);
