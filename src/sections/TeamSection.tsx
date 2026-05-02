import { Award, BookOpen, TrendingUp, BarChart2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const TEAM = [
  {
    initials: "WT",
    name: "Wahyu Tri Rahmanto",
    role: "Founders/ Senior Advisor",
    bio: "Former Investment Bankers in Bahana Sekuritas. He experienced as a Directors in various stated owned enterprises such as PT Sinergi Investasi Properti (BP Jamsostek Subsidiaries), PT Taspen (Persero) and PT WIKA Realty.",
    icon: TrendingUp,
  },
  {
    initials: "RT",
    name: "Rudolf Tulus Sirait",
    role: "Co-founders/ Lead Partner",
    bio: "Seasoned bankers in PT Bank BNI (Persero), Experienced board of director level in prominent private mining company such as Bomba Group. He also served as member of internal audit commite at Pelindo and Kimia Farma.",
    icon: Award,
  },
  {
    initials: "FA",
    name: "Fajar Ariwinadi",
    role: "Co-founders/ Lead Partner",
    bio: "Former Investment Bankers in Trimegah Sekuritas. He experienced as executive managerial level at various state-owned enterprises such as Perumnas, PT Jakarta River City (WIKA Realty subsidiaries), PT Pengelola Aset (PPA) and public listed company such as PT Urban Jakarta Propertindo Tbk.",
    icon: BarChart2,
  },
  {
    initials: "LS",
    name: "Liberto Siahaan",
    role: "Partner",
    bio: "Starting his career as an engineer, he then switched to roles related to strategy, operation, finance, data science, and analytics for Green Energy Investment. Currently, he also serves as Associate Partner for a renewable energy services firm.",
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
            <h3 className="text-xl font-bold text-[#7A0C0C] mb-3">Why Arvispro?</h3>
            <p className="text-gray-700">
              Engaged, ethical and empathetic. At Arvispro, we go beyond the standard, driven by results and dedicated to our clients.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
