import React from "react";
import Image from 'next/image';

const Benefit = ({benefit}) => {
  return (
    <div className="flex gap-[16px] items-center">
      <Image src="/assets/star.svg" alt="star" width={32} height={32} />
      <span className="font-playfair text-[18px] leading-[22px]">
        {benefit}
      </span>
    </div>
  );
};

export default Benefit;
