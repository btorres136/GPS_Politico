import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../components/providers/UserProvider";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { user } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!user ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to="/Login" />
        )
      }
    />
  );
};

export default PrivateRoute;
