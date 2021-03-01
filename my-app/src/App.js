import "./App.css";
import Login from "./components/Login";
import PlantCard from "./components/PlantCard";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Login />
        <PlantCard />
      </div>
    </Router>
  );
}

export default App;
