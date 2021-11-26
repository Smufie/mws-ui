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
  faCalendar,
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
  var fahrenheit = currentTemp * 1.8 + 32;

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

  function getDate() {
    if (lastMeasurmentDate != "")
      return (
        lastMeasurmentDate[0] + " " + lastMeasurmentDate[1].substring(0, 5)
      );
  }

  return (
    <Container className="Margin">
      <Grid className="homeGrid" container spacing={2} display="flex">
        {/*-------------------------- TEMPERATURE CARD --------------------------*/}
        <Grid item xs={12} sm={6} md={4}>
          <ReactCardFlip
            isFlipped={flipTemperatureCard}
            flipDirection="vertical"
          >
            <Card
              className="CardMainPage"
              onClick={() => setFlipTemperatureCard(true)}
            >
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
              <CardContent align="center">
                <Typography gutterBottom variant="h2" component="div">
                  {currentTemp}°C
                </Typography>
              </CardContent>
            </Card>
            <Card
              className="CardMainPage"
              onClick={() => setFlipTemperatureCard(false)}
            >
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
              <CardContent align="center">
                <Typography gutterBottom variant="h2" component="div">
                  {fahrenheit}°F
                </Typography>
              </CardContent>
            </Card>
          </ReactCardFlip>
        </Grid>
        {/*-------------------------- AIR PRESSURE CARD --------------------------*/}
        <Grid item xs={12} sm={6} md={4}>
          <Card className="CardMainPage">
            <CardHeader
              style={{
                background: "linear-gradient(45deg, #141e30 30%, #243b55 90%)",
                color: "white",
              }}
              avatar={<FontAwesomeIcon icon={faWind} size="2x" color="white" />}
              title={<Typography>Air Pressure</Typography>}
            />
            <CardContent align="center">
              <Typography gutterBottom variant="h2" component="div">
                {currentAirPressure} hPa
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/*-------------------------- AIR HUMIDITY CARD --------------------------*/}
        <Grid item xs={12} sm={6} md={4}>
          <Card className="CardMainPage">
            <CardHeader
              style={{
                background: "linear-gradient(45deg, #141e30 30%, #243b55 90%)",
                color: "white",
              }}
              avatar={<FontAwesomeIcon icon={faTint} size="2x" color="white" />}
              title={<Typography>Air Humidity</Typography>}
            />
            <CardContent align="center">
              <Typography gutterBottom variant="h2" component="div">
                {currentAirHumidity}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/*-------------------------- AIR QUALITY CARD --------------------------*/}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            className="CardMainPage"
            style={{
              borderStyle: "solid",
              borderColor: aiqColor(),
              borderWidth: 5,
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
            <CardContent align="center">
              <Typography gutterBottom variant="h2" component="div">
                {currentAirQuality} AQI
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/*-------------------------- Last Measurment Card --------------------------*/}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            className="CardMainPage"
            align="left"
            style={{
              background: "linear-gradient(45deg, #141e30 30%, #243b55 90%)",
              color: "white",
            }}
          >
            <CardHeader
              avatar={
                <FontAwesomeIcon icon={faCalendar} size="2x" color="white" />
              }
              title={<Typography>Last Measurment</Typography>}
            />
            <CardContent align="center">
              <Typography gutterBottom variant="h3" component="div">
                {getDate()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Typography align="center">To view more, click on the cards</Typography>
    </Container>
  );
}
