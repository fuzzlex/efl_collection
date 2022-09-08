import React, { useEffect } from "react";

import Cards from "../components/Cards";
import CarouselComp from "../components/Carousel";
import MenuCategory from "../components/MenuCategory";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

  }, [])
  return (
    <div>
      <CarouselComp />
      <MenuCategory />
      <Cards />
    </div>
  );
};

export default Home;
