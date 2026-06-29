import { ExternalLink } from "lucide-react";
import { infoSectionData } from "../../data/infoSection";

const InfoSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Top Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#1d2b3a]">
          {infoSectionData.topHeading}
        </h2>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          {infoSectionData.buttons.map((button) => (
            <a
              key={button.id}
              href={button.link}
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-800 rounded-md px-6 py-3 text-lg font-medium hover:bg-gray-100 transition"
            >
              {button.text}
              <ExternalLink size={18} />
            </a>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-32">
          <h2 className="text-2xl md:text-4xl font-bold text-[#1d2b3a]">
            {infoSectionData.bottomHeading}
          </h2>

          <p className="mt-6 text-gray-700 text-lg max-w-2xl mx-auto">
            {infoSectionData.description}
          </p>

          <button className="mt-8 border border-gray-900 rounded-md px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition">
            {infoSectionData.ctaButton}
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;