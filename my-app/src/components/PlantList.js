import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import PlantCard from "./PlantCard";
import PlantArray from './PlantArray';

const PlantList = () => {

  const [plantInfo, setPlantInfo] = useState({});
  const [plantList, setPlantList] = useState([])
  const history = useHistory()

  const logout = () => {
    axiosWithAuth()
      .get('/logout')
      .then((res) => {
        console.log(res.data)
        localStorage.clear("token");
      })
      history.push('/')
  }

  const addPlant = () => {
     history.push('/addPlant')
   }

   const editUser = () => {
     history.push('/updateUser')
   }
  
  useEffect(() => {
    axiosWithAuth()
      .get("/users/userinfo")
      .then((res) => {
        console.log("plantinfo", res.data)
        setPlantInfo(res.data.plants)
        console.log(plantInfo)
      })
          .catch((err) => {
            console.log(err)
        })
    }, []);
  
  useEffect(() => {
    axiosWithAuth()
      .get("/users/plants")
      .then((res) => {
        console.log(res)
        setPlantList(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

   return (
     <div>
       <div>
         <h2>Learn More about Your Plants</h2>
         <br/>
       </div>
       <div className="my-plants">
       {plantInfo.length > 0 ?
           plantInfo.map((plant) => {
             return <PlantCard       
             key={plant.plantid} 
             nickname={plant.nickname} 
             species={plant.species}
             h20={plant.h20}/>
       }) : null}
       </div>
       <PlantArray plantsArray={plantList} updatePlants={setPlantList}/>
       <div className="plant-buttons">
         <button className="logout-btn" onClick={logout}>Logout</button>
         <button onClick={addPlant}>Add New Plant</button>
         <button onClick={editUser}>Edit User</button>
       </div>
     </div>
   );
 };

export default PlantList;


