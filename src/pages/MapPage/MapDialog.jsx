/**
 * Schedule component
 * @flow
 */

import React from "react";
// nodejs library that concatenates classes
//import classNames from "classnames"
// Gatsby GraphQL libraries
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Map } from "@material-ui/icons";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

type Props = {};

const MapDialog = (props: Props) => {
    const { classes } = props;
    const [open, setOpen] = React.useState(false);

    const data = useStaticQuery(graphql`
        query MapDialogQuery {
            file(relativePath: { eq: "totmap.png" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button className={classes.navLink} onClick={handleClickOpen}>
                <Map className={classes.icons} />
                Map
            </Button>
            <Dialog
                fullWidth
                open={open}
                onClose={handleClose}
                aria-labelledby="map-dialog-title"
                aria-describedby="map-dialog-description"
            >
                {/* <DialogTitle id="map-dialog-title" align="center">
                    Map
                </DialogTitle> */}
                <DialogContent>
                    <Img
                        fluid={data.file.childImageSharp.fluid}
                        objectFit="contain"
                        style={{ width: "100%", height: "100%" }}
                        alt="Map"
                    />
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

export default withStyles(headerLinksStyle)(MapDialog);
