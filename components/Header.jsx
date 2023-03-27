import Image from "next/image";
import React, { useEffect, useState } from "react";
import Languageswitcher from "./Languageswitcher";
import Navbar from "./Navbar";
import Navbarmobile from "./Navbarmobile";

const Header = () => {
  const navLinks = [
    { name: "Domov", path: "/" },
    {
      name: "O nás",
      path: "/o-nas",
    },
    {
      name: "Služby",
      path: "/sluzby",
    },
    {
      name: "Referencie",
      path: "/referencie",
    },
    {
      name: "Kariéra",
      path: "/kariera",
    },
    {
      name: "Kontakt",
      path: "/kontakt",
    },
  ];
  const [width, setWidth] = useState(0);
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <div className="max-w-[1440px] mx-auto font-rubik h-[56px] md:h-[100px]">
      <div className="lg:px-[104px] px-[24px] w-full mx-auto h-[56px] md:h-[100px] flex items-center justify-between">
        <div className="flex-1">
          <div className="w-[185px] h-[40px] md:w-[150px] md:h-[45px] lg:w-[220px] lg:h-[64px] relative">
          <Image
            src={
              width > 767 ? "/assets/logo-black.png" : "/assets/logo-white.png"
            }
            alt="Kaufmann Bau"
            fill
          />
          </div>
        </div>
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          <img
            src="/assets/menu.svg"
            alt="menu"
            className="w-[24px] h-[24px]"
          />
        </div>
        <div
          className={
            nav
              ? "md:hidden fixed right-0 top-0 w-full h-screen z-[100]"
              : "h-screen"
          }
        >
          <div
            className={
              nav
                ? "fixed right-0 top-0 w-[85%] h-screen bg-[#ffffff] p-4 ease-in duration-500 overflow-y-auto z-30"
                : "fixed right-[-100%] top-0 p-4 ease-in duration-500 bg-[#ecf0f3] h-full z-30"
            }
          >
            <Navbarmobile navLinks={navLinks} handleNav={handleNav} />
          </div>
        </div>
        <div className="hidden md:block flex-2">
          <Navbar navLinks={navLinks} />
        </div>
        <div className="hidden flex-1 md:flex justify-end">
          <Languageswitcher bordercolor="border-[#26272D]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
