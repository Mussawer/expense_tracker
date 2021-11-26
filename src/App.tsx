import React from "react";
import Details from "./components/DetailComponent";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import MainComponent from "./componenets/MainComponent";
const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: "100vh" }}>
        <Grid item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.main}>
          <MainComponent />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
