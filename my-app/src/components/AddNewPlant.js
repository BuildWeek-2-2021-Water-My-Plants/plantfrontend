import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addPlant, setError } from "./../actions/"; //Import error stuff!!

function AddNewPlant(props) {
  const { setError, addPlant } = props;
  const [plant, setPlant] = useState({
    id: "", //Backend?
    nickname: "",
    species: "",
    h2ofrequency: null,
    image: "",
  });

  const handleChange = (ev) => {
    ev.persist();
    setPlant({
      ...plant,
      [ev.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      plant.id === "" || //include id?
      plant.nickname === "" ||
      plant.species === "" ||
      plant.h2ofrequency === null
    ) {
      setError();
      return;
    }
    addPlant(plant);
  };
  return (
    <div>
      <h2>Add New Plant</h2>
      <form>
        <div className="form-group">
          <label htmlFor="nickname">Nickname: </label>
          <br />
          <input
            onChange={handleChange}
            value={plant.nickname}
            name="nickname"
            id="nickname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="species">Species: </label>
          <br />
          <input
            onChange={handleChange}
            value={plant.species}
            name="species"
            id="species"
          />
        </div>
        <div className="form-group">
          <label htmlFor="h2ofrequency">How often to water: </label>
          <br />
          <input
            onChange={handleChange}
            value={plant.h2ofrequency}
            name="h2ofrequency"
            id="h2ofrequency"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image: </label>
          <br />
          <input
            onChange={handleChange}
            value={plant.image}
            name="image"
            id="image"
          />
        </div>
        {errorMessage && (
          <div
            data-testid="errorAlert"
            className="alert alert-danger"
            role="alert"
          >
            Error: {errorMessage}
          </div>
        )}
        <button type="submit" onClick={handleSubmit}>
          Submit New Plant
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    //error message? why not plant?
  };
};

export default connect(mapStateToProps, { addPlant, setError })(AddNewPlant);
