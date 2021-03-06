import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addPlant } from "./../actions/";

function AddNewPlant(props) {
  const { setError, addPlant } = props;
  const [plant, setPlant] = useState({
    id: "",
    nickname: "",
    species: "",
    h20: null,
    plantimg: "",
  });

  const history = useHistory();
  const routeToPlantList = () => {
    history.push("/plantlist");
  };

  const handleChange = (ev) => {
    ev.persist();
    setPlant({
      ...plant,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (plant.nickname === "" || plant.species === "" || plant.h2o === null) {
      setError();
      return;
    }
    addPlant(plant);
    routeToPlantList();
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
          <label htmlFor="h20">How often to water: </label>
          <br />
          <input
            onChange={handleChange}
            value={plant.h20}
            name="h20"
            id="h20"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image: </label>
          <br />
          <input
            onChange={handleChange}
            value={plant.plantimg}
            name="plantimg"
            id="plantimg"
          />
        </div>
        {/* {errorMessage && (
          <div
            data-testid="errorAlert"
            className="alert alert-danger"
            role="alert"
          >
            Error: {errorMessage}
          </div>
        )} */}
        <button type="submit" onClick={handleSubmit}>
          Submit New Plant
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

export default connect(mapStateToProps, { addPlant })(AddNewPlant);
// export default AddNewPlant;