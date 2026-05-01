import React, { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";

const HeroSection = React.lazy(() => import("@/sections/HeroSection").then(m => ({ default: m.HeroSection })));
const AboutSection = React.lazy(() => import("@/sections/AboutSection").then(m => ({ default: m.AboutSection })));
const ServicesSection = React.lazy(() => import("@/sections/ServicesSection").then(m => ({ default: m.ServicesSection })));
const PortfolioSection = React.lazy(() => import("@/sections/PortfolioSection").then(m => ({ default: m.PortfolioSection })));
const TeamSection = React.lazy(() => import("@/sections/TeamSection").then(m => ({ default: m.TeamSection })));
const ContactSection = React.lazy(() => import("@/sections/ContactSection").then(m => ({ default: m.ContactSection })));

function App() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen text-[#0F0F0F] font-sans pb-[76px] lg:pb-0 flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow w-full">
        <Suspense fallback={
          <div className="w-full min-h-screen p-4 space-y-6 pt-24 animate-pulse max-w-7xl mx-auto">
            <div className="w-3/4 h-12 bg-gray-200 rounded-lg"></div>
            <div className="w-full h-32 bg-gray-200 rounded-xl"></div>
            <div className="w-full h-32 bg-gray-200 rounded-xl"></div>
            <div className="w-full h-32 bg-gray-200 rounded-xl"></div>
          </div>
        }>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <PortfolioSection />
          <TeamSection />
          <ContactSection />
        </Suspense>
      </main>
      <BottomNav />
    </div>
  );
}

export default App;
