"use client";

import { useEffect, useRef, useState } from "react";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type RevealOwnProps = {
  as?: ElementType;
  delay?: boolean;
  children?: ReactNode;
};

type RevealProps<T extends ElementType> = RevealOwnProps &
  Omit<ComponentPropsWithoutRef<T>, keyof RevealOwnProps>;

export function Reveal<T extends ElementType = "div">({
  as,
  delay,
  className,
  ...props
}: RevealProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = ["reveal", delay && "reveal-delay", visible && "visible", className]
    .filter(Boolean)
    .join(" ");

  return <Tag ref={ref} className={classes} {...props} />;
}
