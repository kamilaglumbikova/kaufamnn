import Image from "next/image";
import React from "react";

const Itemslider = ({ imgUrl, title }) => {
  return (
    <div className="relative group">
      <div className="bg-[#18191E]/50 absolute w-full h-full top-0 left-0 z-10" />
      <div className="h-[610px]">
        <Image 
          src={imgUrl}
          alt={title}
          className="w-full"
          fill
          loading="eager"
        />
      </div>
      <span className="group-hover:text-primary-gold font-playfair font-medium text-[42px] leading-[55.99px] absolute bottom-[48px] block text-center w-full z-20">
        {title}
      </span>
    </div>
  );
};

export default Itemslider;
