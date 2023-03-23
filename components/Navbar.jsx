import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Navbar = ({ navLinks }) => {
  const router = useRouter();
  return (
    <ul className="flex md:gap-[16px] lg:gap-[32px] font-medium text-sm">
      {navLinks.map((nav, index) => (
        <li key={index} className={router.pathname == nav.path ? "text-primary-gold" : "hover:text-primary-gold"}>
          <Link href={nav.path}>{nav.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
