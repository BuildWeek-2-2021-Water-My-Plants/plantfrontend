import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import formSchema from "../validation/formSchema";
import * as yup from "yup";
import axios from "axios";
import bgSvg from "../images/BGFoliage.svg";

const initialFormValues = {
  username: "",
  password: "",
};

const initialFormErrors = {
  username: '',
  password: '',
}

const Login = (props) => {
  const [credentials, setCredentials] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const history = useHistory();
  //control input and validation
  const change = (e) => {
    e.preventDefault();
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(() => {
        setFormErrors({ ...formErrors, [e.target.name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [e.target.name]: err.errors[0] });
      });
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

   //form validation
   useEffect(() => {
    formSchema.isValid(credentials).then((valid) => {
      setDisabled(!valid);
    });
  }, [credentials]);

  const createNew = () => {
    history.push('/signup')
  }

  const submit = (e) => {
    console.log(submit)
    e.preventDefault();
     axios
     .post("https://watermyplantsbackend2021.herokuapp.com/login", `grant_type=password&username=${credentials.username}&password=${credentials.password}`,
      {
        headers: {
          Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    )
       .then((res) => {
         console.log("login", res)
         localStorage.setItem("token", res.data.access_token);
         props.history.push("/plantlist")
       })
       .catch((err) => {
         console.log(err)
       });
  };

  return (
    <>
      <img className="bgSvg" src={bgSvg} alt="foliage" />
      <div className="login-container">
        <h3>Login</h3>
        <form onSubmit={submit}>
          <label>Username: </label>
          <br />
          <input
            name="username"
            type="text"
            onChange={change}
            value={credentials.username}
            placeholder="Type your username"
          />
          <div className="error">{formErrors.username}</div>
          <label>Password: </label>
          <br />
          <input
            name="password"
            type="password"
            onChange={change}
            value={credentials.password}
            placeholder="Type your password"
          />
          <div className="error">{formErrors.password}</div>
          <button className="login-btn" disabled={disabled}>
            Login
          </button>   
        </form>
        <button className="create" onClick={createNew}>Create New Account</button>
      </div>
    </>
  );
};

export default Login;
