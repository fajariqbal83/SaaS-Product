import { deviceShowcaseData } from "../../data/deviceshowcase";

const DeviceShowcaseSection = () => {
    return (
        <section className="py-20 lg:py-28 bg-[#f3f3f0]">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">

                <div className="flex flex-col items-center text-center">

                    {/* Devices Image */}
                    <div className="mb-12">
                        <img
                            src={deviceShowcaseData.image}
                            alt={deviceShowcaseData.title}
                            className="w-full max-w-4xl mx-auto"
                        />
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-black max-w-4xl">
                        {deviceShowcaseData.title}
                    </h2>

                    {/* Description */}
                    <p className="mt-8 text-lg md:text-xl text-gray-600 leading-8 max-w-2xl">
                        {deviceShowcaseData.description}
                    </p>

                    {/* Store Buttons */}
                    <img
                        src={deviceShowcaseData.logo}
                        className="w-80 h-20 object-contain"
                    />

                </div>

            </div>
        </section>
    );
};

export default DeviceShowcaseSection;