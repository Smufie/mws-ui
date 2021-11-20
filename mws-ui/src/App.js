import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import TemperaturePage from "./components/TemperaturePage";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/temperatureInfo" component={TemperaturePage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
