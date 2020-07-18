import React from "react";
import makeStyles from '@material-ui/styles/makeStyles/makeStyles.js';
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import {ThemeProvider} from "@material-ui/styles"
import { Typography } from "@material-ui/core"  
import theme from "../../components/theme"
import { cardTitle } from "assets/jss/material-kit-react.jsx";

import CreateURL from "./CreateURL.jsx";

const styles = {

    cardTitle,
    textCenter: {

      textAlign: "center"

    },
    textMuted: {

      color: "#6c757d"

    },
  };

const useStyles = makeStyles(styles);

export default function QRcodeset(){

    const classes = useStyles();

    return (

        <Card className={classes.textCenter}>
          <CardHeader color="danger">
            <ThemeProvider theme={theme}>
              <Typography variant="body1">
                <h2>Make Your Own QRcode </h2>
              </Typography>
            </ThemeProvider>
          </CardHeader>
          <CardBody>
            <h5 className={classes.cardTitle}>your qrcode</h5>
            <CreateURL/>
          </CardBody>
          <CardFooter className={classes.textMuted}> 
          </CardFooter>
        </Card>

      );
      
}