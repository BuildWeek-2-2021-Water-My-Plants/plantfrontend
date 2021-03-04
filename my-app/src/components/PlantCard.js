import React from "react";

const PlantCard = ( props) => {

  const { nickname, species } = props;

  return (
    <div >
        <h3>Plant Name</h3>
        <p>{nickname}</p>
        <p>{species}</p>
    </div>
  );
};
export default PlantCard;
