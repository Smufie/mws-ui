import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { Avatar, CardHeader } from "@mui/material";
import customInstance from "../api/axiosConfig";
import Chart from "react-google-charts";

export default function Home() {
  const [data, setData] = useState(0);
  const [chartTemp, setChartTemp] = useState([]);

  useEffect(() => {
    async function getData() {
      await customInstance.get("measurements").then((res) => {
        setData(res.data);
      });
    }
    getData();
  }, []);

  useEffect(() => {}, [chartTemp]);

  useEffect(() => {
    var helpArray = [["x", "Temperature"]];
    if (data !== 0) {
      for (let row of data) {
        const { measurementDate, temperature } = row;
        var time = new Date(measurementDate);
        helpArray.push([time, temperature]);
      }
    }
    console.log(helpArray);
    setChartTemp(helpArray);
  }, [data]);

  return (
    <Container>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Typography variant="h3" align="center">
          Temperature Details
        </Typography>

        <Chart
          width={"800px"}
          height={"400px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={chartTemp}
          options={{
            hAxis: {
              title: "Date Time",
            },
            vAxis: {
              title: "°C",
            },
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </Grid>
    </Container>
  );
}
