//UNIT 2 PERSON (MOSTLY)
//GET Request on mounting (axiosWithAuth?)
//UI = display list of plant cards
//has button that links to PlantForm (add plant)
//Route to it would be plantlist
import React, { useEffect } from "react";
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
    <>
      <Link to="/">Log out</Link>
      <div className="my-plants">
        <Link to="/plantform">Add Plant</Link>
        <div className="list">
          <PlantCard />
          <PlantCard />
          <PlantCard />
        </div>
      </div>
    </>
  );
};

export default PlantList;
