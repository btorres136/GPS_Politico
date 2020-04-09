import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignIn";
import PrivateRoute from "./components/auth/PrivateRoute";
import UserProviders from "./components/providers/UserProvider";
import main from "./components/main/main";
function App() {
  return (
    <UserProviders>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={main} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />
          <PrivateRoute exact path="/Dashboard" component={Dashboard} />
        </div>
      </BrowserRouter>
    </UserProviders>
  );
}

export default App;
