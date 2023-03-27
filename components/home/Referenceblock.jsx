import Link from "next/link";
import React from "react";
import Reference from "../Reference";

const Referenceblock = ({title, subtitle=""}) => {
  return (
    <div className="bg-white">
      <div className="max-w-[1440px] mx-auto font-rubik text-primary-black">
        <div className="lg:px-[104px] px-[24px] py-[48px] md:py-[96px]">
          <div className="flex justify-center flex-col items-center gap-[8px]">
            <span className="bg-primary-gold h-[2px] w-[64px]" />
            <h2 className="font-playfair font-medium text-[32px] leading-[42.66px]">
              {title}
            </h2>
            {subtitle != '' ?
            <span className="mt-[32px] block">{subtitle}</span>
            : ''
          }
          </div>
          <div className="mt-[32px]">
            <Reference />
            <div className="flex justify-center">
              <Link
                href='/referencie'
                className="border border-primary-gold h-[48px] px-[32px] uppercase mt-[32px] items-center justify-center flex md:inline-flex w-full md:w-auto"
              >
                VŠETKY REFERENCIE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referenceblock;
