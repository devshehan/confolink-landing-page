import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import WorkFlow from "./components/WorkFlow";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6 mt-4">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Pricing />
        <Testimonial />
      </div>
    </>
  );
}

export default App;
