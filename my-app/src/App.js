import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import PlantList from './components/PlantList';

import { connect } from 'react-redux';
import { fetchUser, addPlant, deletePlant, editPlant, editUser } from './actions/index'

import './App.css';

import "./css/Login.css";
import "./css/PlantCard.css";
import "./css/PlantList.css";

const App = () => {
  return (
    <Router>
       <div className="App">
        <header>
          <Header />
        </header>
        <main>
           <Route exact path="/" component={Login} /> 
           {/* <Route exact path="/" component={CreateNewUser} />  */}
           <PrivateRoute path="/plantlist" component={PlantList} />  
        </main>  
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
    isLoading: state.isLoading,
    user: state.user, 
    additionalPlants: state.additionalPlants,
  }
}

export default connect(mapStateToProps, {fetchUser, editUser, addPlant, deletePlant, editPlant})(App);
