import AppShowcase from "@/components/home/AppShowcase";
import EnterpriseProductSolutions from "@/components/home/EnterpriseProductSolutions";
import Footer from "@/components/home/Footer";
import HeroSection from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";
import Products from "@/components/home/Products";
import ProductShowcase from "@/components/home/ProductShowcase";
import ServicesSection from "@/components/home/ServicesSection";
import SolutionLetest from "@/components/home/SolutionLatest";
import WhoWeAre from "@/components/home/WhoWeAre";
import WhyBeyond from "@/components/home/WhyBeyond";
import WhyItMatters from "@/components/update-home/WhyItMatters";

export default function Home() {
  return (
    <div>

<HeroSection/>
<WhoWeAre/>
<Products/>
      {/* <EnterpriseProductSolutions /> */}
      <ServicesSection />
      {/* <SolutionLetest /> */}
      <WhyBeyond />
      <AppShowcase/>
      <ProductShowcase />
     
    </div>
  );
}
