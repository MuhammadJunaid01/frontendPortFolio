import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="darkMode">
      <Router>
        <Home></Home>
      </Router>
    </div>
  );
}

export default App;
