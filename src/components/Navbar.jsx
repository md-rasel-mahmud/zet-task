"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/log.svg";
import { usePathname } from "next/navigation";

const Navbar = () => {
  // create active link class name
  const router = usePathname();

  return (
    <div className="border-b-[1.9px]">
      <div className="navbar max-w-screen-lg mx-auto px-0">
        <div className="flex-1">
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={90} height={90}></Image>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal gap-3 text-lg px-1">
            <li>
              <Link
                className={
                  router === "/" ? "text-primary focus:text-primary" : " "
                }
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={
                  router === "/about" ? "text-primary focus:text-primary" : ""
                }
                href={"/about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="bg-secondary text-white "
                href={
                  "https://play.google.com/store/apps/details?id=in.onecode.app"
                }
              >
                Download Zet
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
