import React from "react";
import About from "../about/About";
import MyServices from "../service/MyServices";
import TopBanner from "../topBanner/TopBanner";
import Navigation from "./../navigation/Navigation";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <TopBanner></TopBanner>
      <About></About>
      <MyServices></MyServices>
    </div>
  );
};

export default Home;
