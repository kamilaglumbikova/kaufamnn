import Image from "next/image";
import React from "react";

const Info = ({ icon, title, subtitle1, subtitle2, fontweight="font-normal" }) => {
  return (
    <div className="flex border border-[#26272D] w-full h-[130px] items-center gap-[12px] px-[32px]">
      <Image alt={title} src={icon} width={40} height={40} />
      <div className="flex flex-col">
        <div className="text-primary-gold text-[12px] leading-[22px]">
          {title}
        </div>
        <div className={`${fontweight}`}>{subtitle1}</div>
        <div className={`${fontweight}`}>{subtitle2}</div>
      </div>
    </div>
  );
};

export default Info;
