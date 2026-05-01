import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  
  return (
    <div className={`mb-12 max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p className="text-[#7A0C0C] font-semibold tracking-wider text-sm uppercase mb-3 flex items-center gap-2" aria-label={`Section: ${eyebrow}`}>
          {align === "left" && <span className="w-2 h-2 rounded-full bg-[#7A0C0C]" aria-hidden="true" />}
          {eyebrow}
          {align === "center" && <span className="w-2 h-2 rounded-full bg-[#7A0C0C] mx-auto hidden" aria-hidden="true" />}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
        {title}
      </h2>
      {description && <p className="text-gray-600 text-lg leading-relaxed">{description}</p>}
    </div>
  );
}
