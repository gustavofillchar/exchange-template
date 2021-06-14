import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

export default function Routes() {
    return (
      <Router>
          <Switch>
            
            <Route path="/" exact>
              <Login />
            </Route>

            <Route path="/signup">
              <SignUp />
            </Route>

          </Switch>
      </Router>
    );
  }
  