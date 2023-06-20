import EasySteps from "@/components/Home/EasySteps";
import HomeBanner from "@/components/Home/HomeBanner";
import Products from "@/components/Home/Products";
import Team from "@/components/Home/Team";
import TopBrands from "@/components/Home/TopBrands";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import "atropos/css";

export default function Home() {
  return (
    <main>
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
