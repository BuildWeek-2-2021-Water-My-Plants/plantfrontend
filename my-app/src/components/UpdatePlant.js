// //UNIT 3 PERSON
// //use GET params from url to get plant id
// //use that id to get plant info out of state
// //use plant info out of state to pre-fill the plant form
// //onSubmit handler that is PUT request to update plant info
// //onSubmit, also redirect to PlantList

// import React, { useState } from "react";
// import { useParams, useHistory } from "react-router-dom";
// import { connect } from "react-redux";
// import { editPlant } from "../actions/index";

// function UpdatePlant(props) {
//   const [plant, setPlant] = useState({ ...props.plant });
//   const { id } = useParams();
//   const history = useHistory();

//   const handleChange = (ev) => {
//     ev.persist();

//     setPlant({
//       ...plant,
//       [ev.target.name]: ev.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // if (
//     //   plant.nickname === "" ||
//     //   plant.species === "" ||
//     //   plant.h2ofrequency === null
//     // ) {
//     //   setError();
//     //   return;
//     // }
//     editPlant(plant);
//   };

//   return (
//     <div>
//       <h2>Edit Plant Info</h2>
//       <form>
//         <div className="form-group">
//           <label htmlFor="nickname">Nickname: </label>
//           <br />
//           <input
//             onChange={handleChange}
//             value={plant.nickname}
//             name="nickname"
//             id="nickname"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="species">Species: </label>
//           <br />
//           <input
//             onChange={handleChange}
//             value={plant.species}
//             name="species"
//             id="species"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="h2ofrequency">How often to water: </label>
//           <br />
//           <input
//             onChange={handleChange}
//             value={plant.h2ofrequency}
//             name="h2ofrequency"
//             id="h2ofrequency"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="image">Image: </label>
//           <br />
//           <input
//             onChange={handleChange}
//             value={plant.image}
//             name="image"
//             id="image"
//           />
//         </div>
//         {/* {errorMessage && (
//           <div
//             data-testid="errorAlert"
//             className="alert alert-danger"
//             role="alert"
//           >
//             Error: {errorMessage}
//           </div>
//         )} */}
//         <button type="submit" onClick={handleSubmit}>
//           Click to update plant info
//         </button>
//       </form>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     plant: state.selectedPlant, //in reducer, add field for selectedPlant in initialState, and needs action creator that can be dispatched
//   };
// };

// export default connect(mapStateToProps, { editPlant })(UpdatePlant);
