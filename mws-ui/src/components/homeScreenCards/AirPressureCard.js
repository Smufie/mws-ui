import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Avatar, CardHeader } from "@mui/material";

export default function AirPressureCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar>P</Avatar>}
        title={<Typography>Air Pressure</Typography>}
      />
      Current 21:37 °C
    </Card>
  );
}
