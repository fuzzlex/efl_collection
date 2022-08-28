import React from "react";

import Cards from "../components/Cards";
import CarouselComp from "../components/Carousel";
import MenuCategory from "../components/MenuCategory";

const Home = () => {
  return (
    <div>
      <CarouselComp />
      <MenuCategory />
      <Cards />
    </div>
  );
};

export default Home;
