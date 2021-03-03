//UNIT 2 PERSON (MOSTLY)
//GET Request on mounting (axiosWithAuth?)
//UI = display list of plant cards
//has button that links to PlantForm (add plant)
//Route to it would be plantlist
import React, { useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import bgSvg from "../images/BGFoliage.svg";

import PlantCard from "./PlantCard";
// import UpdatePlant from './UpdatePlant';
// import UpdateUserForm from './UpdateUserForm';
// import AddNewPlant from './AddNewPlant';
// import PrivateRoute from './PrivateRoute';


const PlantList = (props) => {

  const {user, isLoading} = props;

  useEffect(() => {
    axios
      .get()
      .then((res) => {})
      .catch((err) => {});
  }, []);

  if (isLoading) {
    return <h1>{isLoading}</h1>
  }
  return (
    <>
      <img className="bgSvg" src={bgSvg} alt="foliage" />
      <Link className="logout-btn" to="/">
        Log out
      </Link>
      <div className="my-plants">
        <Link to="/addPlant">Add Plant +</Link>
        <div className="list">
          {/* {user.map(user => (
            <PlantCard user={user} key={user.id}/>
          ))} */}
          <PlantCard />
          <PlantCard />
          <PlantCard />
          {/* <PrivateRoute path="/updatePlant" component={UpdatePlant} />   */}
          {/* <PrivateRoute path="/updateUser" component={UpdateUserForm} />   */}
          {/* <PrivateRoute path="/addPlant" component={AddNewPlant} />   */}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps, {})(PlantList);
