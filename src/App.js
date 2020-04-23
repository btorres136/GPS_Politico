import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import ChangeCity from "./components/changecity/ChangeCity";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import main from "./components/main/main";
import PrivateRoute from "./config/PrivateRoute";
import UserProvider from "./components/providers/UserProvider";
import "./resources/SCSS/main.scss";
import CityProvider from "./components/providers/CityProviders";

function App() {
  return (
    <UserProvider>
      <CityProvider>
        <BrowserRouter>
          <Route exact path="/" component={main} />
          <Route exact path="/Login" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />
          <PrivateRoute exact path="/Dashboard/Home" component={Dashboard} />
          <PrivateRoute
            exact
            path="/Dashboard/city/:city"
            component={ChangeCity}
          />
          <PrivateRoute exact path="/Dashboard/camara" />
        </BrowserRouter>
      </CityProvider>
    </UserProvider>
  );
}

export default App;
