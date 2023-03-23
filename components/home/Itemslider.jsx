import React from "react";

const Itemslider = ({ imgUrl, title }) => {
  return (
    <div className="relative group">
      <div className="bg-[#18191E]/50 absolute w-full h-full" />
      <img src={imgUrl} alt={title} className="w-full" />
      <span className="group-hover:text-primary-gold font-playfair font-medium text-[42px] leading-[55.99px] absolute bottom-[48px] block text-center w-full">
        {title}
      </span>
    </div>
  );
};

export default Itemslider;
