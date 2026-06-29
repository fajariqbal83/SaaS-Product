import BrandSection from "../components/home/BrandsSection";
import Footer from "../components/home/Footer";
import FAQSection from "../components/pricing/FAQSection";
import IndividualProducts from "../components/pricing/IndividualProducts";
import InfoSection from "../components/pricing/InfoSection";
import PricingBundles from "../components/pricing/PricingBundles";

const PricingPage = () => {
  return (
    <main className="pt-28">
      <PricingBundles />
      <IndividualProducts/>
      <InfoSection/>
      <BrandSection/>
      <FAQSection/>
      <Footer/>
    </main>
  );
};

export default PricingPage;