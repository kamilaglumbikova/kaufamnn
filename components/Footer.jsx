import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1440px] mx-auto font-rubik">
      <div className="grid md:grid-cols-4 grid-cols-1 lg:px-[104px] px-[24px] pb-[41px] md:pb-[16px] pt-[48px] gap-[32px] md:gap-[16px] md:gap-0">
        <div>
          <Image
            src="/assets/logo-white.svg"
            alt="Kaufmann Bau"
            width={296}
            height={64}
          />
        </div>
        <div>
          <div className="flex flex-col gap-[8px]">
            <h3 className="font-playfair text-[20px] leading-[26.66px] font-medium">
              Informacie
            </h3>
            <span className="bg-primary-gold h-[2px] w-[64px] block" />
          </div>
          <div className="flex flex-col gap-[8px] leading-[22px] mt-[16px]">
            <Link className="hover:text-primary-gold" href="/">Domov</Link>
            <Link className="hover:text-primary-gold" href="/o-nas">O nás</Link>
            <Link className="hover:text-primary-gold" href="/sluzby">Služby</Link>
            <Link className="hover:text-primary-gold" href="/referencie">Referencie</Link>
            <Link className="hover:text-primary-gold" href="/kariera">Kariéra</Link>
            <Link className="hover:text-primary-gold" href="/kontakt">Kontakt</Link>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-[8px]">
            <h3 className="font-playfair text-[20px] leading-[26.66px] font-medium">
              Kontakt
            </h3>
            <span className="bg-primary-gold h-[2px] w-[64px] block" />
          </div>
          <div className="flex flex-col gap-[8px] leading-[22px] mt-[16px]">
            <span className="flex items-center gap-[8px] h-[22px]">
              <Image 
                src="/assets/phone.svg"
                alt="phone"
                width={20}
                height={20}
              />
              +421 915 643 047
            </span>
            <span className="flex items-center gap-[8px] h-[22px]">
              <Image 
                src="/assets/phone.svg"
                alt="phone"
                width={20}
                height={20}
              />
              +421 915 259 817
            </span>
            <span className="flex items-center gap-[8px] h-[22px]">
              <Image 
                src="/assets/envelope.svg"
                alt="phone"
                width={20}
                height={20}
              />
              info@kaufmann.sk
            </span>
          </div>
          <div className="mt-[16px]">
            <span className="font-semibold leading-[22px] block">
              Prevádzka / office / sklady
            </span>
            <span className="flex items-start gap-[8px] mt-[8px]">
              <Image 
                src="/assets/map.svg"
                alt="phone"
                width={20}
                height={20}
              />
              <span className="flex flex-col gap-[8px]">
                <span>Nižný Mirošov 7</span>
                <span>090 11 Vyšný Orlík</span>
              </span>
            </span>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-[8px]">
            <h3 className="font-playfair text-[20px] leading-[26.66px] font-medium">
              Sledujte nas
            </h3>
            <span className="bg-primary-gold h-[2px] w-[64px] block" />
          </div>
          <div className="flex flex-col mt-[16px] gap-[8px]">
            <span className="flex items-center gap-[8px]">
              <Image 
                src="/assets/fb.svg"
                alt="facebook"
                width={20}
                height={20}
              />
              <Link href="#">Facebook</Link>
            </span>
            <span className="flex items-center gap-[8px]">
              <Image 
                src="/assets/instagram.svg"
                alt="instagram"
                width={20}
                height={20}
              />
              <Link href="#">Instagram</Link>
            </span>
          </div>
        </div>
      </div>
      <div className="lg:px-[104px] px-[24px]">
        <div className="hidden md:block h-[1px] w-full bg-[#26272D]" />
        <div className="flex flex-col md:flex-row justify-between pt-[8px] pb-[16px]">
            <span className="text-[#5E5E5E] text-[12px] leading-[22px]">Copyright © 2020 / Kaufmann-bau / Všetky práva vyhradené</span>
            <span className="text-[#5E5E5E] text-[12px] leading-[22px]">Created by Eliaš - IT Solutions"</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
