import Image from "next/image";
import React from "react";

const Arrow = ({direction, handleLeftArrow, handleRightArrow}) => {
  return (
    <span onClick={direction == 'left' ? handleLeftArrow : handleRightArrow} className="cursor-pointer w-[34px] h-[34px] bg-[#26272D] flex justify-center items-center">
      <Image src="/assets/pagearrow.svg" alt="arrow" width={12} height={12} className={`${direction == 'right' ? 'rotate-180' : ''}`} />
    </span>
  );
};

export default Arrow;
