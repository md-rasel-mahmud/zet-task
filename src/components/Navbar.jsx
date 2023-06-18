"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/log.svg";
import { usePathname } from "next/navigation";

const Navbar = () => {
  // create active link class name
  const router = usePathname();

  const navItems = (
    <>
      <li>
        <Link
          className={router === "/" ? "text-primary focus:text-primary" : " "}
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
          href={"https://play.google.com/store/apps/details?id=in.onecode.app"}
        >
          Download Zet
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className="border-b-[1.9px]">
        {/* <div className="navbar max-w-screen-lg mx-auto px-0">
          <div className="flex-1">
            <Link href={"/"}>
              <Image src={logo} alt="logo" width={90} height={90}></Image>
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal gap-3 text-lg px-1"></ul>
          </div>
        </div> */}
        <div className="navbar max-w-screen-lg mx-auto px-2 lg:px-0">
          <div className="navbar-start justify-between lg:justify-stretch w-full flex-row-reverse lg:flex-row">
            <div className="dropdown dropdown-left">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>

            <Link href={"/"}>
              <Image className="pl-2 lg:px" src={logo} alt="logo" width={90} height={90}></Image>
            </Link>
          </div>

          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
