import React, { useState, useEffect } from "react";
import "../Carousel/Carousel.css";
// import Header from "../Header/Header";
const sliderImages = [
  {
    title: "first image",
    urls: "https://img.taste.com.au/m3W-xKYX/taste/2017/07/quick-and-easy-meal-planner-128684-2.jpg",
  },
  {
    title: "second image",
    urls: "https://images.medicinenet.com/images/article/main_image/chicken-vegetables-rice-protein-fiber-nutrition-healthy-eating-diet.jpg",
  },
  {
    title: "third image",
    urls: "https://www.budgetbytes.com/wp-content/uploads/2020/09/Cajun-Sausage-and-Rice-Skillet-front.jpg",
  },
];

const Carousel = () => {
  const sizeOfSliderImages = sliderImages.length;
  const [currentImage, setCurrentImage] = useState(0);
  const goToNextImage = () => {
    setCurrentImage(
      (previousImage) => (previousImage + 1) % sizeOfSliderImages
    );
  };

 
  const useInterval = (goToNextImage) => {
    useEffect(() => {
      const autoloop = setInterval(() => {
          goToNextImage();
      }, 3000);
      return () => clearInterval(autoloop);
    });
  };
  useInterval(goToNextImage);
  return (
    <div className ="carousel">
      {/* <Header/> */}
      <img src={sliderImages[currentImage].urls} className ="carousel__image"/>
    </div>
  );
};

export default Carousel;
