//Steve
//User form, but needs PUT request
//button to PlantList

import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import axiosWithAuth from "../utils/axiosWithAuth";

function UpdateUserForm(props) {
  const [userInfo, setUserInfo] = useState({ ...props.user }); //might update depending on backend
  const { id } = useParams();
  const history = useHistory();

  const changeHandler = (ev) => {
    ev.persist();

    //if updateUser([
    // ...userInfo !== userInfo.id),
    // setUserInfo,

    setItem({
      ...item,
      [ev.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/user/${id}`, item) //may need to update
      .then((res) => {
        props.setUserInfo(res.data);
        props.history.push(`/user/${id}`); //may need to update
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form></form>
    </div>
  );
}

export default connect(mapStateToProps, {})(UpdateUserForm);
