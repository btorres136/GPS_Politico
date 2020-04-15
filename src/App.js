import React from "react";
import "popper.js";
import "jquery";
import "bootstrap";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import main from "./components/main/main";
import PrivateRoute from "./config/PrivateRoute";
import UserProvider from "./components/providers/UserProvider";
import "./App.scss";
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Route exact path="/" component={main} />
        <Route exact path="/Login" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />
        <PrivateRoute exact path="/Dashboard/Home" component={Dashboard} />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
