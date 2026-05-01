import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "info@arvispro.com",
    href: "mailto:info@arvispro.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 21 1234 5678",
    href: "tel:+622112345678",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Jakarta, Indonesia",
    href: "#",
  },
];

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setForm({ name: "", email: "", company: "", message: "" });
  }

  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <Reveal className="space-y-10">
            <SectionHeader
              eyebrow="Contact Us"
              title={
                <>
                  Let's Discuss{" "}
                  <span className="text-[#7A0C0C]">Your Business</span>
                </>
              }
              description="Initial consultations are always free. Our team is ready to help you navigate complex business and financial challenges with confidence."
            />

            <div className="space-y-6">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-center gap-4 group p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition">
                  <div className="w-12 h-12 rounded-lg bg-[#7A0C0C]/10 text-[#7A0C0C] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
                    <p className="text-lg font-semibold text-gray-900">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-100">
              <p className="font-bold text-gray-900 mb-4">Business Hours</p>
              <div className="space-y-2 text-gray-600">
                <p>Monday – Friday: 08:00 – 17:00 WIB</p>
                <p>Saturday: 09:00 – 14:00 WIB (by appointment)</p>
              </div>
            </div>
          </Reveal>

          {/* Right: Form */}
          <Reveal delay={0.08} className="w-full">
            <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 md:p-10">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-green-50 text-green-500 flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                  <p className="text-gray-600 mb-8 max-w-sm">
                    Thank you for reaching out. Our team will respond within 1-2 business days.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-xl hover:bg-gray-50 transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  noValidate
                  aria-label="Formulir kontak"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                        Full Name <span className="text-[#7A0C0C]">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#7A0C0C]/20 focus:border-[#7A0C0C] outline-none transition-all"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                        Email <span className="text-[#7A0C0C]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#7A0C0C]/20 focus:border-[#7A0C0C] outline-none transition-all"
                        placeholder="email@company.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#7A0C0C]/20 focus:border-[#7A0C0C] outline-none transition-all"
                      placeholder="Your Company"
                      value={form.company}
                      onChange={handleChange}
                      autoComplete="organization"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                      Your Needs <span className="text-[#7A0C0C]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#7A0C0C]/20 focus:border-[#7A0C0C] outline-none transition-all min-h-[120px] resize-y"
                      placeholder="Tell us about your business challenge or consulting needs..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-[#7A0C0C] text-white px-6 py-4 rounded-xl font-semibold flex items-center justify-center hover:bg-[#6A0A0A] transition disabled:opacity-70"
                  >
                    <Send size={18} className="mr-2" />
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>

                  <p className="text-center text-xs text-gray-500 font-medium">
                    🔒 Your data is protected. No spam, no selling data.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
