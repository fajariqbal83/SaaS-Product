import HeroSection from "../components/home/HeroSection";
import FeatureSectionOne from "../components/home/FeatureSectionOne";
import FeatureSectionTwo from "../components/home/FeatureSectionTwo";
import FeatureSectionThree from "../components/home/FeatureSectionThree";
import TestimonialSection from "../components/home/TestimonialSection";
import DemoSection from "../components/home/DemoSection";
import BrandSection from "../components/home/BrandsSection";
import PricingSection from "../components/home/PricingSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection/>
      <FeatureSectionOne/>
      <FeatureSectionTwo/>
      <FeatureSectionThree/>
      <TestimonialSection/>
      <DemoSection/>
      <BrandSection/>
      <PricingSection/>
    </main>
  );
};

export default HomePage;