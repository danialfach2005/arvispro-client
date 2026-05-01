import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const STATS = [
  { value: "2018", label: "Tahun Berdiri" },
  { value: "50+", label: "Klien Aktif" },
  { value: "12+", label: "Sektor Industri" },
  { value: "100%", label: "Komitmen Hasil" },
];

const TRUST_BADGES = [
  { icon: TrendingUp, label: "M&A Advisory" },
  { icon: Shield, label: "Risk Management" },
  { icon: Users, label: "Corporate Strategy" },
];

function StatItem({ value, label, highlight = false }: { value: string; label: string; highlight?: boolean }) {
  return (
    <div className="space-y-1">
      <h3 className={`text-3xl font-bold ${highlight ? 'text-[#7A0C0C]' : 'text-gray-900'}`}>
        {value}
      </h3>
      <p className="text-gray-600 text-sm font-medium">{label}</p>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center bg-[#FAFAFA] py-24 overflow-hidden"
      aria-label="Home – PT Arvispro Sinergi Indonesia"
    >
      {/* Abstract Background Element for Corporate Vibe */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-100 to-transparent opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <Reveal>
              <p className="text-[#7A0C0C] font-semibold tracking-wider text-sm uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7A0C0C]" aria-hidden="true" />
                Trusted Since 2018
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
                Synergy through <span className="text-[#7A0C0C]">excellence</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
                PT Arvispro Sinergi Indonesia is a premier management and financial consulting firm. We think deeply, act decisively, and deliver measurable results.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="w-full sm:w-auto bg-[#7A0C0C] text-white px-6 py-3 rounded-xl flex items-center justify-center hover:bg-[#6A0A0A] transition">
                  Get Consultation
                  <ArrowRight size={18} className="ml-2 inline" />
                </a>
                <a href="#services" className="w-full sm:w-auto bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-xl flex items-center justify-center hover:bg-gray-50 transition">
                  Our Services
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-3 pt-4">
                {TRUST_BADGES.map(({ icon: Icon, label }) => (
                  <span key={label} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 bg-white border border-gray-200 px-3 py-2 rounded-md shadow-sm">
                    <Icon size={16} className="text-[#7A0C0C]" />
                    {label}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: Stats card */}
          <Reveal delay={0.08} direction="left" className="w-full">
            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-100 hover:shadow-md transition">
              <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                <span className="text-sm font-semibold text-[#7A0C0C] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#7A0C0C] animate-pulse"></span>
                  Live Impact
                </span>
                <span className="text-xs text-gray-500 font-mono">2024 — 2025</span>
              </div>

              <div className="grid grid-cols-2 gap-6 sm:gap-8 mb-8">
                {STATS.map((stat) => (
                  <StatItem 
                    key={stat.label} 
                    value={stat.value} 
                    label={stat.label} 
                    highlight={stat.value === "100%"} 
                  />
                ))}
              </div>

              <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Our Vision</p>
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  To be the most trusted business and financial solutions firm.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
