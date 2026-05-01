import type { ReactNode, CSSProperties } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: keyof JSX.IntrinsicElements;
}

export function Container({
  children,
  className = "",
  style,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`} style={style}>
      {children}
    </Tag>
  );
}
