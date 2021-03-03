import React from "react";
// import img from "../images/plant.jpg";

// import { connect } from "react-redux";
// import { deletePlant } from "../actions/index";

const PlantCard = (props) => {
  const { email, plants } = props;

  return (
    <div >
      <div>
        <h3>Plant Name</h3>
        <p>Email: {email}</p>
        {plants.map((plant) => {
          return<div>{plant.nickname}</div>
        })}
      </div>
     
    </div>
  );
};

//   return (
//     <div className="plant-card">
//       <img src={img} alt="plant" />
//       {/* <img src={user.plants.image} alt="plant" /> */}
//       <div>
//         <h3>Plant Name</h3>
//         <p>{email}</p>
//       </div>
//       {/* <h3>{user.plants.nickname}</h3> */}
//       <div className="info">
//         It's a plant, it needs water every once in a while.
//         {/* Water it {user.plants.h20frequency} */}
//       </div>
//       {/* <div className="delete" onClick={() => props.deletePlant(props.user.id)}>
//         X
//       </div> */}
//       <div className="delete">
//         X
//       </div>
//     </div>
//   );
// };

// export default connect(() => {}, { deletePlant })(PlantCard);
export default PlantCard;
