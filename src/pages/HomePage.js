import React, { useState } from "react";
import Carousel from "../components/Carousel/Carousel";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <Link to={"/recipes"} className="homepage__button">
        What's for Dinner?
      </Link>

      <Carousel />
    </div>
  );
};

export default HomePage;
