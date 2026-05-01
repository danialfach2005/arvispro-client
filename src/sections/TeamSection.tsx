import { Award, BookOpen, TrendingUp, BarChart2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const TEAM = [
  {
    initials: "SA",
    name: "Senior Advisor",
    role: "M&A / Corporate Finance",
    bio: "Decades of experience in investment banking and cross-industry strategic advisory transactions.",
    icon: TrendingUp,
  },
  {
    initials: "EL",
    name: "Engagement Lead",
    role: "Fundraising Strategy",
    bio: "Expert in investor narratives, outreach design, and due diligence readiness for growth-stage companies.",
    icon: Award,
  },
  {
    initials: "FP",
    name: "Finance Partner",
    role: "FP&A / Value Creation",
    bio: "Master of KPI systems, unit economics, and board-ready reporting that sharpens strategic decisions.",
    icon: BarChart2,
  },
  {
    initials: "AT",
    name: "Analyst Team",
    role: "Research & Modeling",
    bio: "Deep market intelligence and financial modeling to support high-value strategic decision execution.",
    icon: BookOpen,
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Leadership Team"
            title={
              <>
                Led by Seasoned <span className="text-[#7A0C0C]">Professionals</span>
              </>
            }
            description="Our leadership team brings decades of experience in investment banking, corporate finance, and strategic advisory. You get senior attention, not junior delegation."
            align="center"
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {TEAM.map((member, i) => {
            const Icon = member.icon;
            return (
              <Reveal key={member.name} delay={i * 0.07}>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 hover:shadow-md transition h-full flex flex-col text-center items-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-xl font-bold text-gray-700">
                      {member.initials}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#7A0C0C] text-white flex items-center justify-center border-2 border-white shadow-sm">
                      <Icon size={14} strokeWidth={2} />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-sm font-semibold text-[#7A0C0C]">{member.role}</p>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-16 text-center max-w-2xl mx-auto p-6 bg-[#7A0C0C]/5 rounded-xl border border-[#7A0C0C]/10">
            <p className="text-gray-700">
              <strong className="text-[#7A0C0C]">Our Commitment:</strong> Every client receives direct attention from our senior partners — not junior staff.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
