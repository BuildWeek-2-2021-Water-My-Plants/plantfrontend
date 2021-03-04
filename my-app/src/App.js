import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import PlantList from "./components/PlantList";
import CreateNewUser from "./components/CreateNewUser";
// import AddNewPlant from './components/AddNewPlant';
// import UpdatePlant from './components/UpdatePlant';
// import UpdateUserForm from './components/UpdateUserForm';

import { connect } from "react-redux";
import {
  fetchUser,
  addPlant,
  deletePlant,
  editPlant,
  editUser,
} from "./actions/index";

import "./App.css";

import "./css/Login.css";
import "./css/PlantCard.css";
import "./css/PlantList.css";
import "./css/Header.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={CreateNewUser} />
          <PrivateRoute path="/plantlist" component={PlantList} />
          {/* <PrivateRoute path="/updatePlant" component={UpdatePlant} /> 
          <PrivateRoute path="/updateUser" component={UpdateUserForm} />  
          <PrivateRoute path="/addPlant" component={AddNewPlant} />    */}
        </main>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.error,
    isLoading: state.isLoading,
    user: state.user,
    additionalPlants: state.additionalPlants,
  };
};

export default connect(mapStateToProps, {
  fetchUser,
  editUser,
  addPlant,
  deletePlant,
  editPlant,
})(App);
