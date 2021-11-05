import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const isLoggedIn = (user) => {
  return user?.currentUser !== null ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.user);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn(user)) {
          return <Component {...rest} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
