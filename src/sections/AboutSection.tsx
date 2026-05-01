import { CheckCircle2, Eye, Heart } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const VALUES = [
  {
    icon: Eye,
    title: "Rigorous Analysis",
    desc: "We do not take shortcuts. Every recommendation is backed by deep analysis and comprehensive understanding of the business context.",
  },
  {
    icon: CheckCircle2,
    title: "Decisive Action",
    desc: "The market does not wait. Our team moves with speed and precision to ensure opportunities are captured effectively.",
  },
  {
    icon: Heart,
    title: "Delivering Results",
    desc: "Client success is our success. We measure ourselves by the tangible impact we deliver, not by the reports we produce.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Company story */}
          <Reveal className="space-y-6">
            <p className="text-[#7A0C0C] font-semibold tracking-wider text-sm uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7A0C0C]" aria-hidden="true" />
              About Arvispro
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              Synergizing Clients Towards{" "}
              <span className="text-[#7A0C0C]">Optimal Performance</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              PT Arvispro Sinergi Indonesia is a premier management and financial consulting firm known for its experienced team and exceptional service across multiple industries.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded in 2018, Arvispro continually strives to synergize with clients to achieve optimal performance and meet diverse business needs. We believe strong partnerships are built on trust, transparency, and a relentless commitment to results.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-sm font-medium text-gray-700">
                <CheckCircle2 size={16} className="text-[#7A0C0C]" /> Established 2018
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-sm font-medium text-gray-700">
                <CheckCircle2 size={16} className="text-[#7A0C0C]" /> Expert Consultants
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-sm font-medium text-gray-700">
                <CheckCircle2 size={16} className="text-[#7A0C0C]" /> Multi-Industry
              </span>
            </div>
          </Reveal>

          {/* Right: Vision + Mission + Values */}
          <div className="space-y-6">
            <Reveal delay={0.05}>
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-md bg-white border border-gray-200 text-sm font-semibold text-gray-700 shadow-sm">
                    Vision
                  </span>
                </div>
                <p className="text-lg md:text-xl text-gray-900 font-medium leading-relaxed">
                  To be the most <strong className="text-[#7A0C0C]">trusted</strong> business and financial solutions firm in Indonesia and beyond.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-[#7A0C0C] text-white rounded-2xl p-6 md:p-8 shadow-md">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-md bg-white/10 text-sm font-semibold text-white border border-white/20">
                    Mission
                  </span>
                </div>
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                  To empower society, enable community development, and elevate businesses to a higher level of success.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="pt-6">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Our Core Values</p>
                <div className="space-y-6">
                  {VALUES.map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-[#7A0C0C]">
                        <Icon size={20} strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-gray-900 mb-1">{title}</p>
                        <p className="text-gray-600 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
