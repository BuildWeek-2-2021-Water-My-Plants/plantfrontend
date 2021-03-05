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

const PlantArray = ({ plantsArray, updatePlants }) => {
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
            console.log("patch res", res)
            setEditing(false)
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
            .delete(`/users/plants/${plant.plantid}`)
            .then((res) => {
                console.log("delete plant res", res)
                const newPlantDelete = plantsArray.filter(item => item.plantid !== plant.plantid)
                updatePlants(newPlantDelete)
            })
            .catch((err) => {
                console.log(err)
            }) 
     }

    return(
        <div>
        <h2>Want to Edit or Delete Your Plants?</h2>
        <h4>Click on it below</h4>
            {plantsArray.map((plant) => (
                <li key={plantsArray.plantid} onClick={() => editPlant(plant)}>
                    <span>
                        <span onClick={e => {
                            e.stopPropagation();
                            deletePlant(plant)
                        }}>
                            <button>Delete</button>
                        </span>{" "}
                        {plant.nickname}
                    </span>
                 </li>
             ))}
         <br />
         <br />
         { editing && <EditMenu plantToEdit={plantToEdit} saveEdit={saveEdit} setPlantToEdit={setPlantToEdit} setEditing={setEditing}/>}
     </div>
     )
 }

 export default PlantArray;