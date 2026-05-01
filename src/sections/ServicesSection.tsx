import { BarChart3, Target, Users, TrendingUp, DollarSign, Briefcase } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const SERVICES = [
  {
    icon: TrendingUp,
    title: "M&A Advisory",
    description:
      "Expert guidance through complex mergers and acquisitions. We protect corporate value and secure the right strategic partners for your growth.",
    tags: ["Mergers", "Acquisitions", "Due Diligence"],
  },
  {
    icon: DollarSign,
    title: "Fundraising",
    description:
      "Accelerate access to high-quality capital with compelling financial narratives and structured investor engagement strategies.",
    tags: ["Capital Raising", "Investor Relations", "Pitch"],
  },
  {
    icon: BarChart3,
    title: "Financial Advisory",
    description:
      "Comprehensive financial planning, unit economics optimization, and board-ready reporting that sharpens decision-making.",
    tags: ["FP&A", "Valuation", "Strategy"],
  },
  {
    icon: Target,
    title: "Corporate Strategy",
    description:
      "Translating business ambitions into executable growth strategies aligned with market realities and investor expectations.",
    tags: ["Growth", "Market Entry", "Planning"],
  },
  {
    icon: Users,
    title: "Enterprise Risk Management",
    description:
      "Identify, quantify, and mitigate business risks with comprehensive, data-driven frameworks to ensure compliance.",
    tags: ["Risk Assessment", "Governance", "Compliance"],
  },
  {
    icon: Briefcase,
    title: "Restructuring & Turnaround",
    description:
      "Expert guidance through organizational changes, cost optimization, and recovery planning to maximize stakeholder value.",
    tags: ["Restructuring", "Cost Optimization", "Recovery"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Our Services"
            title={
              <>
                Strategic Advisory <span className="text-[#7A0C0C]">Driven by Results</span>
              </>
            }
            description="A focused suite of services designed to take you from uncertainty to decisive, measurable execution."
            align="center"
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 0.06}>
                <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100 hover:shadow-md transition h-full flex flex-col group">
                  <div className="w-12 h-12 rounded-lg bg-[#7A0C0C]/10 text-[#7A0C0C] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={24} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-50">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 border border-gray-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 text-center">
            <a href="#contact" className="inline-flex items-center justify-center w-full sm:w-auto bg-[#7A0C0C] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#6A0A0A] transition shadow-sm hover:shadow-md">
              Discuss Your Needs
            </a>
            <p className="mt-4 text-sm text-gray-500 font-medium">
              Free initial consultation · No commitment
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
