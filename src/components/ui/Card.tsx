import type { ReactNode, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverable?: boolean;
  glass?: boolean;
}

export function Card({
  children,
  className = "",
  hoverable = true,
  glass = false,
  ...rest
}: CardProps) {
  const baseClass = "bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm transition-all duration-300";
  const hoverClass = hoverable ? "hover:shadow-md hover:-translate-y-1 hover:border-gray-200" : "";
  const glassClass = glass ? "bg-white/80 backdrop-blur-md" : "";

  return (
    <div
      className={[baseClass, hoverClass, glassClass, className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </div>
  );
}
