//Deavy
//login form
//sign-up link button
import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <div className="login-container">
      <form>
        <input type="text" placeholder="Type your username"></input>
        <input type="password" placeholder="Type your password"></input>
      </form>
      {/*Signup button links to: /signup*/}
      <Link to="/signup" className="signup">
        Signup
      </Link>
    </div>
  );
};

export default Login;
//UNIT 3 PERSON
//authentication POST request
