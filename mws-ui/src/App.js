import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import TemperaturePage from "./components/TemperaturePage";
import AirPressurePage from "./components/AirPressurePage";
import AirHumidityPage from "./components/AirHumidityPage";

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
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
