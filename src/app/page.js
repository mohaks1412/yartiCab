import Image from "next/image";
import styles from "./page.module.css";
import FeaturesGrid from "./components/landing-page/FeatureCard";
import WhyYatri from "./components/landing-page/WhyYatri";
import CarTable from "./components/landing-page/CarTable";
import OneWayJourney from "./components/landing-page/OneWayJourney";
import CarRentalBenefits from "./components/landing-page/CarRentalBenefits";
import WhyOneWay from "./components/landing-page/WhyOneWay";
import InfoSection from "./components/landing-page/InfoSection";
import FeatureSection from "./components/landing-page/FeatureSeaction";
import Testimonial from "./components/landing-page/Testimonial";
import Download from "./components/landing-page/Download";
import AvailableIn from "./components/landing-page/AvailableIn";
import Footer from "./components/landing-page/Footer";
import TrustBar from "./components/landing-page/TrustBar";
import BookingPortal from "./components/landing-page/BookingPortal";
import Intercity from "./components/landing-page/Intercity";

export default function Home() {
  return (
    <>
        <BookingPortal/>
        <TrustBar/>
        <FeaturesGrid/>
        <Intercity />
        <WhyYatri/>
        <CarTable/>
        <OneWayJourney/>
        <CarRentalBenefits/>
        <WhyOneWay/>
        <InfoSection/>
        <FeatureSection/>
        <Testimonial/>
        <Download/>
        <AvailableIn />
        <Footer />
      </>
  );
}
