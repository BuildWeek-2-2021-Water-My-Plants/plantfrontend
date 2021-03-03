import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <NavLink to="#" className="logo">
        My Plant App
      </NavLink>
      <nav className="navbar">
        {/*Add any nav links here if needed*/}
        <NavLink to="/" className="home-btn">
          Home
        </NavLink>
        {/* <Switch>
          <Route path="/plantlist">
            <NavLink to="/" className="signout-btn">
              Sign out
            </NavLink>
          </Route>
        </Switch> */}
        
      </nav>
    </div>
  );
};

export default Header;
