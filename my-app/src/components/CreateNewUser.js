//Rory
//React state form sign-up form
//POST request
//have button go to login
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import FormSchema from "../validation/FormSchema";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const initialNewUserFormValues = {
  username: "",
  password: "",
  email: "",
};
const initialNewUserFormErrors = {
  username: "",
  password: "",
  email: "",
};

const initialNewUserDisabled = true;

export default function CreateNewUser() {
  const [newUserFormValues, setNewUserFormValues] = useState(
    initialNewUserFormValues
  );
  const [newUserFormErrors, setNewUserFormErrors] = useState(
    initialNewUserFormErrors
  );
  const [newUserDisabled, setNewUserButtonDisabled] = useState(
    initialNewUserDisabled
  );

  const history = useHistory();
  const newUserRouteToHome = () => {
    history.push("/");
  };

  //validation useEffect
  const inputChange = (e) => {
    // const { name, value } = event;
    yup
      .reach(FormSchema, e.target.name)
      .validate(e.target.value)
      .then(() => {
        setNewUserFormErrors({
          ...newUserFormErrors,
          [e.target.name]: "",
        });
      })
      .catch((error) => {
        setNewUserFormErrors({
          ...newUserFormErrors,
          [e.target.name]: error.errors[0],
        });
      });

    setNewUserFormValues({
      ...newUserFormValues,
      [e.target.name]: e.target.value,
    });
  };

  const postNewUserInfo = (newUserInfo) => {
    axiosWithAuth()
      .post("", newUserInfo)
      .then((res) => {
        console.log(res);

        history.push("/");
      })
      .catch((error) => {
        console.log("there was an error ", error);
      });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    newUserSubmit();
    newUserRouteToHome();
  };

  const newUserSubmit = () => {
    const newProfile = {
      username: newUserFormValues.username.trim(),
      password: newUserFormValues.password.trim(),
      email: newUserFormValues.email.trim(),
    };
    postNewUserInfo(newProfile);
  };

  useEffect(() => {
    FormSchema.isValid(newUserFormValues).then((valid) => {
      setNewUserButtonDisabled(!valid);
    });
  }, [newUserFormValues]);

  return (
    <div>
      <form
        className="new user form container"
        disabled={newUserDisabled}
        onSubmit={onSubmit}
      >
        <div className="new user form submit">
          <h1>New Profile</h1>
          <p>Please fill out the information below</p>
        </div>

        <div className="form inputs">
          <label>
            Birthday
            <input
              value={newUserFormValues.birthday}
              onChange={inputChange}
              name="birthday"
              type="text"
            />
          </label>

          <div className="breakdiv"></div>

          <label>
            Username
            <input
              type="text"
              name="username"
              value={newUserFormValues.username}
              onChange={inputChange}
            />
          </label>

          <label>
            Password
            <input
              type="text"
              name="password"
              value={newUserFormValues.password}
              onChange={inputChange}
            />
          </label>

          <label>
            Email
            <input
              type="text"
              name="email"
              value={newUserFormValues.email}
              onChange={inputChange}
            />
          </label>
          {/*DISABLE BUTTON */}
          <button name="submitNewUser" disabled={newUserDisabled}>
            Create Profile
          </button>
        </div>
      </form>
    </div>
  );
}
