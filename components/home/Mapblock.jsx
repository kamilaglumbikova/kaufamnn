import { useState } from "react";
import { useLoadScript, GoogleMap } from "@react-google-maps/api";
import React from "react";
import Arrow from "../Arrow";
import Itemmap from "./Itemmap";

const Mapblock = () => {
  const itemsMap = [
    "Ape si Siusi - Taliansko",
    "Modena - Taliansko",
    "Zermatt - Taliansko",
    "Aschau - Rakúsko",
    "Obendorf in Tirol - Rakúsko",
    "Ape si Siusi - Taliansko1",
    "Modena - Taliansko1",
    "Zermatt - Taliansko1",
    "Aschau - Rakúsko1",
    "Obendorf in Tirol - Rakúsko1",
    "Ape si Siusi - Taliansko2",
    "Modena - Taliansko2",
    "Zermatt - Taliansko2",
    "Aschau - Rakúsko2",
    "Obendorf in Tirol - Rakúsko2",
  ]
  const [page, setPage] = useState(1);

  const handleLeftArrow = () => {
    if (page - 1 <= 0) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  };

  const handleRightArrow = () => {
    setPage(page + 1);
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCaNKWL1hHF7wzb2nRju8JN4byMjoLkq0M",
  });
  return (
    <div className="bg-primary-gold">
      <div className="max-w-[1440px] mx-auto font-rubik">
        <div className="lg:px-[104px] px-[24px] py-[48px] md:py-[96px] flex flex-col md:flex-row">
          <div className="flex-1 bg-primary-black p-[48px]">
            <div>
              <span className="bg-primary-gold h-[2px] w-[64px] block" />
              <h2 className="font-medium text-[32px] leading-[42.66px] font-playfair pt-[8px]">
                Kde všade sme už boli
              </h2>
            </div>
            <p className="mt-[32px] leading-[22px]">
              KAUFMANN BAU s.r.o., ktorá je zameraná predovšetkým na montážne
              práce v oblasti stavebníctva najmä v európskych krajinách kde vie
              spoločnosť ponúknuť širokú škálu odborných pracovníkov. Ako firma
              vykonávame remeselnú činnosť v 5 európskych krajinách: Slovensko,
              Rakúsko, Taliansko, Nemecko, Švajčiarsko.
            </p>
            <div>
              <div
                className={`${
                  page == 1 ? "flex " : "hidden"
                } flex-col gap-[4px] mt-[32px]`}
              >
                <Itemmap title="Ape si Siusi - Taliansko" />
                <Itemmap title="Modena - Taliansko" />
                <Itemmap title="Zermatt - Taliansko" />
                <Itemmap title="Aschau - Rakúsko" />
                <Itemmap title="Obendorf in Tirol - Rakúsko" />
              </div>
              <div
                className={`${
                  page == 2 ? "flex " : "hidden"
                } flex-col gap-[4px] mt-[32px]`}
              >
                <Itemmap title="Ape si Siusi - Taliansko 2" />
                <Itemmap title="Modena - Taliansko 2" />
                <Itemmap title="Zermatt - Taliansko 2" />
                <Itemmap title="Aschau - Rakúsko 2" />
                <Itemmap title="Obendorf in Tirol - Rakúsko 2" />
              </div>
              <div
                className={`${
                  page == 3 ? "flex " : "hidden"
                } flex-col gap-[4px] mt-[32px]`}
              >
                <Itemmap title="Ape si Siusi - Taliansko 3" />
                <Itemmap title="Modena - Taliansko 3" />
                <Itemmap title="Zermatt - Taliansko 3" />
                <Itemmap title="Aschau - Rakúsko 3" />
                <Itemmap title="Obendorf in Tirol - Rakúsko 3" />
              </div>
              <div className="flex gap-[4px] mt-[32px]">
                <Arrow handleLeftArrow={handleLeftArrow} direction="left" />
                <span
                  onClick={() => setPage(1)}
                  className={`${
                    page == 1 ? "bg-primary-gold text-primary-black" : ""
                  } cursor-pointer flex w-[34px] h-[34px] border border-primary-gold items-center justify-center`}
                >
                  1
                </span>
                <span
                  onClick={() => setPage(2)}
                  className={`${
                    page == 2 ? "bg-primary-gold text-primary-black" : ""
                  } cursor-pointer flex w-[34px] h-[34px] border border-primary-gold items-center justify-center`}
                >
                  2
                </span>
                <span
                  onClick={() => setPage(3)}
                  className={`${
                    page == 3 ? "bg-primary-gold text-primary-black" : ""
                  } cursor-pointer flex w-[34px] h-[34px] border border-primary-gold items-center justify-center`}
                >
                  3
                </span>
                <Arrow handleRightArrow={handleRightArrow} direction="right" />
              </div>
            </div>
          </div>
          <div className="flex-1">
            {isLoaded ? 
            <GoogleMap
              zoom={14}
              center={{ lat: 49.54740109384644, lng: 18.20955873638925 }}
              mapTypeId={google.maps.MapTypeId.ROADMAP}
              mapContainerStyle={{ width: "100%", height: "573px" }}
              onLoad={() => console.log("Map Component Loaded...")}
            />
            : (
              <div className="h-[573px] w-full"></div>
            )
           }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mapblock;
