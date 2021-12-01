import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/about/About";
import Navigation from "./Components/navigation/Navigation";
import ProjectsDetails from "./Components/projectsDetail/ProjectsDetails";
import Blog from "./Components/blog/Blog";

function App() {
  return (
    <>
      <div className="darkMode">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/blog">
              <Blog></Blog>
            </Route>
            <Route exact path="/projects/:name">
              <ProjectsDetails></ProjectsDetails>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
