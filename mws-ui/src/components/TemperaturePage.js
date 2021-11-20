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
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";

export default function TempertaurePage() {
  const [data, setData] = useState(0);
  const [chartTemp, setChartTemp] = useState([]);
  const [searchFromValue, setSearchFromValue] = useState(new Date());
  const [searchToValue, setSearchToValue] = useState(new Date());

  useEffect(() => {
    async function getData() {
      await customInstance.get("measurements").then((res) => {
        setData(res.data);
      });
    }
    getData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    var helpArray = [["x", "Temperature"]];
    if (data !== 0) {
      for (let row of data) {
        const { measurementDate, temperature } = row;
        var time = new Date(measurementDate);
        helpArray.push([time, temperature]);
      }
    }
    setChartTemp(helpArray);
  }, [data]);

  function filter() {
    var searchFrom = new Date(
      searchFromValue.setHours(searchFromValue.getHours() + 1)
    ).toISOString();
    var searchTo = new Date(searchToValue);
    // searchFrom = searchFrom.setHours(searchFrom.getHours() + 1);
    // searchTo = searchTo.setHours(searchTo.getHours() + 1);
    console.log(searchFrom);
    console.log(searchFrom);
    // searchFrom = searchFrom
    //   .toISOString()
    //   .substring(0, searchFrom.toISOString().length - 5);
    // customInstance
    //   .get(
    //     "measurements/" +
    //       searchFrom +
    //       "/" +
    //       searchTo.toISOString().substring(0, searchTo.toISOString().length - 5)
    //   )
    //   .then((res) => {
    //     setData(res.data);
    //   });
  }

  const handleFromDataChange = (newValue) => {
    setSearchFromValue(newValue);
  };

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
        <Grid item xs={4}>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DateTimePicker
              label="Filter From"
              value={searchFromValue}
              onChange={(newValue) => {
                setSearchFromValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />

            <DateTimePicker
              label="Filter To"
              value={searchToValue}
              onChange={(newValue) => {
                setSearchToValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={4}>
          <Button onClick={() => filter()}>Filter</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
