 import { Check, ChevronsRight, ShoppingBag } from "lucide-react";
import { featureTwoData } from "../../data/featureTwo";

const FeatureSectionTwo = () => {
  const data = featureTwoData;

  return (
    <section className="bg-[#f8f8f6] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

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
                                                className="text-green-600 shrink-0 mt-1"/>
          
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
          <div className="relative w-full max-w-130">


            {/* Image */}
            <div className="relative z-10 w-105 h-125 rounded-xl overflow-hidden">
                  <div className="bg-white shadow-xl rounded-3xl overflow-hidden w-full">
                                            <div className="relative w-full max-w-175">
              
                                                <div className="bg-white shadow-xl rounded-3xl overflow-hidden h-125 sm:h-150 md:h-170 lg:h-175">
                                                    <div className="flex h-full">
              
              
                                                        <div className="w-[78%]">
                                                            <img
                                                                src={featureTwoData.image}
                                                                alt="Growth"
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
              
              
                                                        <div className="w-[22%] bg-white" />
              
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
            </div>

            {/* Top Icon Card */}
							<div className="absolute top-6 right-4  bg-white rounded-xl shadow-lg p-4 z-20">
								<ShoppingBag size={24}
									className="text-green-600" />
							</div>

            {/* Score Card */}
            <div
              className="
                absolute
                z-20
                top-24
                right-0
                bg-white
                rounded-2xl
                shadow-xl
                p-8
                w-115
              "
            >
              <h3 className="text-5xl font-bold mb-10">
                Overall score: {data.overallGrade}
              </h3>

              {/* Mobile */}
              <div className="mb-8">
                <div className="relative h-7 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-400 rounded-full"
                    style={{ width: `${data.mobileScore}%` }}
                  />
                </div>

                <div className="flex justify-between mt-3 text-sm text-gray-600">
                  <span>Mobile score</span>
                  <span className="font-bold">
                    {data.mobileScore}
                  </span>
                </div>
              </div>

              {/* Desktop */}
              <div>
                <div className="relative h-7 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-400 rounded-full"
                    style={{ width: `${data.desktopScore}%` }}
                  />
                </div>

                <div className="flex justify-between mt-3 text-sm text-gray-600">
                  <span>Desktop score</span>
                  <span className="font-bold">
                    {data.desktopScore}
                  </span>
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