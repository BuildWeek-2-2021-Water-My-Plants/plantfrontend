import React from "react";
import img from "../images/plant.jpg";

const FakePlantCard = (props) => {

  return (
    
    <div className="plant-card">
       <img src={img} alt="plant" />
    <div>         
        <h3>Plant Name</h3>
    </div>
    <div className="info">
        It's a plant, it needs water every once in a while.
    </div>
    </div>
    
   );
};
export default FakePlantCard;



