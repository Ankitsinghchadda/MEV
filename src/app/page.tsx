'use client'
import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GetStarted from "./components/GetStarted";
import CTA from "./components/CTA";
import Opportunity from "./components/Opportunity";
import ChatButton from "./components/ChatButton";
import ChatTextArea from "./components/ChatTextArea";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <div className="bg-[#242424]">
      <Navbar />
      <Hero />
      <Opportunity />
      <GetStarted />
      <CTA />
      <ChatButton onClick={() => setIsChatOpen(!isChatOpen)} isOpen={isChatOpen}/>
      {isChatOpen && <ChatTextArea isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />}
    </div>
  );
}
