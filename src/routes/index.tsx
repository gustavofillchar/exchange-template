import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Dashboard from '../pages/Dashboard'
import Market from '../pages/Market'

import AppBar from '../components/AppBar'
import Sidebar from '../components/Sidebar'
import InternContainer from '../components/InternContainer'
import Orders from "../pages/Orders";
import Extract from "../pages/Extract";
import Deposit from "../pages/Deposit";
import WithDraw from "../pages/WithDraw";
import Wallets from "../pages/Wallets";

export default function Routes() {

  const Logged = () => {
    return (
      <Router>

        <AppBar />
        <Sidebar />

        <Switch>
          <Redirect exact from="/" to="/dashboard" />

          <InternContainer>
            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route path="/market">
              <Market />
            </Route>

            <Route path="/wallet">
              <Wallets />
            </Route>

            <Route path="/orders">
              <Orders />
            </Route>

            <Route path="/extract">
              <Extract />
            </Route>

            <Route path="/deposit">
              <Deposit />
            </Route>

            <Route path="/withdraw">
              <WithDraw />
            </Route>

            <Route path="/help">
              <div>ajuda</div>
            </Route>
          </InternContainer>
        </Switch>

      </Router>
    );
  }

  return (
    <Router>
      <Switch>

        <Route path="/" exact>
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
