import React from "react";


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Referenceitem from "./Referenceitem";

const Reference = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel arrows responsive={responsive} showDots={true} infinite>
      <Referenceitem imgUrl="/assets/reference/ref1.png" link="#" />
      <Referenceitem imgUrl="/assets/reference/ref2.png" link="#" />
      <Referenceitem imgUrl="/assets/reference/ref3.png" link="#" />
      <Referenceitem imgUrl="/assets/reference/ref4.png" link="#" />
    </Carousel>
  );
};

export default Reference;
