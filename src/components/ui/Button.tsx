import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type BaseProps = {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: ReactNode;
  loading?: boolean;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  loading = false,
  href,
  ...rest
}: ButtonProps) {
  
  let variantClass = "";
  switch(variant) {
    case "primary":
      variantClass = "bg-[#7A0C0C] text-white hover:bg-[#6A0A0A] border border-transparent shadow-sm";
      break;
    case "secondary":
      variantClass = "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 shadow-sm";
      break;
    case "outline":
      variantClass = "bg-transparent text-[#7A0C0C] border border-[#7A0C0C] hover:bg-[#7A0C0C]/5";
      break;
    case "ghost":
      variantClass = "bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900";
      break;
  }
  
  let sizeClass = "";
  switch(size) {
    case "sm":
      sizeClass = "px-4 py-2 text-sm";
      break;
    case "md":
      sizeClass = "px-6 py-3 text-base";
      break;
    case "lg":
      sizeClass = "px-8 py-4 text-lg";
      break;
  }

  const baseClass = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#7A0C0C]/50 disabled:opacity-50 disabled:pointer-events-none";

  const cls = [
    baseClass,
    variantClass,
    sizeClass,
    loading ? "opacity-70 cursor-not-allowed" : "",
    className,
  ].filter(Boolean).join(" ");

  if (href !== undefined) {
    return (
      <a
        href={href}
        className={cls}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {loading && <span className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full" aria-hidden="true" />}
        {children}
      </a>
    );
  }

  return (
    <button
      className={cls}
      disabled={loading}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {loading && <span className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full" aria-hidden="true" />}
      {children}
    </button>
  );
}
