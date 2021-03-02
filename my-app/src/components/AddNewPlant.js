import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const initialPlant = {
  id: "",
  nickname: "",
  species: "",
  h2oFrequency: null,
  image: "",
};

function AddNewPlant(props) {
  const [item, setItem] = useState(initialItem);
  const id = props.match.params.id;

  const changeHandler = (ev) => {
    ev.persist();
    setItem({
      ...item,
      [ev.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/plants/${id}`, item) //may need to update
      .then((res) => {
        props.setItems(res.data);
        props.history.push(`/plant-list/${id}`); //may need to update
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

export default AddNewPlant;
