import React, { useState } from "react";
import Carousel from "../components/Carousel/Carousel";
import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";

const HomePage = () => {
  return (
    <div>
      <Header />

      <Carousel />
    </div>
  );
};

export default HomePage;
