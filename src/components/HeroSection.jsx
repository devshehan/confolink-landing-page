const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <div className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Your Standard, Our Excellence: {"  "}
        <span className="bg-gradient-to-r from-blue-300 to-blue-800 text-transparent bg-clip-text">
          Premier Conference Management Solution
        </span>{" "}
      </div>
      <p className="mt-10 sm:text-1xl lg:text-2xl text-center text-neutral-500 max-w-4xl">
        As leaders in the field, we deliver unparalleled tools for flawless
        event execution. Join us in redefining industry standards and shaping
        the future of conferences worldwide.
      </p>
      <div className="flex justify-center my-16">
        <a
          href="#"
          className="py-4 px-6 mx-4 rounded-full border hover:border-blue-500 transition duration-300 "
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
