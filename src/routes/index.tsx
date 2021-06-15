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
        <>
          <AppBar/>
          <Sidebar/>
        <Switch>

        <InternContainer>
          <Route path="/dashboard">
              <Dashboard />
          </Route>

          <Route path="/market">
              <div>market</div>
          </Route>

          <Route path="/wallet">
              <div>wallets</div>
          </Route>

          <Route path="/orders">
              <div>orders</div>
          </Route>

          <Route path="/extract">
              <div>extract</div>
          </Route>

          <Route path="/deposit">
              <div>deposit</div>
          </Route>

          <Route path="/withdraw">
              <div>withdraw</div>
          </Route>

          <Route path="/help">
              <div>ajuda</div>
          </Route>

        </InternContainer>

        </Switch>
        </>
      );      
    }

    return (
      <Router>
          <Switch>

          <Route path="/" >
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
  