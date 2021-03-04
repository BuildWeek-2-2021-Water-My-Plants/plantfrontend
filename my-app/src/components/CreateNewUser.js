//Rory
//React state form sign-up form
//POST request
//have button go to login
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

const initialNewUserFormValues = {
  username: "",
  password: "",
  email: "",
};
// const initialNewUserFormErrors = {
//   username: "",
//   password: "",
//   primaryemail: "",
// };

export default function CreateNewUser() {
  const [credentials, setCredentials] = useState(initialNewUserFormValues);
  // const [newUserFormErrors, setNewUserFormErrors] = useState(
  //   initialNewUserFormErrors
  // );

  const history = useHistory();
  const newUserRouteToHome = () => {
    history.push("/");
  };

  const postNewUserInfo = (newUserInfo) => {
    axios
      .post(
        "https://watermyplantsbackend2021.herokuapp.com/users/user",
        newUserInfo
      )
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.access_token);
        setCredentials(initialNewUserFormValues);
        history.push("/");
      })
      .catch((error) => {
        console.log("there was an error ", error);
      });
  };

  const inputChange = (ev) => {
    ev.persist();
    setCredentials({
      ...credentials,
      [ev.target.name]: ev.target.value,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    newUserSubmit();
    newUserRouteToHome();
  };

  const newUserSubmit = () => {
    const newProfile = {
      username: credentials.username.trim(),
      password: credentials.password.trim(),
      primaryemail: credentials.email.trim(),
    };
    postNewUserInfo(newProfile);
  };

  return (
    <div>
      <form className="new user form container" onSubmit={onSubmit}>
        <div className="new user form submit">
          <h1>New Profile</h1>
          <p>Please fill out the information below</p>
        </div>

        <div className="form inputs">
          <label>
            Username
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={inputChange}
            />
          </label>

          <label>
            Password
            <input
              type="text"
              name="password"
              value={credentials.password}
              onChange={inputChange}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={inputChange}
            />
          </label>
          <button name="submitNewUser">Create Profile</button>
        </div>
      </form>
    </div>
  );
}
