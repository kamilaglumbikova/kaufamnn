import Image from "next/image";
import React from "react";

const Itemmap = ({title}) => {
  return (
    <div className="bg-[#26272D] h-[38px] px-[32px] flex items-center justify-between cursor-pointer group hover:bg-primary-gold hover:text-primary-black">
      {title}
      <Image
        src="/assets/arrows.svg"
        alt="arrow"
        width={20}
        height={20}
        className="hidden group-hover:block"
      />
    </div>
  );
};

export default Itemmap;
