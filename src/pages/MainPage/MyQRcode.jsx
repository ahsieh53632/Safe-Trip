import React from "react";
// material-ui components
import makeStyles from "@material-ui/styles/makeStyles/makeStyles.js";
// core components
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import {Link, navigate} from "gatsby";
import {
  ThemeProvider
} from "@material-ui/styles"
import { Typography } from "@material-ui/core"  
import theme from "../../components/theme"

import { cardTitle } from "assets/jss/material-kit-react.jsx";

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

export default function MyQRcode() {
  const classes = useStyles();
  return (
    <Card className={classes.textCenter}>
      <CardHeader color="warning">
        <ThemeProvider theme={theme}>
          <Typography variant="body1">Show My QRcode</Typography>
        </ThemeProvider>
      </CardHeader>
      <CardBody>
        <h4 className={classes.cardTitle}>Special title treatment</h4>
        <p>
          With supporting text below as a
          natural lead-in to additional content.
        </p>

          <Link to="../QRcodePage/QRcodekPage">
            <Button color="primary">GO!</Button>
          </Link>
      </CardBody>
      <CardFooter className={classes.textMuted}>
          
      </CardFooter>
    </Card>
  );
}