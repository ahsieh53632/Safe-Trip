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
import { Typography, withStyles } from "@material-ui/core"  
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


const CheckPersonal = (props) => {
  const {classes, ...rest} = props;
  return (
    <Card className={classes.textCenter}>
      <CardHeader color="primary">
        <ThemeProvider theme={theme}>
          <Typography variant="body1">
            <h2>Check personal data</h2>
          </Typography>
        </ThemeProvider>
      </CardHeader>
      <CardBody>
        <h5 className={classes.cardTitle}>Check your personal data</h5>
          <Link to="../../CheckPersonalPage/CheckPersonalPage">
            <Button color="primary">GO!</Button>
          </Link>
      </CardBody>
      <CardFooter className={classes.textMuted}>
          
      </CardFooter>
    </Card>
  );
};


export default withStyles(styles)(CheckPersonal);