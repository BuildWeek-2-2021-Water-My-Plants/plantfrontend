//Deavy
//plant card with link to image and info
import React from "react";
import img from "../images/plant.jpg";

const PlantCard = (props) => {
  return (
    <div className="plant-card">
      <img src={img} alt="What the hell" />
      <h3>Plant Name</h3>
      <div className="info">
        It's a plant, it needs water every once in a while.
      </div>
    </div>
  );
};

export default PlantCard;

//UNIT 3 PERSON
//DELETE request (just like an x button or trash can or something that sends request)
//
