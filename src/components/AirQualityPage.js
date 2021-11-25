import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Container, Grid, Modal, Typography } from "@mui/material";
import customInstance from "../api/axiosConfig";
import Chart from "react-google-charts";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";
import BasicModal from "./AIQModal";

export default function AirQualityPage() {
  const [data, setData] = useState(0);
  const [qualityVal, setQualityVal] = useState([
    ["x", "Air Quality"],
    [0, 0],
  ]);
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
    var helpArray = [["x", "Air Quality"]];
    if (data !== 0 && data.length !== 0) {
      for (let row of data) {
        const { measurementDate, airQuality } = row;
        var time = new Date(measurementDate);
        helpArray.push([time, airQuality]);
      }
      setQualityVal(helpArray);
    }
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
          Air Quality Details
        </Typography>

        <Chart
          width={"60vw"}
          height={"80vh"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={qualityVal}
          options={{
            hAxis: {
              title: "Date Time",
            },
            vAxis: {
              title: "AQI",
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
          <Button  style={{marginLeft: 10}} variant="contained" onClick={() => setTimeStampAsDay()}>
            Last Day
          </Button>
          <Button  style={{marginLeft: 10}} variant="contained" onClick={() => setTimeStampAsWeek()}>
            Last Week
          </Button>
          <Button  style={{marginLeft: 10}} variant="contained" onClick={() => setTimeStampAsMonth()}>
            Last Month
          </Button>
        </Grid>
        <BasicModal />
      </Grid>
    </Container>
  );
}
