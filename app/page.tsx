import Hero from "../components/home/Hero";
import StatsBar from "../components/home/StatsBar";
import MissionSection from "../components/home/MissionSection";
import TourTeaser from "../components/home/TourTeaser";
import Facilities from "../components/home/Facilities";
import WhyRayyan from "../components/home/WhyRayyan";
import CTABanner from "../components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <MissionSection />
      <TourTeaser />
      <Facilities />
      <WhyRayyan />
      <CTABanner />
    </>
  );
}
