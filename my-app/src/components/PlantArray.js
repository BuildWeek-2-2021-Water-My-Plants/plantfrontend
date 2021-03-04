import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import EditMenu from './EditMenu';

const initalPlant = {
    plantid: '',
    nickname: "",
    species: "",
    h20: '',
    plantimg: "",
    user: {
      userid: "",
      username: "",
      primaryemail: ''
    }
  }

const PlantArray = ({plantsArray, updatePlants}) => {
    const [editing, setEditing] = useState(false);
    const [plantToEdit, setPlantToEdit] = useState(initalPlant);

    const editPlant = plant => {
        setEditing(true);
        setPlantToEdit(plant)
    }

    const saveEdit = e => {
        e.preventDefault();
        axiosWithAuth()
        .patch(`/users/plants/${plantToEdit.plantid}`, plantToEdit)
        .then((res)=> {
            console.log(res)
            const newPlant = plantsArray.map((plant) => {
                if(plant.plantid === plantToEdit.plantid){
                    return plantToEdit
                } else {
                    return plant
                }
            })
            updatePlants(newPlant)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const deletePlant = (plant) => {
        axiosWithAuth()
        .delete(`/users/plants${plant.plantid}`)
        .then((res) => {
            console.log("delete plant res", res)
            updatePlants(plantsArray.filter((plant) => plant.plantid !== res.data))
        })
        .catch((err) => {
            console.log(err)
        }) 
    }

    return(
        <div>
        <p>Plants</p>
        <ul>
            {plantsArray.map((plant) => (
                <li key={plantsArray.plantid} onClick={() => editPlant(plant)}>
                    <span>
                        <span onClick={e => {
                            e.stopPropagation();
                            deletePlant(plant)
                        }}>
                            <button>Delete</button>
                        </span>{" "}
                        {plant.plantid}
                    </span>
                </li>
            ))}
        </ul>
        { editing && <EditMenu plantToEdit={plantToEdit} saveEdit={saveEdit} setPlantToEdit={setPlantToEdit}/>}
    </div>
    )
}
export default PlantArray;