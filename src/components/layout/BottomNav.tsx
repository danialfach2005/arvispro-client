import { Home, Briefcase, Folders, Phone, User } from "lucide-react";
import { useAppSelector } from "@/hooks/useRedux";

const NAV_ITEMS = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Services", href: "#services", icon: Briefcase },
  { label: "Portfolio", href: "#portfolio", icon: Folders },
  { label: "Contact", href: "#contact", icon: Phone },
  { label: "Client", href: "#client", icon: User },
];

export function BottomNav() {
  const { activeSection } = useAppSelector((s) => s.ui);

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50 px-2 pb-safe pt-2">
      <div className="max-w-[480px] mx-auto flex justify-between items-center h-[60px]">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.slice(1);
          
          return (
            <a
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
                isActive ? "text-[#7A0C0C]" : "text-gray-500 hover:text-gray-900"
              }`}
              aria-label={item.label}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
