import { ctaData } from "../../data/cta";

const FinalCTASection = () => {
  return (
    <section className="relative w-full  py-10 md:py-18 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 md:gap-10">
        
        {/* Main Heading */}
        <h2 className="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] font-medium text-black leading-[1.05] tracking-tight max-w-3xl">
          {ctaData.title}
        </h2>

        {/* Action Button */}
        <a
          href={ctaData.buttonLink}
          className="inline-block bg-[#008713] hover:bg-green-800 text-white font-medium text-md sm:text-base px-8 py-5.5 rounded-md transition-all duration-200 shadow-sm transform hover:scale-[1.02]"
        >
          {ctaData.buttonText}
        </a>

      </div>
    </section>
  );
};

export default FinalCTASection;