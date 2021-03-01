//Deavy
//login form
//sign-up link button
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import formSchema from "../validation/formSchema";
import * as yup from "yup";
import axios from "axios";

const initialFormValues = {
  username: "",
  password: "",
};

const Login = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState({});
  const [disabled, setDisabled] = useState(true);

  //control input and validation
  const change = (event) => {
    const { name, value } = event.target;
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
    setFormValues({ ...formValues, [name]: value });
  };

  const submit = (event) => {
    event.preventDefault();
    /* submit functionality, uncomment when it can be used
    axios
      .post("", formValues)
      .then((res) => {})
      .catch((err) => {});
    */
  };

  //form validation
  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="login-container">
      <h3>Login</h3>
      <form onSubmit={submit}>
        <label>Username: </label>
        <br />
        <input
          name="username"
          type="text"
          onChange={change}
          value={formValues.username}
          placeholder="Type your username"
        />
        <div className="error">{formErrors.username}</div>
        <label>Password: </label>
        <br />
        <input
          name="password"
          type="password"
          onChange={change}
          value={formValues.login}
          placeholder="Type your password"
        />
        <div className="error">{formErrors.password}</div>
        <button className="login-btn" disabled={disabled}>
          Login
        </button>
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
