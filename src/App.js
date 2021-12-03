import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/about/About";
import Navigation from "./Components/navigation/Navigation";
import ProjectsDetails from "./Components/projectsDetail/ProjectsDetails";
import Blog from "./Components/blog/Blog";
import Footer from "./Components/footer/Footer";
import Particles from "react-tsparticles";

function App() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <div className="darkMode">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 40,
                  duration: 2,
                  opacity: 0.1,
                  size: 20,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 4,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/blog">
              <Blog></Blog>
            </Route>
            <Route exact path="/projects/:name">
              <ProjectsDetails></ProjectsDetails>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </>
  );
}

export default App;
