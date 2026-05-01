import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const PORTFOLIO = [
  {
    title: "Capital Raising Strategy",
    tag: "Fundraising",
    description:
      "Investor narratives, data room preparation, and outreach plans that accelerate qualified investor interest.",
    timeline: "4–8 weeks",
    result: "$5M+ raised",
  },
  {
    title: "M&A Valuation Support",
    tag: "M&A",
    description:
      "Defensible valuation framing, scenario analysis, and negotiation support to protect enterprise value.",
    timeline: "6–12 weeks",
    result: "3 successful transactions",
  },
  {
    title: "Growth Strategy Blueprint",
    tag: "Strategy",
    description:
      "Market sizing, unit economics, and milestone planning aligned with capital market expectations.",
    timeline: "4–6 weeks",
    result: "2x revenue growth",
  },
  {
    title: "Board-Ready Reporting",
    tag: "Finance Ops",
    description:
      "KPI design and executive reporting that turn raw metrics into clarity and decision velocity.",
    timeline: "2–4 weeks",
    result: "30% higher efficiency",
  },
  {
    title: "Debt Structure Optimization",
    tag: "Capital",
    description:
      "Refinancing analysis and covenant planning for lower cost of capital and runway protection.",
    timeline: "6–10 weeks",
    result: "15% cost savings",
  },
  {
    title: "Transaction Readiness",
    tag: "Execution",
    description:
      "Timeline, workflow, and stakeholder alignment to keep diligence and closing on schedule.",
    timeline: "8–16 weeks",
    result: "100% on-time delivery",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Portfolio / Case Studies"
            title={
              <>
                Impactful <span className="text-[#7A0C0C]">Outcomes</span>
              </>
            }
            description="A snapshot of our strategic engagements — tailored for every client to deliver measurable success."
            align="center"
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {PORTFOLIO.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.055}>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 hover:shadow-md transition h-full flex flex-col group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7A0C0C] to-red-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">{item.title}</h3>
                  <span className="shrink-0 inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-[#7A0C0C]/10 text-[#7A0C0C]">
                    {item.tag}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">{item.description}</p>
                
                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Timeline</span>
                      <span className="block text-sm font-semibold text-gray-700">{item.timeline}</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Result</span>
                      <span className="block text-base font-bold text-[#7A0C0C]">{item.result}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
