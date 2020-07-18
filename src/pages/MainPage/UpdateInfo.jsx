import React from 'react';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "@material-ui/core/Button";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import {Link, navigate} from "gatsby";



function UpdateInfo(){

return (
  <div>
        <GridContainer justify="center" style={{ margin: 10 }}>
          <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader
                style={{
                    marginTop: 40,
                    color: "white",
                    backgroundColor: "#039fdd",
                }}
            >
                <h4>explaination</h4>
            </CardHeader>
            <CardBody>
          <GridContainer alignItems="stretch" justify="center" spacing={10}>

            <GridItem lg={8}>
              <Link to="../CheckPage/CheckPage">
                <Button
                    fullWidth
                    variant="contained"
                    size="medium"
                    style={{
                        color: "white",
                        backgroundColor: "#f8964b",
                    }}>
                    更新我的路程
                </Button>
              </Link>

            </GridItem>

          </GridContainer> 
          </CardBody>
      </Card>
          </GridItem>
      </GridContainer>
  </div>
  );
}

UpdateInfo.defaultProps = {
// if we had any optional props, we can define what values they have here
};

export default UpdateInfo;


