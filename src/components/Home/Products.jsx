"use client";
import "atropos/css";
import Atropos from "atropos/react";

import Image from "next/image";

import cardImg1 from "@/assets/3dcard1.webp";
import cardImg2 from "@/assets/3dcard2.webp";
import cardImg3 from "@/assets/3dcard3.webp";
import cardImg4 from "@/assets/3dcard4.webp";

import leftTexure from '@/assets/left-product-bg-texture.svg'
import rightTexure from '@/assets/right-product-bg-texture.svg'


const Products = () => {
  return (
    <div
      className="min-h-screen relative flex flex-col items-center justify-center"
      style={{
        background:
          "linear-gradient(168deg, rgb(233, 244, 255) 0%, rgb(255, 255, 255) 100%)",
      }}
    >
        <Image src={leftTexure} className="top-0 left-0 absolute" alt="texture background"></Image>
        <Image src={rightTexure} className="bottom-0 right-0 absolute" alt="texture background"></Image>
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-center text-3xl pt-10 lg:pt-0 font-bold">Products on ZET</h2>
        <p className="text-center mb-10">
          We are trusted by best brand in the country
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-lg">
          <Atropos rotateTouch={false} shadowScale={0.6}>
            <div className="card lg:card-side min-h-[200px] group hover:bg-white bg-[#edffec] mx-3 lg:mx-0">
              <figure className="lg:pl-10 w-1/3 mx-auto lg:w-2/3">
                <Image
                  className="group-hover:grayscale-0 grayscale"
                  src={cardImg1}
                  alt="3d card image"
                ></Image>
              </figure>
              <div className="card-body text-center lg:text-left">
                <h2 className="card-title justify-center lg:justify-start">
                  CREDIT CARDS
                </h2>
                <p>
                  100% Contactless Application Process with Instant Approval
                  From Top Banks.
                </p>
              </div>
            </div>
          </Atropos>
          <Atropos rotateTouch={false} shadowScale={0.6}>
            <div className="card lg:card-side min-h-[200px] group hover:bg-white bg-[#fff1ca] mx-3 lg:mx-0">
              <figure className="lg:pl-10 w-1/3 mx-auto lg:w-2/3">
                <Image
                  className="group-hover:grayscale-0 grayscale"
                  src={cardImg2}
                  alt="3d card image"
                ></Image>
              </figure>
              <div className="card-body text-center lg:text-left">
                <h2 className="card-title justify-center lg:justify-start">
                  LOANS
                </h2>
                <p>
                  100% online process. Instant offers. Affordable Rate of
                  Interest on loans.
                </p>
              </div>
            </div>
          </Atropos>
          <Atropos rotateTouch={false} shadowScale={0.6}>
            <div className="card lg:card-side min-h-[200px] group hover:bg-white bg-[#ffeee7] mx-3 lg:mx-0">
              <figure className="lg:pl-10 w-1/3 mx-auto lg:w-2/3">
                <Image
                  className="group-hover:grayscale-0 grayscale"
                  src={cardImg3}
                  alt="3d card image"
                ></Image>
              </figure>
              <div className="card-body text-center lg:text-left">
                <h2 className="card-title justify-center lg:justify-start">
                  BUY NOW PAY LATER
                </h2>
                <p>
                  Short-term financing that allows consumers to make purchases
                  and pay for them over time. saving-accounts
                </p>
              </div>
            </div>
          </Atropos>
          <Atropos rotateTouch={false} shadowScale={0.6}>
            <div className="card lg:card-side min-h-[200px] group hover:bg-white bg-[#fff5e7] mx-3 lg:mx-0">
              <figure className="lg:pl-10 w-1/3 mx-auto lg:w-2/3">
                <Image
                  className="group-hover:grayscale-0 grayscale"
                  src={cardImg4}
                  alt="3d card image"
                ></Image>
              </figure>
              <div className="card-body text-center lg:text-left">
                <h2 className="card-title justify-center lg:justify-start">
                  SAVING ACCOUNTS
                </h2>
                <p>
                  ZET offers range of savings account that suits your personal
                  needs for the banking.
                </p>
              </div>
            </div>
          </Atropos>
        </div>
      </div>
    </div>
  );
};

export default Products;
