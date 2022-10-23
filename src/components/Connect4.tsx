import { Card, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { CircleValue } from "../enum/CircleValue";

export function Connect4() {
  const board = useState<Array<Array<number>>>();

  useEffect(() => {
    let board = [];
    for (let row = 0; row < 6; row++) {
      let rows = [CircleValue.None];
      for (let col = 0; col < 7; col++) {
        board.push(rows);
      }
    }
  }, []);

  const card = () => {
    return (
      <Grid item xs={1}>
        <Card>hello</Card>
      </Grid>
    );
  };

  const someArray = [1, 2, 3, 4, 5, 6];

  return (
    <Grid container spacing={0}>
      {someArray.map((things) => {
        return (
          <Grid item xs={12}>
            <Grid container spacing={0}>
              <Grid item xs={1}>
                <Card>hello</Card>
              </Grid>
              <Grid item xs={1}>
                <Card>hello</Card>
              </Grid>
              <Grid item xs={1}>
                <Card>hello</Card>
              </Grid>
              <Grid item xs={1}>
                <Card>hello</Card>
              </Grid>
              <Grid item xs={1}>
                <Card>hello</Card>
              </Grid>
              <Grid item xs={1}>
                <Card>hello</Card>
              </Grid>
              <Grid item xs={1}>
                <Card>hello</Card>
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}
