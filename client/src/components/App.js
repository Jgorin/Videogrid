import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import VideoGrid from "./VideoGrid"

import "../assets/scss/main.scss";

const App = (props) => {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <VideoGrid/>
        </Route>
      </Switch>
    </Router>
  );
};

export default hot(App);
