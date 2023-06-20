"use client";
import EasySteps from "@/components/Home/EasySteps";
import HomeBanner from "@/components/Home/HomeBanner";
import Products from "@/components/Home/Products";
import Team from "@/components/Home/Team";
import TopBrands from "@/components/Home/TopBrands";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import "atropos/css";
import { useEffect } from "react";
import Aos from "aos";
import { Helmet } from "react-helmet";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <main>
      <Helmet>
        <title>ZET : Become a Certified Financial Advisor and Earn Big</title>
      </Helmet>
      <div className="max-w-screen-lg mx-auto">
        <HomeBanner></HomeBanner>
        <TopBrands></TopBrands>
      </div>
      <Products></Products>
      <Team></Team>
      <div className="max-w-screen-lg mx-auto">
        <WhyChooseUs></WhyChooseUs>
      </div>
      <EasySteps></EasySteps>
    </main>
  );
}
