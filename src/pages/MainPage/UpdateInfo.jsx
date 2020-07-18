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

export default function UpadteInfo() {
  const classes = useStyles();
  return (
    <Card className={classes.textCenter}>
      <CardHeader color="primary">
        <ThemeProvider theme={theme}>
          <Typography variant="body1">
            <h2>Upadte my Info</h2>
          </Typography>
        </ThemeProvider>
      </CardHeader>
      <CardBody>
        <h5 className={classes.cardTitle}>Special title treatment</h5>
          <Link to="../../UpdatePage/UpdatePage">
            <Button color="primary">GO!</Button>
          </Link>
      </CardBody>
      <CardFooter className={classes.textMuted}>
          
      </CardFooter>
    </Card>
  );
}

// function UpdateInfo(){
// return (
//   <div>
//         <GridContainer justify="center" style={{ margin: 10 }}>
//           <GridItem xs={30} sm={30} md={8}>
//           <Card>
//             <CardHeader
//                 style={{
//                     marginTop: 40,
//                     color: "white",
//                     backgroundColor: "#039fdd",
//                 }}
//             >
//                 <ThemeProvider theme={theme}>
//                   <Typography variant="body1">explaination Upadte Info</Typography>
//                 </ThemeProvider>
//                 {/* <h4>explaination</h4> */}
//             </CardHeader>
//             <CardBody>
//           <GridContainer alignItems="stretch" justify="center" spacing={10}>

//             <GridItem lg={8}>
              // <Link to="../CheckPage/CheckPage">
              //   <Button
              //       fullWidth
              //       variant="contained"
              //       size="medium"
              //       style={{
              //           color: "white",
              //           backgroundColor: "#f8964b",
              //       }}>
              //       更新我的路程
              //   </Button>
              // </Link>

//             </GridItem>

//           </GridContainer> 
//           </CardBody>
//       </Card>
//           </GridItem>
//       </GridContainer>
//   </div>
//   );
// }

// UpdateInfo.defaultProps = {
// // if we had any optional props, we can define what values they have here
// };

// export default UpdateInfo;


