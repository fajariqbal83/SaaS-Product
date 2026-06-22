import { Check, ChevronsRight, ShoppingBag, Smartphone, Monitor, AudioWaveform } from "lucide-react";
import { featureTwoData } from "../../data/featureTwo";

const FeatureSectionTwo = () => {
  const data = featureTwoData;

  return (
    <section className="relative overflow-hidden py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 text-green-700 mb-4">
              <ChevronsRight size={18} />
              <p className="text-base md:text-lg font-medium">{data.badge}</p>
            </div>

            <h2 className="ext-4xl sm:text-5xl lg:text-6xl font-medium leading-tight lg:leading-18 tracking-tight text-black">
              {data.title}
            </h2>

            <p className="mt-5 text-base md:text-lg lg:text-xl text-gray-700 leading-7 md:leading-8 max-w-xl">
              {data.description}
            </p>

            <div className="mt-8 md:mt-10 space-y-5 md:space-y-6">

              {
                featureTwoData.features.map((feature) => (
                  <div key={
                    feature.id
                  }
                    className="flex gap-4">
                    <Check size={24}
                      className="text-green-600 shrink-0 mt-1" />

                    <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-7 md:leading-8">
                      {
                        feature.text
                      }
                      {" "}
                      <span className="text-green-600">
                        {
                          feature.highlight
                        } </span>
                    </p>
                  </div>
                ))
              } </div>

            <button className="mt-10 md:mt-12 bg-green-700 hover:bg-green-800 transition-all text-white w-full sm:w-auto px-8 py-4 rounded-md text-base md:text-lg font-medium">
              {data.buttonText}
            </button>
          </div>

          {/* Right Image + Card */}
          <div className="relative w-full max-w-6xl mx-auto px-6 lg:px-8 py-10">


            <div className="relative z-10 w-full max-w-3xl mx-auto">

              <div className="bg-white shadow-xl rounded-3xl overflow-hidden w-full aspect-4/3 md:aspect-[1.4] flex">


                <div className="w-[78%] h-full relative">
                  <img
                    src={featureTwoData.image}
                    alt="Growth"
                    className="w-full h-full object-cover"
                  />


                  <div className="absolute top-6 left-6 text-white opacity-80">
                    <AudioWaveform />
                  </div>
                </div>


                <div className="w-[22%] bg-white h-full relative">

                  <div className="absolute top-6 right-6">
                    <ShoppingBag size={24} className="text-green-600" />
                  </div>
                </div>

              </div>
            </div>

            {/* Score Card */}
            <div
              className="absolute   z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[90%]  max-w-md md:top-1/2 md:left-auto md:right-6 lg:right-8 xl:right-10 md:translate-x-[8%] md:-translate-y-1/2 md:w-125  bg-white rounded-3xl  shadow-2xl  p-6  md:p-10
    "
            >
              <h3 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-black">
                Overall score: {data.overallGrade}
              </h3>

              {/* Mobile Score Bar */}
              <div className="mb-6 md:mb-8">
                <div className="relative h-6 md:h-8 bg-gray-100 rounded-full flex items-center justify-between pr-2">
                  <div
                    className="h-full bg-orange-400 rounded-full flex items-center justify-end pr-3 transition-all duration-500"
                    style={{ width: `${data.mobileScore}%` }}
                  >

                    <span className="absolute right-[calc(100%-${data.mobileScore}%)] translate-x-1/2 bg-white text-black text-xs font-bold w-7 h-7 flex items-center justify-center rounded-full shadow-md">
                      {data.mobileScore}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-3 text-sm font-medium text-gray-700">
                  <Smartphone size={18} />
                  <span>Mobile score</span>
                </div>
              </div>

              {/* Desktop Score Bar */}
              <div>
                <div className="relative h-6 md:h-8 bg-gray-100 rounded-full flex items-center justify-between pr-2">
                  <div
                    className="h-full bg-green-400 rounded-full flex items-center justify-end pr-3 transition-all duration-500"
                    style={{ width: `${data.desktopScore}%` }}
                  >

                    <span className="absolute right-[calc(100%-${data.desktopScore}%)] translate-x-1/2 bg-white text-black text-xs font-bold w-7 h-7 flex items-center justify-center rounded-full shadow-md">
                      {data.desktopScore}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-3 text-sm font-medium text-gray-700">
                  <Monitor size={18} />
                  <span>Desktop score</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSectionTwo;