import { Check, Shield, Menu } from "lucide-react";
import { featureThreeData } from "../../data/featureThree"; 

const FeatureSectionThree = () => {
  return (
    <section className="relative overflow-hidden py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          
          {/* LEFT SIDE */}
          <div className="relative flex justify-center lg:justify-start mr-5">
            <div className="relative w-full max-w-sm md:max-w-md">
              
          
              <div className="bg-white shadow-xl rounded-3xl overflow-hidden w-full aspect-4/5 flex flex-col border border-gray-100">
                
             
                <div className="flex justify-between items-center px-6 py-5 bg-white shrink-0">
                  <div className="text-xl font-bold">
                    <svg className="w-8 h-4 text-black" viewBox="0 0 40 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M2 10C6 4 10 4 14 10C18 16 22 16 26 10C30 4 34 4 38 10" />
                    </svg>
                  </div>
                  <Menu size={24} className="text-gray-900 stroke-[2.5]" />
                </div>

                <div className="w-full flex-1 relative bg-slate-50 overflow-hidden">
                  <img 
                    src={featureThreeData.image}
                    alt="User working on laptop"
                    className="w-full h-full object-cover"
                  />
                </div>

              
                <div className="p-6 bg-white h-24 flex items-start shrink-0">
                  <div className="h-5 w-32 bg-gray-100 rounded-full" />
                </div>
              </div>

           
              <div 
                className="
                  absolute z-20 bottom-12 -right-4 w-[90%] max-w-sm
                  md:bottom-16 md:-right-16 md:w-115
                  bg-white rounded-2xl shadow-2xl p-6 md:p-7 border border-gray-100 hidden sm:block
                "
              >
             
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M38.7 20.08C37.34 13.18 31.28 8 24 8C18.22 8 13.2 11.28 10.7 16.08C4.68 16.72 0 21.82 0 28C0 34.62 5.38 40 12 40H38C43.52 40 48 35.52 48 30C48 24.72 43.9 20.44 38.7 20.08Z" fill="#00A814"/>
                      <path d="M19 26L23 30L31 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="h-5 w-24 bg-gray-100 rounded-full" />
                </div>

             
                <div className="space-y-3 mb-7">
                  <div className="h-3.5 w-[95%] bg-gray-100 rounded-full" />
                  <div className="h-3.5 w-[65%] bg-gray-100 rounded-full" />
                </div>

              
                <div className="grid grid-cols-2 gap-4">
                  <button className="px-4 py-3.5 border border-gray-300 text-gray-400 text-sm font-semibold rounded-md hover:bg-gray-50 transition-colors">
                    Download
                  </button>
                  <button className="px-4 py-3.5 bg-gray-300 text-white text-sm font-semibold rounded-md shadow-sm cursor-not-allowed">
                    Restore
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <div className="flex items-center gap-3 text-green-700 mb-4">
              <Shield size={18} className="text-green-600" />
              <span className="text-base md:text-lg font-medium">
                {featureThreeData.badge}
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight lg:leading-18 tracking-tight text-black">
              {featureThreeData.title}
            </h2>

            <p className="mt-5 text-base md:text-lg lg:text-xl text-gray-700 leading-7 md:leading-8 max-w-xl">
              {featureThreeData.description}
            </p>

            <div className="mt-8 md:mt-10 space-y-5 md:space-y-6">
              {featureThreeData.features.map((feature) => (
                <div key={feature.id} className="flex gap-4">
                  <Check size={24} className="text-green-600 shrink-0 mt-1" />
                  <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-7 md:leading-8">
                    {feature.text}{" "}
                    <span className="text-green-600 font-medium hover:underline cursor-pointer">
                      {feature.highlight}
                    </span>
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-10 md:mt-12 bg-green-700 hover:bg-green-800 transition-all text-white w-full sm:w-auto px-8 py-4 rounded-xl text-base md:text-lg font-medium shadow-lg shadow-green-700/10">
              {featureThreeData.buttonText} 
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FeatureSectionThree;