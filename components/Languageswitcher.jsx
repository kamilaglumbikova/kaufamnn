import Image from "next/image";
import React from "react";

const Languageswitcher = ({bordercolor}) => {
  return (
    <div className={`w-[72px] h-[36px] border gap-[8px] flex items-center justify-center cursor-pointer ${bordercolor}`}>
      <Image
        src="/assets/flag-slovakia.png"
        alt="Slovakia"
        width={20}
        height={20}
        className="w-[20px] h-[20px]"
      />
      <img src="/assets/arrow.svg" alt="arrow" className="w-[12px] h-[12px]" />
    </div>
  );
};

export default Languageswitcher;
