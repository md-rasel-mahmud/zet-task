"use client";

import investorImg1 from "@/assets/InvCompany1.webp";
import investorImg2 from "@/assets/InvCompany2.webp";
import investorImg3 from "@/assets/InvCompany3.webp";
import investorImg4 from "@/assets/InvCompany4.webp";
import investorImg5 from "@/assets/Inv1.webp";
import investorImg6 from "@/assets/Inv2.webp";
import investorImg7 from "@/assets/Inv3.webp";
import investorImg8 from "@/assets/Inv4.webp";
import investorImg9 from "@/assets/Inv5.webp";
import investorImg10 from "@/assets/Inv6.webp";
import investorImg11 from "@/assets/Inv7.webp";
import investorImg12 from "@/assets/Inv8.webp";
import Image from "next/image";

import Atropos from "atropos/react";

const MeetInvestors = () => {
  const investorsLogo = [
    investorImg1,
    investorImg2,
    investorImg3,
    investorImg4,
  ];
  const investorsInfo = [
    { img: investorImg5, name: "Kunal Shah", title: "Founder, CRED" },
    { img: investorImg6, name: "Gaurav Munjal", title: "Founder, UNACADEMY" },
    { img: investorImg7, name: "Aakrit Vaish", title: "Co-Founder, HAPTIK" },
    { img: investorImg8, name: "Harshil Mathur", title: "Founder, RAZORPAY" },
    {
      img: investorImg9,
      name: "Vidit Aatrey",
      title: "Founder & CEO, MEESHO",
    },
    { img: investorImg10, name: "Amrish Rau", title: "CEO, PINELABS" },
    { img: investorImg11, name: "Lalit Keshre", title: "CEO, GROWW" },
    { img: investorImg12, name: "Gokul Rajaram", title: "Product, DOORDASH" },
  ];
  return (
    <div className="mx-2 lg:mx-0">
      <h2 className="text-4xl font-bold mt-16">Meet the Investors</h2>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="grid grid-cols-1 lg:grid-cols-3 gap-14 my-20"
      >
        {investorsLogo.map((investor, index) => (
          <div key={index}>
            <Atropos rotateTouch={false} shadowScale={0.6}>
              <Image src={investor} alt="Investors image"></Image>
            </Atropos>
          </div>
        ))}
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="grid grid-cols-1 lg:grid-cols-3 my-20 gap-20"
      >
        {investorsInfo.map((investor, index) => (
          <div key={index}>
            <Atropos rotateTouch={false} shadowScale={0}>
              <Image src={investor.img} alt="Investors image"></Image>
              {investor?.name && (
                <h2 className="text-xl mt-5 font-semibold">{investor?.name}</h2>
              )}
              {investor?.title && <p className="text-sm">{investor?.title}</p>}
            </Atropos>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetInvestors;
