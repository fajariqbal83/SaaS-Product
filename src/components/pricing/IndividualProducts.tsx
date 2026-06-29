import { individualProducts } from "../../data/individualProducts";
import rocketIcon from "../../../public/Icons/rocket.png";
import moneyback from "../../../public/Icons/money back.png";

const IndividualProducts = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10">
        {individualProducts.heading}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-20">
        {individualProducts.items.map((item) => (
          <div
            key={item.id}
            className="border-b border-gray-300 pb-6"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="flex gap-4 flex-1">
                <div className="w-12 h-12 rounded bg-[#f7f6f2] flex items-center justify-center shrink-0">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-6 w-6 object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-lg md:text-xl leading-tight">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-bold text-base md:text-lg">
                      {item.price}
                    </span>

                    {item.oldPrice && (
                      <span className="line-through text-gray-400 text-sm">
                        {item.oldPrice}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-gray-500 mt-1">
                    {item.billing}
                  </p>
                </div>
              </div>

              <button className="h-10 md:h-11 px-4 md:px-6 text-sm md:text-base whitespace-nowrap bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition-colors">
                Get
              </button>
            </div>

            <p className="text-sm md:text-base text-gray-600 leading-6 mt-4">
              {item.description}
            </p>

            <a
              href="#"
              className="text-sm underline mt-2 inline-block"
            >
              {item.link}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 flex flex-col md:flex-row items-start md:items-center justify-center gap-4 md:gap-8 text-sm md:text-base text-gray-600 px-2 sm:px-4">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <span>Prices do not include VAT</span>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <img
            src={rocketIcon}
            alt="Rocket"
            className="h-6 w-6 object-contain shrink-0"
          />
          <span>Get up to 50% off your first year</span>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <img
            src={moneyback}
            alt="Money Back"
            className="h-6 w-6 object-contain shrink-0"
          />
          <span>14 day money back guarantee.</span>
        </div>
      </div>
    </section>
  );
};

export default IndividualProducts;