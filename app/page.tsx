
import AboutOverview from "./component/Home/AboutOverview";
import Expertise from "./component/Home/Expertise";
import FeatureBar from "./component/Home/FeatureBar";
import HeroSection from "./component/Home/HeroSection";
import Locations from "./component/Home/Locations";
import ValueAdded from "./component/Home/ValueAdded";
import Testimonials from "./component/Home/Testimonial";
import FAQ from "./component/Home/Faq";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureBar />
      <AboutOverview />
      <Expertise />
      <ValueAdded />
      <Testimonials />
      <Locations />
      <FAQ />
    </>
  );
}