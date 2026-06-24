import { Check } from "lucide-react";
import { pricingData } from "../../data/pricing";

const PricingSection = () => {
    return (
        <section className="relative overflow-hidden py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">

                {/* Heading */}
                <div className="text-center max-w-4xl mx-auto mb-16">

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-black">
                        {pricingData.title}
                    </h2>

                    <p className="mt-5 text-base md:text-lg lg:text-xl text-gray-700 leading-7 md:leading-8">
                        {pricingData.description}
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid lg:grid-cols-3 gap-8 items-stretch">

                    {pricingData.plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative bg-white rounded-2xl border overflow-hidden flex flex-col h-full transition-all duration-300
                ${plan.recommended
                                    ? "border-green-600 shadow-xl scale-[1.02]"
                                    : "border-gray-200 shadow-lg"
                                }`}
                        >
                            {/* Recommended Badge */}
                            {plan.recommended && (
                                <div className="bg-green-700 text-white text-sm font-semibold px-5 py-3">
                                    Recommended
                                </div>
                            )}

                            <div className="p-7 flex flex-col h-full">
                                {/* Title */}
                                <h3 className="text-3xl font-medium text-black">
                                    {plan.title}
                                </h3>

                                {/* Discount */}
                                <div className="mt-5 inline-flex w-fit bg-yellow-300 text-black text-xs font-bold px-2 py-1 rounded">
                                    {plan.discount}
                                </div>

                                {/* Price */}
                                <div className="mt-4">
                                    <div className="text-4xl font-bold text-black break-words">
                                        {plan.price}
                                    </div>

                                    <div className="text-lg text-gray-500 line-through">
                                        {plan.originalPrice}
                                    </div>

                                    <p className="text-sm text-gray-500 mt-2">
                                        per month for the first year, billed yearly
                                    </p>
                                </div>

                                {/* Button */}
                                <button
                                    className="
                    mt-6
                    bg-green-700
                    hover:bg-green-800
                    text-white
                    py-3.5
                    rounded-lg
                    font-medium
                    transition-all
                    w-full
                  "
                                >
                                    {plan.buttonText}
                                </button>

                                {/* Description */}
                                <p className="mt-6 text-gray-700 leading-7">
                                    {plan.description}
                                </p>

                                {/* Features */}
                                <div className="mt-8 flex-1">
                                    <ul className="space-y-4">
                                        {plan.features.map((feature) => (
                                            <li
                                                key={feature.id}
                                                className="flex items-start gap-3"
                                            >
                                                <Check
                                                    size={18}
                                                    className="text-green-600 shrink-0 mt-1"
                                                />

                                                <span className="text-gray-700 leading-6">
                                                    {feature.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Footer */}
                                <p className="mt-8 text-sm text-gray-500">
                                    * Subject to your usage and storage limit.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Text */}
                <div className="text-center mt-12">
                    <p className="text-sm text-gray-500">
                        For more information about our pricing and free tools, visit our{" "}
                        <span className="text-green-600 hover:underline cursor-pointer">
                            pricing page
                        </span>
                        .
                    </p>
                </div>

            </div>
        </section>
    );
};

export default PricingSection;