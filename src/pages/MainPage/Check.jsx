import React from "react";
// material-ui components
// import makeStyles from "@material-ui/styles/makeStyles/makeStyles.js";
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
import makeStyles from "@material-ui/styles/makeStyles/makeStyles.js";


const styles = {cardTitle, textCenter: {textAlign: "center"},textMuted: {color: "#6c757d"},}

const Check = (props) => {
  const { classes, ...rest} = props; 
  return (
    <Card className={classes.textCenter}>
      <CardHeader color="danger">
        <ThemeProvider theme={theme}>
          <Typography variant="body1">
            <h2>AtRisk</h2>
          </Typography>
        </ThemeProvider>
      </CardHeader>
      <CardBody>
        <h5 className={classes.cardTitle}>See when and where you have encoutered any Infected person</h5>
          <Link to="../../CheckPage/CheckPage">
            <Button color="primary">GO!</Button>
          </Link>
      </CardBody>
      <CardFooter className={classes.textMuted}>
          
      </CardFooter>
    </Card>
  );
}

export default withStyles(styles)(Check)