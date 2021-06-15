import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Dashboard from '../pages/Dashboard'

import AppBar from '../components/AppBar'
import Sidebar from '../components/Sidebar'
import InternContainer from '../components/InternContainer'

export default function Routes() {

    const Logged = () => {
      return (
        <Switch>

          <Route path="/">
            <AppBar/>
            <Sidebar/>
            <InternContainer>
              <Dashboard />
            </InternContainer>
          </Route>

        </Switch>
      );      
    }

    return (
      <Router>
          <Switch>

          <Route path="/home" >
              <Logged />
            </Route>
            
            <Route path="/signin">
              <Login />
            </Route>

            <Route path="/signup">
              <SignUp />
            </Route>

          </Switch>
      </Router>
    );
  }
  