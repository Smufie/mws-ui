import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import TemperatureCard from "./homeScreenCards/TemperatureCard";
import AirPressureCard from "./homeScreenCards/AirPressureCard";
import AirHumidityCard from "./homeScreenCards/AirHumidityCard";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Home = () => (
  <Container className="Home">
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item md={4}>
        <TemperatureCard />
      </Grid>
      <Grid item md={4}>
        <AirPressureCard />
      </Grid>
      <Grid item md={4}>
        <AirHumidityCard />
      </Grid>
    </Grid>
  </Container>
);

export default Home;
