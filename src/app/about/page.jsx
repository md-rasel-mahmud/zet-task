"use client";
import AboutBanner from "@/components/About/AboutBanner";
import Featured from "@/components/About/Featured";
import Growth from "@/components/About/Growth";
import MeetInvestors from "@/components/About/MeetInvestors";

const Page = () => {
  return (
    <div>
      <AboutBanner></AboutBanner>
      <div className="max-w-screen-lg mx-auto">
        <Growth></Growth>
      </div>
      <Featured></Featured>
      <div className="max-w-screen-lg mx-auto">
        <MeetInvestors></MeetInvestors>
      </div>
    </div>
  );
};

export default Page;
