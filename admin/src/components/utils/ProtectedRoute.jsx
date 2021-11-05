import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const isAdmin = (user) => {
  return user?.currentUser?.isAdmin === true ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.user);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAdmin(user)) {
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
