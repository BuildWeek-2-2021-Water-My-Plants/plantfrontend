import React from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const PlantCard = ( {deletePlant, setDeletePlant}, props) => {
  const { nickname, species } = props;

const handleDelete = (plant) => {
        axiosWithAuth()
        .delete(`/users/plants${plant.id}`)
        .then((res) => {
            console.log("delete plant res", res)
            setDeletePlant(deletePlant.filter((plant) => plant.id !== res.data))
        })
        .catch((err) => {
            console.log(err)
        }) 
    }

  return (
    <div >
        <h3>Plant Name</h3>
        <p>{nickname}</p>
        <p>{species}</p>
        <div className="delete" onClick={e => {
          e.stopPropagation()
          handleDelete()
        }}>
         X
        </div>
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

