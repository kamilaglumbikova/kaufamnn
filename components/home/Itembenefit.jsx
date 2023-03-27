import Image from "next/image";
import React from "react";

const Itembenefit = ({imgUrl, title, text, position}) => {
  return (
    <div className={`flex gap-[16px] items-center ${position == 'right' ? 'justify-end' : 'justify-start'} md:justify-start`}>
      <div className={`${position == 'right' ? 'order-2' : ''} md:w-[64px] md;h-[64px] w-[60px] h-[60px] relative`}>
      <Image 
        src={imgUrl}
        alt={title}
        fill
      />
      </div>
      <div className="flex flex-col gap-[4px] md:order-2">
        <span className="font-medium font-playfair text-[22px] leading-[29.33px] block">
          {title}
        </span>
        <span className="font-rubik leading-[16.59px]">{text}</span>
      </div>
    </div>
  );
};

export default Itembenefit;
