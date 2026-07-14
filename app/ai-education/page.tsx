import HeroSection from "@/components/home/Hero";
import CTA from "@/components/update-home/CTA";
import Hero from "@/components/update-home/Hero";
import PortfolioCertificate from "@/components/update-home/PortfolioCertificate";
import WhoThisIsFor from "@/components/update-home/WhoThisIsFor";
import WhyItMatters from "@/components/update-home/WhyItMatters";

export default function page() {
  return (
    <div>
        <Hero/>
<WhyItMatters/>
<WhoThisIsFor/>
<PortfolioCertificate/>
<CTA/>
    </div>
  )
}
