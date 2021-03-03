import React, { useEffect, useState } from "react";
// import axios from "axios";

import { Link, useHistory } from "react-router-dom";
// import { connect } from "react-redux";
// import {fetchUser} from '../actions/index';
import bgSvg from "../images/BGFoliage.svg";

import PlantCard from "./PlantCard";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const PlantList = (props) => {
  // const { isLoading } = props;
  const [findAllTasks, setFindAllTasks] = useState({});

  const history = useHistory()

  const logout = (e) => {
    axiosWithAuth()
      .get('/logout')
      .then((res) => {
        console.log(res.data)
      })
      history.push('/')
  }

  useEffect(() => {
      axiosWithAuth()
      .get("/users/userinfo")
      .then((res) => {
        console.log(res)
        setFindAllTasks(res.data)
      })
     
  }, []);

//   useEffect(() => {
//     fetchUser()
//     console.log(fetchUser)
// }, []);

  // if (isLoading) {
  //   return <h1>{isLoading}</h1>;
  // }
  return (
    <>
      <img className="bgSvg" src={bgSvg} alt="foliage" />
      <div className="my-plants">
      
        <button onClick={logout}>Sign Out</button>
       
        <Link to="/addPlant">Add Plant +</Link>
        <div className="list">
        {findAllTasks.length > 0 ? 
          findAllTasks.map(task => {
            return <PlantCard key={task.userid} email={task.primaryemail} plant={task.plants}/> 
          }) : null 
        }
          {/* <PlantCard />
          <PlantCard />
          <PlantCard /> */}
        </div>
      </div>
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     // user: state.user,
//     // isLoading: state.isLoading,
//   };
// };

// export default connect(mapStateToProps, {fetchUser})(PlantList);

export default PlantList;