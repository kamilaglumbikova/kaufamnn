import React from "react";
import Image from "next/image";
import Link from "next/link";

import Benefit from "./Benefit";

const Onas = () => {
  return (
    <div className="flex gap-[16px] lg:px-[104px] px-[24px] flex-col md:flex-row md:pb-[96px]">
      <div className="flex-1 bg-[#26272D] p-[48px]">
        <div className="flex gap-[8px] items-center">
          <span className="bg-primary-gold h-[2px] w-[64px]" />
          <span className="text-primary-gold uppercase">O nás</span>
        </div>
        <h2 className="font-medium text-[32px] leading-[42.66px] font-playfair pt-[8px]">
          O spoločnosti
        </h2>
        <p className="leading-[22px] mt-[32px]">
          Motto spoločnosti: "Dobrý obchod je taký, kde sú spokojní všetci
          zúčastnení." (T. Baťa ) Spoločnosť KAUFMANN BAU s.r.o. vznikla z
          materskej firmy FERMAN s.r.l. založenej v roku 2000 v Taliansku
          (Modena). Svoju prvú pobočku otvorila spoločnosť na Slovensku v roku
          2006, a to so zameraním na drevovýrobu.
        </p>
        <div className="flex flex-col gap-[16px] mt-[32px]">
          <Benefit benefit="Benefit 1" />
          <Benefit benefit="Benefit 2" />
        </div>
        <Link
          href="#"
          className="border border-primary-gold h-[48px] px-[32px] uppercase mt-[32px] items-center justify-center flex md:inline-flex"
        >
          ČÍTAŤ VIAC
        </Link>
      </div>
      <div className="flex-1 flex gap-[16px] mx-[-24px] md:mx-0">
        <div className="flex flex-col gap-[16px] flex-1">
          <Image
            src="/assets/home/onas1.png"
            alt="onas"
            width={296}
            height={231}
            className="flex-1 object-fill w-full"
          />
          <Image
            src="/assets/home/onas2.png"
            alt="onas"
            width={296}
            height={231}
            className="flex-1 object-fill w-full"
          />
        </div>
        <div className="flex flex-1">
          <Image
            src="/assets/home/onas3.png"
            alt="onas"
            width={296}
            height={479}
            className="flex-1 object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Onas;
