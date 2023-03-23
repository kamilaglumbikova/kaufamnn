import Itembenefit from "@/components/home/Itembenefit";
import Itemslider from "@/components/home/Itemslider";
import Onas from "@/components/home/Onas";
import Reference from "@/components/Reference";
import Link from "next/link";
import Image from "next/image";

import { useLoadScript, GoogleMap } from '@react-google-maps/api';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCaNKWL1hHF7wzb2nRju8JN4byMjoLkq0M',
  });
  if (!isLoaded) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="max-w-[1440px] mx-auto font-rubik">
        <Carousel
          responsive={responsive}
          showDots={true}
          removeArrowOnDeviceType={[
            "tablet",
            "mobile",
            "desktop",
            "superLargeDesktop",
          ]}
        >
          <Itemslider title="Drevo" imgUrl="/assets/home/home1.png" />
          <Itemslider
            title="Elektroinštalácie"
            imgUrl="/assets/home/home2.png"
          />
          <Itemslider title="Stavebníctvo" imgUrl="/assets/home/home3.png" />
          <Itemslider title="Kov" imgUrl="/assets/home/home4.png" />
        </Carousel>
        <div className="grid md:grid-cols-4 grid-cols-1 lg:px-[104px] px-[24px] py-[96px] gap-[16px] md:gap-0">
          <Itembenefit
            imgUrl="/assets/home/benefit1.svg"
            title="On Demand Pricing"
            text="On make 100€+"
            position="left"
          />
          <Itembenefit
            imgUrl="/assets/home/benefit2.svg"
            title="Quality Products"
            text="We made for you"
            position="right"
          />
          <Itembenefit
            imgUrl="/assets/home/benefit3.svg"
            title="Best Built Quality"
            text="Its guarantee"
            position="left"
          />
          <Itembenefit
            imgUrl="/assets/home/benefit4.svg"
            title="24/7 Online Support"
            text="We are here"
            position="right"
          />
        </div>
        <Onas />
      </div>

      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto font-rubik text-primary-black">
          <div className="lg:px-[104px] px-[24px] py-[48px] md:py-[96px]">
            <div className="flex justify-center flex-col items-center gap-[8px]">
              <span className="bg-primary-gold h-[2px] w-[64px]" />
              <h2 className="font-playfair font-medium text-[32px] leading-[42.66px]">
                Na čo sme hrdí?
              </h2>
            </div>
            <div className="mt-[32px]">
              <Reference />
              <div className="flex justify-center">
                <Link
                  href="#"
                  className="border border-primary-gold h-[48px] px-[32px] uppercase mt-[32px] items-center justify-center flex md:inline-flex"
                >
                  VŠETKY REFERENCIE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-gold">
        <div className="max-w-[1440px] mx-auto font-rubik">
          <div className="lg:px-[104px] px-[24px] py-[48px] md:py-[96px] flex">
            <div className="flex-1 bg-primary-black p-[48px]">
              <div>
                <span className="bg-primary-gold h-[2px] w-[64px] block" />
                <h2 className="font-medium text-[32px] leading-[42.66px] font-playfair pt-[8px]">Kde všade sme už  boli</h2>
              </div>
              <p className="mt-[32px] leading-[22px]">
                KAUFMANN BAU s.r.o., ktorá je zameraná predovšetkým na montážne práce v oblasti stavebníctva najmä v európskych krajinách kde vie spoločnosť ponúknuť širokú škálu odborných pracovníkov. Ako firma vykonávame remeselnú činnosť v 5 európskych krajinách: Slovensko, Rakúsko, Taliansko, Nemecko, Švajčiarsko.
              </p>
              <div>
                <div className="flex flex-col gap-[10px] mt-[32px]">
                  <div className="bg-[#26272D] h-[38px] px-[32px] flex items-center">
                    Ape si Siusi - Taliansko
                    <Image
                      src="/assets/arrows.svg"
                      alt="arrow"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="bg-[#26272D] h-[38px] px-[32px] flex items-center">Modena - Taliansko</div>
                  <div className="bg-[#26272D] h-[38px] px-[32px] flex items-center">Zermatt - Taliansko</div>
                  <div className="bg-[#26272D] h-[38px] px-[32px] flex items-center">Aschau - Rakúsko</div>
                  <div className="bg-[#26272D] h-[38px] px-[32px] flex items-center">Obendorf in Tirol - Rakúsko</div>
                </div>
                <div>

                </div>
              </div>
            </div>
            <div className="flex-1">
            <GoogleMap
              zoom={14}
              center={{lat: 49.54740109384644, lng: 18.20955873638925, }}
              mapTypeId={google.maps.MapTypeId.ROADMAP}
              mapContainerStyle={{ width: '100%', height: '573px' }}
              onLoad={() => console.log('Map Component Loaded...')}
            />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
