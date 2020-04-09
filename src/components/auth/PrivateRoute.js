import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../providers/UserProvider";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const currentUser = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/SignIn"} />
        )
      }
    />
  );
};

export default PrivateRoute;