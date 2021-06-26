import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import LandingPage from "views/examples/LandingPage.js";
import StudyPage from "views/examples/StudyPage.js";
// othersRouter

ReactDOM.render(
  <Router>
  <Switch>
    <Route exact path="/" render={(props) => <LandingPage/>} />
    <Route
      exact path="/casestudy"
      render={(props) => <StudyPage/>}
    />
  </Switch>
</Router>,
  document.getElementById("root")
);
