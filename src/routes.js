import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/pages/landingPage";
import Projects from "./components/pages/projects";

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    );
  }
}

export default Main;
