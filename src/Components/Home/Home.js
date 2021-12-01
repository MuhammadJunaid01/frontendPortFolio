import React from "react";
import About from "../about/About";
import ContactUs from "../contuctUs/ContactUs";
import MyServices from "../service/MyServices";
import SkilProgressbar from "../skilprogressbar/SkilProgressbar";
import Skils from "../skils/Skils";
import TopBanner from "../topBanner/TopBanner";
import Navigation from "./../navigation/Navigation";
import Projects from "./../project/Projects";

const Home = () => {
  return (
    <div>
      <Navigation />
      <TopBanner></TopBanner>
      <About></About>
      <MyServices></MyServices>
      <Skils />
      {/* <SkilProgressbar /> */}
      <Projects></Projects>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
