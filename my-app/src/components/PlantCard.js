import React from "react";

const PlantCard = (props) => {
  const { nickname, species } = props;

  return (
    <div >
     
        <h3>Plant Name</h3>
        <p>{nickname}</p>
        <p>{species}</p>
       
    </div>
  );
};
export default PlantCard;

 {/* {plant.map((pl) => {
          return<div>{pl.nickname}</div>
        })}  */}
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

