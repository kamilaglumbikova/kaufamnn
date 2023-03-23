import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Languageswitcher from "./Languageswitcher";
import Image from "next/image";

const Navbarmobile = ({ navLinks, handleNav }) => {
  const router = useRouter();
  return (
    <div className="text-[#18191E]">
      <div onClick={handleNav} className="cursor-pointer">
        <Image
        src="/assets/close.svg" 
        alt="close" 
        width={24}
        height={24}
        className="w-[24px] h-[24px]" 
        />
      </div>
      <div className="flex flex-col text-[18px] font-semibold gap-[32px] px-[16px] pt-[48px] pb-[32px]">
        {navLinks.map((nav, index) => (
          <span key={index} className={router.pathname == nav.path ? "text-primary-gold" : "hover:text-primary-gold"}>
            <Link href={nav.path}>{nav.name}</Link>
          </span>
        ))}
      </div>
      <div className="mx-[16px] h-[1px] bg-[#26272D] opacity-10" />
      <div className="py-[32px] mx-[16px]">
        <Languageswitcher bordercolor="border-[#26272D]/10" />
      </div>
      <div className="mx-[16px] h-[1px] bg-[#26272D] opacity-10" />
      <div className="pt-[33px] mx-[16px] pb-[16px]">
        <div className="flex gap-[8px] items-center mb-[8px]">
          <img src="/assets/fb.svg" alt="facebook" className="w-[20px] h-[20px]" />
          <Link href="#"><span>Facebook</span></Link>
        </div>
        <div className="flex gap-[8px] items-center">
          <img
            src="/assets/instagram.svg"
            alt="instagram"
            className="w-[20px] h-[20px]"
          />
          <Link href="#"><span>Instagram</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbarmobile;
