import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import PlantCard from "./PlantCard";
import PlantArray from './PlantArray';
// import FakePlantCard from './FakePlantCard';
// import bgSvg from "../images/BGFoliage.svg";

const PlantList = (props) => {
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
        console.log(res)
        setPlantInfo(res.data)
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
        <h1>Hi, {plantInfo.username}!</h1>
        <h3>This is your email: {plantInfo.primaryemail}</h3>
        <br/>
      </div>
      <ul>
      {/* {plantInfo.plants.length > 0 ?
          plantInfo.plants.map((plant) => {
            return <PlantCard 
            key={plant.plantid} 
            nickname={plant.nickname} 
            species={plant.species}/>
      }) : null} */}
       {/* {plantInfo.plants.length > 0 ?
          plantInfo.plants.map((plant) => {
            return <PlantCard 
            key={plant.plantid} 
            nickname={plant.nickname} 
            species={plant.species}/>
      }) : null} */}
      </ul>
      <PlantArray plantsArray={plantList} updatePlants={setPlantList}/>
      <div>
        <button onClick={logout}>Logout</button>
        <button onClick={addPlant}>Add New Plant</button>
        <button onClick={editUser}>Edit User</button>
      </div>
    </div>
  );
};

export default PlantList;

// import { connect } from "react-redux";
// import {fetchUser} from '../actions/index';
/*  : <FakePlantCard /> */