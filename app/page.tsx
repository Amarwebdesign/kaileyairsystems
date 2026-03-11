
import AboutOverview from "./component/AboutOverview";
import Expertise from "./component/Expertise";
import FeatureBar from "./component/FeatureBar";
import HeroSection from "./component/HeroSection";
import Locations from "./component/Locations";
import ValueAdded from "./component/ValueAdded";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureBar />
      <AboutOverview />
      <Expertise />
      <ValueAdded />
      <Locations />
    </>
  );
}