import React from "react";

 const PlantCard = ( props) => {

   const { nickname, species, h20 } = props;

   return (
     <div className="plant-card">
       <div className="plant-card">
         <h4>Plant Name: {nickname}</h4>
         <p>It's a: {species}</p>
         <p>Water it: {h20}</p>
         </div>
     </div>
   );
 };
 export default PlantCard;
