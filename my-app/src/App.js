import "./App.css";
import Login from "./components/Login";
import PlantList from "./components/PlantList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./css/Login.css";
import "./css/PlantCard.css";
import "./css/PlantList.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/plantlist">
            <PlantList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
