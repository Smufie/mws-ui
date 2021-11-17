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

export default function Home() {
  const [data, setData] = useState(0);
  const [currentTemp, setCurrentTemp] = useState(0);
  const [currentAirPressure, setCurrentAirPressure] = useState(0);
  const [currentAirHumidity, setCurrentAirHumidity] = useState(0);

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
    }
  }, [data]);

  return (
    <Container className="Home">
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item md={4}>
          <Card sx={{ maxWidth: 345 }} style={{ height: "360px" }}>
            <CardHeader
              style={{
                background: "linear-gradient(45deg, #141e30 30%, #243b55 90%)",
                color: "white",
              }}
              avatar={<Avatar>T</Avatar>}
              title={<Typography>Temperature</Typography>}
            />
            <CardContent align="right">
              <Typography gutterBottom variant="h3" component="div">
                {currentTemp}°C
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ maxWidth: 345 }} style={{ height: "360px" }}>
            <CardHeader
              style={{
                background: "linear-gradient(45deg, #141e30 30%, #243b55 90%)",
                color: "white",
              }}
              avatar={<Avatar>P</Avatar>}
              title={<Typography>Air Pressure</Typography>}
            />
            <CardContent align="right">
              <Typography gutterBottom variant="h3" component="div">
                {currentAirPressure}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ maxWidth: 345 }} style={{ height: "360px" }}>
            <CardHeader
              style={{
                background: "linear-gradient(45deg, #141e30 30%, #243b55 90%)",
                color: "white",
              }}
              avatar={<Avatar>H</Avatar>}
              title={<Typography>Air Humidity</Typography>}
            />
            <CardContent align="right">
              <Typography gutterBottom variant="h3" component="div">
                {currentAirHumidity}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
