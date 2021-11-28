import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import TemperaturePage from "./components/TemperaturePage";
import AirPressurePage from "./components/AirPressurePage";
import AirHumidityPage from "./components/AirHumidityPage";
import AirQualityPage from "./components/AirQualityPage";
import Info from "./components/Info";
import { Container } from "@mui/material";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/temperatureInfo" component={TemperaturePage} />
          <Route exact path="/airPressureInfo" component={AirPressurePage} />
          <Route exact path="/airHumidityInfo" component={AirHumidityPage} />
          <Route exact path="/airQualityInfo" component={AirQualityPage} />
          <Route exact path="/info" component={Info} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
