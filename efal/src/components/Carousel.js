import React from "react";
import { Carousel } from "react-bootstrap";
import MainPage from "../assets/MainPage.jpeg" 
import MainPage2 from "../assets/MainPage2.jpeg" 

const CarouselComp = () => {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item className="carousel-container">
          <img
            className="carousel"
            src={MainPage2}
            alt="Discover"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel"
            src={MainPage}
            alt="Discover"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel"
            src={MainPage}
            alt="Discover"
          />
        </Carousel.Item>
       
      </Carousel>
    </div>
  );
};

export default CarouselComp;
