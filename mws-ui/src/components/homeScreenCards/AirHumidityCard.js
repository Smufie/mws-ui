import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Avatar, CardHeader } from "@mui/material";

export default function AirHumidityCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        style={{
          background: "linear-gradient(45deg, #243b55 30%, #141e30 90%)",
          color: "white",
        }}
        avatar={<Avatar>H</Avatar>}
        title={<Typography>Air Humidity</Typography>}
      />
      Current 21:37 °C
    </Card>
  );
}
