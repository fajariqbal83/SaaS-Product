import { pricingBundles } from "../../data/pricingBundles";

const PricingBundles = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="mx-auto mb-16 max-w-7xl text-center text-4xl font-bold leading-tight text-[#1d2b3a] sm:text-2xl lg:text-4xl lg:whitespace-nowrap">
        {pricingBundles.heading}
      </h1>

      <div className="grid lg:grid-cols-3 gap-8 items-stretch">
        {pricingBundles.cards.map((card) => (
          <div
            key={card.id}
            className="relative overflow-hidden rounded-xl border border-gray-200 shadow-sm flex flex-col
             bg-linear-to-br from-[#f7f6f2] via-[#f7f6f2] to-[#dff2d8]"
          >
            {/* Top */}
            <div className="relative bg-[#444b54] h-54 flex items-center justify-center overflow-hidden">
              <div className="absolute w-40 h-40 bg-green-500/20 blur-3xl rounded-full"></div>

              <div
                className={`relative grid ${card.icons.length > 3 ? "grid-cols-4" : "grid-cols-3"
                  } gap-3`}
              >
                {card.icons.map((icon, index) => (
                  <div
                    key={index}
                    className="w-14 h-14 bg-[#f7f6f2] rounded-md flex items-center justify-center"
                  >
                    <img
                      src={icon}
                      alt=""
                      className="h-7 w-7 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Body */}
            <div className="p-7 flex flex-col flex-1">
              <h2 className="text-4xl font-bold text-[#233242] mb-3">
                {card.title}
              </h2>

              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-[#233242]">
                    {card.price}
                  </span>

                  <span className="text-gray-400 line-through">
                    {card.oldPrice}
                  </span>
                </div>

                {/* OFF Text */}
                <p className="text-sm text-gray-600 mt-1">
                  {card.off}
                </p>

                {/* Save Badge */}
                <div className="inline-block mt-3 rounded-md bg-[#d8f5c6] px-3 py-1 text-sm font-semibold text-[#245c2d]">
                  {card.save}
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                {card.description}
              </p>

              {card.features.length > 0 && (
                <>
                  <p className="font-semibold mb-2">
                    This bundle includes:
                  </p>

                  <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                    {card.features.map((feature) => (
                      <li key={feature.id}>{feature.text}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* Bottom Section */}
              <div className="mt-auto">
                <a
                  href="#"
                  className="underline text-sm block mb-6"
                >
                  {card.link}
                </a>

                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-semibold">
                  Get
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingBundles;