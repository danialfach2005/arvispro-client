import React, { Suspense, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { useAppSelector } from "@/hooks/useRedux";

const HeroSection = React.lazy(() => import("@/sections/HeroSection").then(m => ({ default: m.HeroSection })));
const AboutSection = React.lazy(() => import("@/sections/AboutSection").then(m => ({ default: m.AboutSection })));
const ServicesSection = React.lazy(() => import("@/sections/ServicesSection").then(m => ({ default: m.ServicesSection })));
const PortfolioSection = React.lazy(() => import("@/sections/PortfolioSection").then(m => ({ default: m.PortfolioSection })));
const TeamSection = React.lazy(() => import("@/sections/TeamSection").then(m => ({ default: m.TeamSection })));
const ContactSection = React.lazy(() => import("@/sections/ContactSection").then(m => ({ default: m.ContactSection })));

function App() {
  const { resolved } = useAppSelector((s) => s.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", resolved);
  }, [resolved]);

  return (
    <div className="min-h-screen font-sans pb-[76px] lg:pb-0 flex flex-col overflow-x-hidden">
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
