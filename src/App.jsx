import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6 mt-4">
        <HeroSection/>
        <FeatureSection/>
      </div>
    </>
  );
}

export default App;
