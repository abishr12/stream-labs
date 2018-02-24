import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import LoginModal from "./components/login-modal";
import SignIn from "./components/sign-in";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="full-bg">
          <Switch>
            <Route exact path="/" component={LoginModal} />
            <Route exact path="/signin" component={SignIn} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
