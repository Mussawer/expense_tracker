import React from "react";
import Details from "./componenets/DetailComponent";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: "100vh" }}>
        <Grid item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
