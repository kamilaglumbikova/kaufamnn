import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Referenceitem = ({imgUrl, link}) => {
  return (
    <div className="relative group">
        <div className="hidden group-hover:block">
          <div className="w-full h-full absolute bg-primary-gold/70 z-10 " />
          <Link
            href={link}
            className="absolute bg-white text-primary-black z-20 h-[48px] flex items-center justify-center w-[185px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
          >
            POZRIEŤ PROJEKT
          </Link>
        </div>
        <Image 
          src={imgUrl} 
          alt="reference" 
          width={296} 
          height={296} 
          className="w-full"
        />
      </div>
  )
}

export default Referenceitem