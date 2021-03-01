//UNIT 2 PERSON (MOSTLY)
//GET Request on mounting (axiosWithAuth?)
//UI = display list of plant cards
//has button that links to PlantForm (add plant)
//Route to it would be plantlist
import React, { useState, useEffect } from "react";
import axios from "axios";
import PlantCard from "./PlantCard";
import { Link } from "react-router-dom";
import "../css/PlantList.css";

const PlantList = (props) => {
  useEffect(() => {
    axios
      .get()
      .then((res) => {})
      .catch((err) => {});
  }, []);
  return (
    <div className="my-plants">
      <div className="list">
        <PlantCard />
        <PlantCard />
        <PlantCard />
      </div>
      <Link to="/plantform">Add Plant</Link>
    </div>
  );
};

export default PlantList;
