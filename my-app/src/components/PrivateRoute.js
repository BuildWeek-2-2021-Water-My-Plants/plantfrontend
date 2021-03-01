import React from "react";

const PrivateRoute = ({ component: Component, ...rest }) => {
  //const Component = props.component
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token")) {
          //if token is in localStorage, render the given component
          return <Component {...props} />;
        } else {
          return <Login />;
        }
      }}
    />
  );
};

export default PrivateRoute;
