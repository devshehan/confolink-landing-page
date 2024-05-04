import { CheckCircle2 } from "lucide-react";
import { VideoId, checkList } from "../constants";

const WorkFlow = () => {
  return (
    <div id="workflow" className="pt-20">
      <h2 className="text-3xl text-center sm:text-5xl lg:text-6xl lg:mt-20 tracking-wide">
        Revolutionize Your Conference Workflow: {"  "}
        <span className="bg-gradient-to-r from-blue-300 to-blue-800 text-transparent bg-clip-text">
          Streamline, Optimize, Succeed
        </span>{" "}
      </h2>

      <div className="mt-10 flex flex-wrap justify-center">
        {/* Image Section */}
        <div className="p-12 w-full lg:w-1/2">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${VideoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checkList.map((item, index) => (
            <div key={index} className="flex mb-8">
              <div className="text-green-500 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 text-xl">{item.text}</h5>
                <p className="text-md mb-2 text-neutral-500 text-left">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
