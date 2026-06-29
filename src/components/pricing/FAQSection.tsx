import { ChevronDown } from "lucide-react";
import { faqData } from "../../data/faq";

const FAQSection = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-[#1d2b3a]">
        {faqData.heading}
      </h2>

      <div className="divide-y divide-gray-300">

        {faqData.items.map((item) => (

          <details
            key={item.id}
            className="group py-5"
          >

            <summary className="flex items-center justify-between cursor-pointer list-none">

              <h3 className="text-lg md:text-xl font-semibold text-[#1d2b3a] pr-6">
                {item.question}
              </h3>

              <ChevronDown
                className="w-5 h-5 transition-transform duration-300 group-open:rotate-180 shrink-0"
              />

            </summary>

            <div className="mt-4 text-gray-600 leading-7 text-sm md:text-base max-w-4xl">

              <span>{item.answer} </span>

              {item.linkText && (
                <a
                  href={item.link}
                  className="underline text-green-600 hover:text-black"
                >
                  {item.linkText}
                </a>
              )}

            </div>

          </details>

        ))}

      </div>

    </section>
  );
};

export default FAQSection;