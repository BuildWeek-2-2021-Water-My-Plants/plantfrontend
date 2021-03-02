//Steve
//User form, but needs PUT request
//button to PlantList

import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

function UpdateUserForm() {
  const [userInfo, setUserInfo] = useState("");
  const id = props.match.params.id;

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

export default UpdateUserForm;
