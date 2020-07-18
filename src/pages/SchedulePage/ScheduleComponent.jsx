/**
 * Schedule component
 * @flow
 */

import React from "react";
// nodejs library that concatenates classes
//import classNames from "classnames"
// Gatsby GraphQL libraries
import { useStaticQuery, graphql } from "gatsby";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components

type Props = {};

const border = "1px solid black";
const borderBottom = "1px solid #ddd";
const headerColor = "lightblue";

const styles = {
    schedule: {
        // background: "linear-gradient(to right, #8360c3, #2ebf91)",
        // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        border: 0,
        borderRadius: 3,
        //boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        // boxShadow: "0 3px 5px 2px rgba(0, 0, 0)",
        color: "white",
        height: "100%",
        width: "100%",
        "& table": {
            margin: "auto",
            height: "100%",
            width: "100%",
            border: border,
            borderCollapse: "collapse",
            "& thead": {
                "& tr": {
                    "& th": {
                        color: "black",
                        border: border,
                        borderBottom: borderBottom,
                        backgroundColor: headerColor,
                    },
                },
            },
            "& tbody": {
                "& tr": {
                    "& td": {
                        color: "black",
                        border: border,
                        borderBottom: borderBottom,
                    },
                },
            },
        },
    },
};

const ScheduleComponent = (props: Props) => {
    const { classes } = props;
    const data = useStaticQuery(graphql`
        query ScheduleComponentQuery {
            markdownRemark(frontmatter: { title: { eq: "Schedule" } }) {
                frontmatter {
                    title
                }
                html
            }
        }
    `);
    return (
        <div
            className={classes.schedule}
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
    );
};

export default withStyles(styles)(ScheduleComponent);
