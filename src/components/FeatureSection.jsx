import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div id="features" className="border-b border-neutral-800 min-h-[800px]">
      <div className="sm:hidden lg:block h-32"></div>

      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl lg:mt-20 tracking-wide">
          Easily Manage your {"  "}
          <span className="bg-gradient-to-r from-blue-300 to-blue-800 text-transparent bg-clip-text">
            Next Conference
          </span>{" "}
        </h2>
        <div className="flex flex-wrap mt-10 lg:mt-20">
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:1/2 lg:w-1/3">
              <div className="flex text-left">
                <div
                  className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-blue-800
                 justify-center items-center rounded-full"
                >
                  {feature.icon}
                </div>
                <div>
                  <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                  <p className="text-md mb-20 text-neutral-500 text-left">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
