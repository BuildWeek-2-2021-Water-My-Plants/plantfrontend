//Steve
//User form, but needs PUT request
//button to PlantList

import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { editUser } from "../actions/index";

const UpdateUserForm = (props) => {
  const [userInfo, setUserInfo] = useState({ ...props.user }); //might update depending on backend
  const { id } = useParams();

  const history = useHistory();
  const routeToPlantList = () => {
    history.push("/plantlist");
  };

  const handleChange = (ev) => {
    ev.persist();
    setUserInfo({
      ...userInfo,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log("submitting: ", userInfo);
    e.preventDefault();
    // if (userInfo.username === "" || userInfo.email === "") {
    //   setError();
    //   return;
    // }
    editUser({ ...userInfo, id }); //not sure if passing userInfo
    routeToPlantList();
  };
  return (
    <div>
      <h2>Edit Username and Email</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <br />
          <input
            onChange={handleChange}
            value={userInfo.username}
            name="username"
            id="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <br />
          <input
            onChange={handleChange}
            value={userInfo.email}
            name="email"
            id="email"
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Click to update user information
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    //error message?
  };
};

export default connect(mapStateToProps, { editUser })(UpdateUserForm);
