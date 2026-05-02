import { useEffect } from "react";
import { Sun, Moon, Menu, X, Phone } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { toggleTheme } from "@/store/themeSlice";
import { toggleMenu, setMenuOpen } from "@/store/uiSlice";
import { useScrolled } from "@/hooks/useScrolled";
import { Button } from "@/components/ui/Button";

const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Team", href: "#team" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const dispatch = useAppDispatch();
  const { resolved } = useAppSelector((s) => s.theme);
  const { isMenuOpen, activeSection } = useAppSelector((s) => s.ui);
  const isScrolled = useScrolled();

  // Close menu on Escape
  useEffect(() => {
    if (!isMenuOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") dispatch(setMenuOpen(false));
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isMenuOpen, dispatch]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3" : "bg-transparent py-5"
        }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center transition-transform hover:scale-105" aria-label="PT Arvispro Sinergi Indonesia – Home">
            <img
              src="/Arvispro_Edit.svg"
              alt="Arvispro Logo"
              className={`h-auto object-contain drop-shadow-sm transition-all duration-300 ${isScrolled ? "w-10 md:w-14" : "w-16 md:w-20"
                }`}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#7A0C0C] ${activeSection === item.href.slice(1) ? "text-[#7A0C0C]" : "text-gray-600"
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100"
              onClick={() => dispatch(toggleTheme())}
              aria-label={`Switch to ${resolved === "dark" ? "light" : "dark"} mode`}
            >
              {resolved === "dark" ? (
                <Sun size={18} strokeWidth={2} />
              ) : (
                <Moon size={18} strokeWidth={2} />
              )}
            </button>
            <div className="hidden sm:block">
              <Button href="#contact" variant="primary" size="sm" className="bg-[#7A0C0C] text-white px-4 py-2 rounded-xl text-sm hover:bg-[#6A0A0A] transition">
                <Phone size={14} className="mr-2 inline" />
                Free Consultation
              </Button>
            </div>
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={() => dispatch(toggleMenu())}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 bg-black/20 z-40 backdrop-blur-sm"
            onClick={() => dispatch(setMenuOpen(false))}
            aria-hidden="true"
          />
          <nav
            id="mobile-nav"
            className="fixed top-[72px] left-0 w-full bg-white border-b border-gray-100 shadow-lg z-50 py-4 px-4 flex flex-col gap-4"
            aria-label="Mobile navigation"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-medium text-gray-800 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => dispatch(setMenuOpen(false))}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100 mt-2">
              <Button
                href="#contact"
                variant="primary"
                size="md"
                className="w-full bg-[#7A0C0C] text-white px-6 py-3 rounded-xl flex items-center justify-center"
                onClick={() => dispatch(setMenuOpen(false))}
              >
                <Phone size={16} className="mr-2 inline" />
                Free Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
