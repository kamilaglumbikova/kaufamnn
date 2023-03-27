import Image from "next/image";
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

  const handleLeft = () => {
    document.querySelector('.reference-carousel .react-multiple-carousel__arrow--left').click()
  }
  const handleRight = () => {
    document.querySelector('.reference-carousel .react-multiple-carousel__arrow--right').click()
  }
  return (
    <div className="relative">
      <Carousel className="reference-carousel" itemClass="px-[8px]" arrows responsive={responsive} showDots={true} infinite partialVisible={false}>
        <Referenceitem imgUrl="/assets/reference/ref1.png" link={`/referencie/1`} />
        <Referenceitem imgUrl="/assets/reference/ref2.png" link={`/referencie/2`} />
        <Referenceitem imgUrl="/assets/reference/ref3.png" link={`/referencie/3`} />
        <Referenceitem imgUrl="/assets/reference/ref4.png" link={`/referencie/4`} />
      </Carousel>
      <div onClick={handleLeft} className="w-[36px] h-[36px] bg-primary-gold absolute top-[130px] left-[-8px] flex items-center justify-center cursor-pointer">
        <Image 
          src="/assets/black_arrow.svg"
          alt="arrow"
          width={20}
          height={20}
        />
      </div>
      <div onClick={handleRight} className="w-[36px] h-[36px] bg-primary-gold absolute top-[130px] right-[-8px] flex items-center justify-center cursor-pointer">
      <Image 
          src="/assets/black_arrow.svg"
          alt="arrow"
          width={20}
          height={20}
          className="rotate-180"
        />
      </div>
    </div>
  );
};

export default Reference;
