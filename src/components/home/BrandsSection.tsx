import { brandsData } from "../../data/brands";


const BrandSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Recommended by the
            <br />
            biggest names in WordPress
          </h2>
        </div>

        {/* Brands */}
       <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 lg:gap-x-20">
  {brandsData.brands.map((brand) => (
  <div
    key={brand.id}
    className="flex items-center gap-3"
  >
    <img
      src={brand.logo}
      alt={brand.name}
      className="h-20 w-60 object-contain brightness-0"
    />

    
  </div>
))}
</div>

      </div>
    </section>
  );
};

export default BrandSection;