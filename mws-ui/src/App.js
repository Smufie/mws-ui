import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
