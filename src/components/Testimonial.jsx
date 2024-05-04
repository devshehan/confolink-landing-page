import { testimonials } from "../constants";

const Testimonial = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-4xl lg:text-6xl text-center my-8 lg:my-10">
        Voices of Our Community
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 py-2 px-4">
            <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  src={testimonial.image}
                  alt={testimonial.user}
                  className="h-16 w-16 mr-6 rounded-full border border-neutral-300"
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <p className="text-sm italic bold text-neutral-200">
                    {testimonial.job}
                  </p>
                  <span className="text-sm font-normal italic text-neutral-400">
                    {testimonial.organization}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
