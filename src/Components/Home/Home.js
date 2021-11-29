import React from "react";
import About from "../about/About";
import MyServices from "../service/MyServices";
import Skils from "../skils/Skils";
import TopBanner from "../topBanner/TopBanner";
import Navigation from "./../navigation/Navigation";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <TopBanner></TopBanner>
      <About></About>
      <MyServices></MyServices>
      <Skils></Skils>
    </div>
  );
};

export default Home;
