import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GetStarted from "./components/GetStarted";
import CTA from "./components/CTA";
import Opportunity from "./components/Opportunity";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Opportunity />
      <GetStarted />
      <CTA />
    </div>
  );
}
