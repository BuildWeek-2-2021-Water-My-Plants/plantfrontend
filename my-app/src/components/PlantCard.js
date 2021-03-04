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