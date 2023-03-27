import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sluzbyitem = ({ item }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:max-w-[296px]">
        <Image loading="eager" className="w-full" src={item.imgUrl} alt={item.title} width={296} height={254} />
      </div>
      <div className="bg-[#26272D] p-[16px] flex-1 flex flex-col gap-[16px]">
        <div className="font-playfair text-[24px] leading-[31.99px] font-medium">
          {item.title}
        </div>
        <div className="h-[110px]">{item.text}</div>
        <Link href={item.link} className="border border-primary-gold h-[48px] flex items-center justify-center md:max-w-[139px]">ZISTIŤ VIAC</Link>
      </div>
    </div>
  );
};

export default Sluzbyitem;
