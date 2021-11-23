import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import customInstance from "../api/axiosConfig";
import Chart from "react-google-charts";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";

export default function AirHumidityPage() {
  const [data, setData] = useState(0);
  const [chartHumidity, setChartHumidity] = useState([]);
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
    var helpArray = [["x", "Air Humidity"]];
    if (data !== 0) {
      for (let row of data) {
        const { measurementDate, humidity } = row;
        var time = new Date(measurementDate);
        helpArray.push([time, humidity]);
      }
    }
    setChartHumidity(helpArray);
  }, [data]);

  function filter() {
    var searchFrom = new Date(
      searchFromValue.setHours(searchFromValue.getHours() + 1)
    ).toISOString();
    var searchTo = new Date(
      searchToValue.setHours(searchToValue.getHours() + 1)
    ).toISOString();
    searchFrom = searchFrom.substring(0, searchFrom.length - 5);
    searchTo = searchTo.substring(0, searchTo.length - 5);

    console.log(searchTo);
    console.log(searchFrom);
    customInstance
      .get("measurements/" + searchFrom + "/" + searchTo)
      .then((res) => {
        setData(res.data);
      });
  }

  function setTimeStampAsDay() {
    setSearchToValue(new Date(Date.now()));
    setSearchFromValue(
      new Date(searchToValue.setDate(searchToValue.getDate() - 1))
    );
  }

  function setTimeStampAsWeek() {
    setSearchToValue(new Date(Date.now()));
    setSearchFromValue(
      new Date(searchToValue.setDate(searchToValue.getDate() - 7))
    );
  }

  function setTimeStampAsMonth() {
    setSearchToValue(new Date(Date.now()));
    setSearchFromValue(
      new Date(searchToValue.setMonth(searchToValue.getMonth() - 1))
    );
  }

  useEffect(() => {
    filter();
  }, [searchFromValue, searchToValue]);

  return (
    <Container className="Margin">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h3" align="center">
          Air Humidity Details
        </Typography>

        <Chart
          width={"60vw"}
          height={"80vh"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={chartHumidity}
          options={{
            hAxis: {
              title: "Date Time",
            },
            vAxis: {
              title: "%",
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
                setSearchFromValue(new Date(newValue));
              }}
              renderInput={(params) => <TextField {...params} />}
            />

            <DateTimePicker
              label="Filter To"
              value={searchToValue}
              onChange={(newValue) => {
                setSearchToValue(new Date(newValue));
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={4} m={2}>
          <Button variant="contained" onClick={() => setTimeStampAsDay()}>
            Last Day
          </Button>
          <Button variant="contained" onClick={() => setTimeStampAsWeek()}>
            Last Week
          </Button>
          <Button variant="contained" onClick={() => setTimeStampAsMonth()}>
            Last Month
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
