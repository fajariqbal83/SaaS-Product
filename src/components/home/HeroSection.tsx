import { heroData } from "../../data/hero";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f8f6] min-h-[90vh]">
      
      {/* Background Shape */}
      <div
        className="
          absolute
          top-0
          right-0
          h-full
          w-[45%]
          bg-linear-to-b
          from-[#f3ead2]
          via-[#e6ece1]
          to-[#dce4f2]
          [clip-path:polygon(20%_0,100%_0,100%_100%,55%_100%)]
        "
      />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 items-center min-h-[90vh] gap-16">

          {/* LEFT SIDE */}
          <div>

            <h1 className="text-[56px] md:text-[72px] lg:text-[96px] font-bold leading-[0.95] tracking-[-3px] text-black">
              {heroData.heroTitleLines[0]}
              <br />
              {heroData.heroTitleLines[1]}
            </h1>

            <p className="mt-8 text-xl md:text-2xl text-gray-700 max-w-lg leading-relaxed">
              {heroData.heroSubtitle.split("\n").map((line, idx) => (
                <span key={idx}>
                  {line}
                  {idx === 0 ? <br /> : null}
                </span>
              ))}
            </p>

            <button className="mt-10 bg-green-600 hover:bg-green-700 transition-all text-white px-8 py-4 rounded-md text-xl font-medium">
              {heroData.ctaLabel}
            </button>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center">

            {/* Phone Mockup */}
            <div className="relative w-[320px] md:w-95">

              <div className="rounded-[34px] border-10 border-white shadow-2xl overflow-hidden">
                <img
                  src={heroData.heroImage.src}
                  alt={heroData.heroImage.alt}
                  className="w-full h-162.5 object-cover"
                />
              </div>

              {/* Analytics Card */}
              <div className="absolute -left-32 top-40 bg-white p-5 rounded-2xl shadow-xl w-55">

                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600 text-lg">
                    {heroData.cards.analytics.title}
                  </span>

                  <span className="text-gray-400">
                    {heroData.cards.analytics.icon}
                  </span>
                </div>

                <svg
                  viewBox="0 0 200 80"
                  className="w-full h-20"
                >
                  <path
                    d="M0 65 C20 70 40 10 60 35 C80 60 100 15 120 40 C140 70 170 20 200 5"
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>

              </div>

              {/* Boost Card */}
              <div className="absolute -right-20 top-20 bg-white p-6 rounded-2xl shadow-xl w-55">

                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-lg">
                    {heroData.cards.boost.title}
                  </span>

                  <span className="text-gray-400">
                    {heroData.cards.boost.icon}
                  </span>
                </div>

                <div className="mt-4 flex justify-center">

                  <div className="relative w-28 h-28 rounded-full border-[5px] border-green-600 flex items-center justify-center">
                    <span className="text-4xl font-semibold text-gray-700">
                      {heroData.cards.boost.value}
                    </span>
                  </div>

                </div>

              </div>

              {/* Backup Card */}
              <div className="absolute -right-10 bottom-10 bg-white p-5 rounded-2xl shadow-xl w-55">

                <div className="flex justify-between">
                  <span className="text-gray-600 text-lg">
                    {heroData.cards.backup.title}
                  </span>

                  <span>{heroData.cards.backup.icon}</span>
                </div>

                <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-green-600" />
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
