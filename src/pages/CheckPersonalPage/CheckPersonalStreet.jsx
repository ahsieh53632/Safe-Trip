import React from "react";
import {Link, navigate} from "gatsby";
import makeStyles from '@material-ui/styles/makeStyles/makeStyles.js';
import TextField from '@material-ui/core/TextField';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import {ThemeProvider} from "@material-ui/styles"
import { Typography } from "@material-ui/core"  
import theme from "../../components/theme"
import { cardTitle } from "assets/jss/material-kit-react.jsx";

import GetPersonalStreet from "./GetPersonalStreet.jsx"

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

const Street = (props) => {

    const classes = useStyles();

    return(
    <div>
        <GridContainer justify="center" style={{ margin: 10 }}>
            <GridItem xs={12} sm={12} md={4}>
                <Card>
                    <CardHeader
                        style={{
                            marginTop: 10,
                            color: "Black",
                            backgroundColor: "#f9a825",
                        }}
                    >
                        <h4>Street</h4>
                    </CardHeader>
                    <CardBody>
                        <GridContainer
                            alignItems="stretch"
                            justify="center"
                        >
                            <GridItem xs={8}>
                    <GetPersonalStreet Street={props.Street}/>
                            </GridItem>
                        </GridContainer>
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    </div>
    );
};

export default Street;