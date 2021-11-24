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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faThermometerHalf,
  faWind,
  faTint,
} from "@fortawesome/free-solid-svg-icons";
import ReactCardFlip from "react-card-flip";

export default function Home() {
  const [data, setData] = useState(0);
  const [currentTemp, setCurrentTemp] = useState(0);
  const [currentAirPressure, setCurrentAirPressure] = useState(0);
  const [currentAirHumidity, setCurrentAirHumidity] = useState(0);
  const [currentAirQuality, setCurrentAirQuality] = useState(0);
  const [lastMeasurmentDate, setLastMeasurmentDate] = useState("");
  const [flipTemperatureCard, setFlipTemperatureCard] = useState(false);

  function aiqColor() {
    if (currentAirQuality <= 13) {
      return "#008000";
    } else if (currentAirQuality >= 13.1 && currentAirQuality <= 35) {
      return "#7CFC00";
    } else if (currentAirQuality >= 35.1 && currentAirQuality <= 55) {
      return "#FFFF00";
    } else if (currentAirQuality >= 55.1 && currentAirQuality <= 75) {
      return "#FFA500";
    } else if (currentAirQuality >= 75.1 && currentAirQuality <= 110) {
      return "#FF0000";
    } else if (currentAirQuality >= 110) {
      return "#B22222";
    } else {
      return "#FFFFFF";
    }
  }

  useEffect(() => {
    async function getData() {
      await customInstance.get("measurements").then((res) => {
        setData(res.data);
      });
    }
    getData();
  }, []);

  useEffect(() => {
    if (data !== 0) {
      var length = data.length;
      setCurrentTemp(data[length - 1].temperature);
      setCurrentAirPressure(data[length - 1].pressure);
      setCurrentAirHumidity(data[length - 1].humidity);
      setCurrentAirQuality(data[length - 1].airQuality);
      setLastMeasurmentDate(data[length - 1].measurementDate.split("T"));
    }
  }, [data]);

  return (
    <Container className="Margin">
      <Grid container spacing={2}>
        {/*-------------------------- TEMPERATURE CARD --------------------------*/}
        <Grid item xs={8} md={4}>
          <ReactCardFlip
            isFlipped={flipTemperatureCard}
            flipDirection="vertical"
          >
            <Card className="CardMainPage">
              <CardHeader
                style={{
                  background:
                    "linear-gradient(45deg, #141e30 30%, #243b55 90%)",
                  color: "white",
                }}
                avatar={
                  <FontAwesomeIcon
                    icon={faThermometerHalf}
                    size="2x"
                    color="white"
                  />
                }
                title={<Typography>Temperature</Typography>}
              />
              <CardContent align="right">
                <Typography gutterBottom variant="h3" component="div">
                  {currentTemp}°C
                </Typography>
                <Button onClick={() => setFlipTemperatureCard(true)}>
                  FLIP ME
                </Button>
              </CardContent>
            </Card>
            <Card className="CardMainPage">
              <CardHeader
                style={{
                  background:
                    "linear-gradient(45deg, #141e30 30%, #243b55 90%)",
                  color: "white",
                }}
                avatar={
                  <FontAwesomeIcon
                    icon={faThermometerHalf}
                    size="2x"
                    color="white"
                  />
                }
                title={<Typography>Temperature</Typography>}
              />
              <CardContent align="right">
                <Typography gutterBottom variant="h4" component="div">
                  Some boring text
                </Typography>
                <Button onClick={() => setFlipTemperatureCard(false)}>
                  FLIP ME
                </Button>
              </CardContent>
            </Card>
          </ReactCardFlip>
        </Grid>
        {/*-------------------------- AIR PRESSURE CARD --------------------------*/}
        <Grid item xs={8} md={4}>
          <Card className="CardMainPage">
            <CardHeader
              style={{
                background: "linear-gradient(45deg, #141e30 30%, #243b55 90%)",
                color: "white",
              }}
              avatar={<FontAwesomeIcon icon={faWind} size="2x" color="white" />}
              title={<Typography>Air Pressure</Typography>}
            />
            <CardContent align="right">
              <Typography gutterBottom variant="h3" component="div">
                {currentAirPressure}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/*-------------------------- AIR HUMIDITY CARD --------------------------*/}
        <Grid item xs={8} md={4}>
          <Card className="CardMainPage">
            <CardHeader
              style={{
                background: "linear-gradient(45deg, #141e30 30%, #243b55 90%)",
                color: "white",
              }}
              avatar={<FontAwesomeIcon icon={faTint} size="2x" color="white" />}
              title={<Typography>Air Humidity</Typography>}
            />
            <CardContent align="right">
              <Typography gutterBottom variant="h3" component="div">
                {currentAirHumidity}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8} md={4}></Grid>
        {/*-------------------------- AIR QUALITY CARD --------------------------*/}
        <Grid item xs={8} md={4}>
          <Card
            className="CardMainPage"
            style={{
              backgroundColor: aiqColor(),
            }}
            align="left"
          >
            <CardHeader
              style={{
                background: "linear-gradient(45deg, #141e30 30%, #243b55 90%)",
                color: "white",
              }}
              avatar={
                <FontAwesomeIcon icon={faCloud} size="2x" color="white" />
              }
              title={<Typography>Air Quality</Typography>}
            />
            <CardContent align="right">
              <Typography gutterBottom variant="h3" component="div">
                {currentAirQuality} AQI
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Typography align="center">
        Last Measurment: {lastMeasurmentDate[0]} {lastMeasurmentDate[1]}
      </Typography>
    </Container>
  );
}
