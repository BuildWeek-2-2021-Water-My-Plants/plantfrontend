import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import PlantCard from "./PlantCard";
import FakePlantCard from './FakePlantCard';


// import { connect } from "react-redux";
// import {fetchUser} from '../actions/index';
import bgSvg from "../images/BGFoliage.svg";

const PlantList = (props) => {
  // const { isLoading } = props;
const [plantInfo, setPlantInfo] = useState({});
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

  useEffect(() => {
      axiosWithAuth()
      .get("/users/userinfo")
      .then((res) => {
        console.log(res)
        setPlantInfo(res.data)
      })
      .catch((err) => {
        console.log(err)
        // debugger;
      })
  }, []);

  return (
    <>
    <div>
      <h1>Hi, {plantInfo.username}!</h1>
      <h3>This is your email: {plantInfo.primaryemail}</h3>
      <br/>
    </div>
    {plantInfo.length > 0 ?
        plantInfo.plants.map((plant) => {
          return <PlantCard key={plant.plantid} nickname={plant.nickname} species={plant.species}/>
    }) : <FakePlantCard />}
    <div>
      <button onClick={logout}>Logout</button>
    </div>
    </>
  );
};

export default PlantList;
