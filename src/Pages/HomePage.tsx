import HeroSection from "../components/home/HeroSection";
import FeatureSectionOne from "../components/home/FeatureSectionOne";
import FeatureSectionTwo from "../components/home/FeatureSectionTwo";
import FeatureSectionThree from "../components/home/FeatureSectionThree";
import TestimonialSection from "../components/home/TestimonialSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection/>
      <FeatureSectionOne/>
      <FeatureSectionTwo/>
      <FeatureSectionThree/>
      <TestimonialSection/>
    </main>
  );
};

export default HomePage;