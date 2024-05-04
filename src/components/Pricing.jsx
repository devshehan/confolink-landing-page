import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div id="pricing" className="pt-20">
      <h2 className="text-3xl sm:text-4xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((item, index) => (
          <div key={index} className="p-2 w-full sm:w-1/2 lg:w-1/3 ">
            <div className="p-10 border border-neutral-600 rounded-xl h-full hover:bg-neutral-800 hover:border-neutral-600 transition duration-500">
              <p className="text-4xl mb-10 flex flex-col sm:flex-row">
                {item.title}
                {item.title === "Standard" && (
                  <span
                    className="bg-gradient-to-r from-orange-500 to-red-400
                            text-transparent bg-clip-text text-xl mb-4"
                  >
                    Recommended
                  </span>
                )}
              </p>
              
              <p className="mb-8">
                <span className="text-4xl mt-4 mr-2">{item.price}</span>
                <span className="text-neutral-500 tracking-tighter">
                  /Month
                </span>
              </p>
              <ul className="flex-1">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex mt-8">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
