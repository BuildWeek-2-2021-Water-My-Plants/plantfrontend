//UNIT 3 PERSON
//use GET params from url to get plant id
//use that id to get plant info out of state
//use plant info out of state to pre-fill the plant form
//onSubmit handler that is PUT request to update plant info
//onSubmit, also redirect to PlantList

import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";

function UpdatePlant(props) {
  const [plant, setPlant] = useState({ ...props.plant });
  const id = props.match.params.id;

  const changeHandler = (ev) => {
    ev.persist();

    setPlant({
      ...plant,
      [ev.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/plants/${id}`, plant) //may need to update
      .then((res) => {
        props.setPlant(res.data);
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

const mapStateToProps = (state) => {
  return {
    plant: state.selectedPlant, //in reducer, add field for selectedPlant in initialState, and needs action creator that can be dispatched
  };
};

export default connect(mapStateToProps, {})(UpdatePlant);
