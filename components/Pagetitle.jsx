import React from "react";

const Pagetitle = ({title, subtitle}) => {
  return (
    <>
      <div className="flex gap-[8px] items-center">
        <span className="bg-primary-gold h-[2px] w-[64px]" />
        <span className="text-primary-gold uppercase">{title}</span>
      </div>
      <span className="font-playfair text-[32px] leading-[42.66px] font-medium block mt-[8px]">
        {subtitle}
      </span>
    </>
  );
};

export default Pagetitle;
