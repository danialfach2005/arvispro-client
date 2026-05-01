import { useRef, useEffect, useState, type ReactNode, type CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
  className?: string;
  style?: CSSProperties;
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  style,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  let dirClass = "";
  if (!visible) {
    switch (direction) {
      case "up": dirClass = "translate-y-8 opacity-0"; break;
      case "left": dirClass = "translate-x-8 opacity-0"; break;
      case "right": dirClass = "-translate-x-8 opacity-0"; break;
      case "scale": dirClass = "scale-95 opacity-0"; break;
    }
  } else {
    dirClass = "translate-y-0 translate-x-0 scale-100 opacity-100";
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${dirClass} ${className}`}
      style={{ transitionDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function Stagger({ children, className = "", staggerDelay = 0.08 }: StaggerProps) {
  return (
    <div className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <Reveal key={i} delay={i * staggerDelay}>
              {child}
            </Reveal>
          ))
        : children}
    </div>
  );
}
