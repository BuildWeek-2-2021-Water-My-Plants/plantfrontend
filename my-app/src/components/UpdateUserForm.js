//Steve
//User form, but needs PUT request
//button to PlantList

import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";

function UpdateUserForm(props) {
  const [userInfo, setUserInfo] = useState({ ...props.user }); //might update depending on backend
  const { id } = useParams();
  const history = useHistory();

  const changeHandler = (ev) => {
    ev.persist();

    setUserInfo({
      ...userInfo,
      [ev.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInfo.username === "" || userInfo.email === "") {
      setError();
      return;
    }
    editUser(user); //not sure if passing user
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
}

const mapStateToProps = (state) => {
  return {
    //error message?
  };
};

export default connect(mapStateToProps, { editUser, setError })(UpdateUserForm); //why isn't editUser yellow for function
