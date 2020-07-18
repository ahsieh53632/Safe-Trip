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

export default function AddID() {
  const classes = useStyles();
  return (
    <Card className={classes.textCenter}>
      <CardHeader color="danger">
        <ThemeProvider theme={theme}>
          <Typography variant="body1">
            <h2>Add encounter ID</h2>
          </Typography>
        </ThemeProvider>
      </CardHeader>
      <CardBody>
        <h5 className={classes.cardTitle}>Manually Insert Other Person or Location ID if you didn't scan their QRcode</h5>
          <Link to="../../AddID/AddIDPage">
            <Button color="primary">GO!</Button>
          </Link>
      </CardBody>
      <CardFooter className={classes.textMuted}>
          
      </CardFooter>
    </Card>
  );
}