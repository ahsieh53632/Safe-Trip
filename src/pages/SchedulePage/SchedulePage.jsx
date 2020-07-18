/**
 * Schedule page for the app
 * @flow
 */

import React from "react";
// nodejs library that concatenates classes
//import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Footer from "components/Footer/Footer.jsx";
import ScheduleComponent from "./ScheduleComponent";

import image from "assets/img/bg6.jpg";

type Props = {};

const SchedulePage = (props: Props) => {
    return (
        <div>
            <Header
                brand="Schedule"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 200,
                    color: "white",
                }}
            />
            <div
              style={{
                backgroundImage: "url(" + image + ")",
                backgroundSize: "cover",
                backgroundPosition: "top center",
                height: "auto",
                display: "inherit",
                position: "relative",
                margin: "0",
                padding: "0",
                paddingTop: "15vh",
                border: "0",
                alignItems: "center",
              }}
            >
                <GridContainer justify="center" style={{ margin: 10 }}>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card>
                            <CardHeader color="info">
                                <h4>Schedule</h4>
                            </CardHeader>
                            <CardBody>
                                <ScheduleComponent />
                            </CardBody>
                        </Card>
                    </GridItem>
                </GridContainer>
                <Footer whiteFont />
            </div>
        </div>
    );
};

export default SchedulePage;
