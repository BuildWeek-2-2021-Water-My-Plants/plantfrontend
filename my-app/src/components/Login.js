//Deavy
//login form
//sign-up link button
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const initialFormValues = {
  username: "",
  password: "",
};

const Login = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);

  //control input
  const change = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="login-container">
      <form>
        <input
          name="username"
          type="text"
          onChange={change}
          value={formValues.username}
          placeholder="Type your username"
        />
        <input
          name="password"
          type="password"
          onChange={change}
          value={formValues.login}
          placeholder="Type your password"
        />
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
