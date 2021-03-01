import "./App.css";
import Login from "./components/Login";
import PlantList from "./components/PlantList";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Login />
        <PlantList />
      </div>
    </Router>
  );
}

export default App;
