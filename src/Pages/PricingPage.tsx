import IndividualProducts from "../components/pricing/IndividualProducts";
import PricingBundles from "../components/pricing/PricingBundles";

const PricingPage = () => {
  return (
    <main className="pt-28">
      <PricingBundles />
      <IndividualProducts/>
    </main>
  );
};

export default PricingPage;