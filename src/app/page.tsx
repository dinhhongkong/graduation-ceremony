import Image from "next/image";
import Link from "next/link";
import HeroSection from "./component/HeroSection";
import EventDetails from "./component/EventDetails";
import PersonalInvitation from "./component/PersonalInvitation";
import Memories from "./component/Memories";
import TravelGuideFAQ from "./component/TravelGuideFAQ";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Guestbook from "./component/Guestbook";
import AudioPlayer from "./component/AudioPlayer";

export default function Home() {
  return (
    <div>
      <AudioPlayer />
      <HeroSection />
      <EventDetails />
      <PersonalInvitation />
      <Memories />
      <TravelGuideFAQ />
      {/* <Guestbook /> */}

      <Contact />
      {/* <Footer /> */}
    </div>
  );
}
