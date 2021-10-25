import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Avatar, CardHeader } from "@mui/material";
import chart from "./samplewykres.png";
import dataFromJ from "./data.json";

export default function TemperatureCard() {
  const [data, setData] = useState(0);
  const [currentTemp, setcurrentTemp] = useState(0);
  const [isFahrenheit, setisFahrenheit] = useState(false);

  function changeToFahrenheit() {
    if (isFahrenheit == false) {
      setisFahrenheit(true);
      setcurrentTemp(currentTemp * (9 / 5) + 32);
    } else {
      setisFahrenheit(false);
      setcurrentTemp(data[[Object.keys(data).length] - 1].temperature);
    }
  }

  useEffect(() => {
    setData(dataFromJ);
    if (
      typeof Object.keys(data) !== "undefined" &&
      Object.keys(data).length > 0
    ) {
      setcurrentTemp(data[[Object.keys(data).length] - 1].temperature);
    }
  }, [data]);

  return (
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
          {currentTemp} {isFahrenheit == false ? "°C" : "°F"}
        </Typography>
        <Button onClick={changeToFahrenheit}>Switch</Button>
      </CardContent>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={chart}
      />
    </Card>
  );
}
