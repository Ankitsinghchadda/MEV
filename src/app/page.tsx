import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GetStarted from "./components/GetStarted";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <GetStarted />
    </div>
  );
}
