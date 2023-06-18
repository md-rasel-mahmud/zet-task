import HomeBanner from "@/components/HomeBanner";
import Products from "@/components/Products";
import Team from "@/components/Team";
import TopBrands from "@/components/TopBrands";
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
    </main>
  );
}
