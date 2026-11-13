import Navbar from "../components/Navbar";
import Plans from "../components/Plans";
import Footer from "../components/Footer";
import OneStopSection from "../components/OneStopSection";
import StatsSection from "../components/StatsSection";
import FaqSection from "../components/FaqSection";
import HeroSection from "../components/HeroSection";
import UrlShortenerHero from "../components/UrlShortenerHero";

function Home() {
  return (
    <>
       
       <Navbar />
       <UrlShortenerHero/>
   
  <Plans/>
  <HeroSection/>
  <OneStopSection/>
  <StatsSection/>
  <FaqSection/>
  <Footer/>

</>

  );
}

export default Home;