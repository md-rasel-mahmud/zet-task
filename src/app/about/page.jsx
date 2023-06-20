"use client";
import AboutBanner from "@/components/About/AboutBanner";
import Featured from "@/components/About/Featured";
import Growth from "@/components/About/Growth";
import MeetFounders from "@/components/About/MeetFounders";
import MeetInvestors from "@/components/About/MeetInvestors";
import Head from "next/head";
import { Helmet } from "react-helmet";

const Page = () => {
  return (
    <>
      <Helmet>
        <title>ZET - About Us</title>
      </Helmet>
      <div>
        <AboutBanner></AboutBanner>
        <div className="max-w-screen-lg mx-auto">
          <Growth></Growth>
        </div>
        <Featured></Featured>
        <div className="max-w-screen-lg mx-auto">
          <MeetInvestors></MeetInvestors>
        </div>
        <MeetFounders></MeetFounders>
      </div>
    </>
  );
};

export default Page;
