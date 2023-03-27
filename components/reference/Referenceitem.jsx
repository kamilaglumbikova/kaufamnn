import Image from "next/image";
import Link from "next/link";
import React from "react";

const Referenceitem = ({ item }) => {
  return (
    <div className="bg-[#26272D] flex flex-col">
      <div className="h-[250px] relative group">
        <Image className="object-cover" src={item.imgUrl} fill loading="eager" alt={item.title} />
        <div className="bg-primary-gold/70 absolute w-full h-full top-0 left-0 hidden group-hover:flex items-center justify-center">
          <Link
            className="bg-white h-[48px] text-primary-black uppercase leading-20 flex items-center justify-center px-[32px]"
            href={`/referencie/${item.id}`}
          >
            POZRIEŤ PROJEKT
          </Link>
        </div>
      </div>
      <div className="font-playfair text-[24px] leading-[31.99px] font-medium p-[16px]">
        {item.title}
      </div>
    </div>
  );
};

export default Referenceitem;
