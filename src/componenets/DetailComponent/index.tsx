import React from "react";
import { Card, CardHeader, Typography, CardContent } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useStyles from "./styles";

interface IProps {
  title: string;
}

const Details = ({ title }: IProps) => {
  const classes = useStyles();

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">$50</Typography>
        {/* <Doughnut data="Data" /> */}
      </CardContent>
    </Card>
  );
};

export default Details;
