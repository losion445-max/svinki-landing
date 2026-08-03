"use client";

import { useEffect, useRef } from "react";

export function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;

    const show = () => {
      el.style.opacity = "1";
      el.style.transform = "none";
    };

    el.style.transition = `opacity 0.75s cubic-bezier(0.22,0.7,0.2,1) ${delay}ms, transform 0.85s cubic-bezier(0.22,0.7,0.2,1) ${delay}ms`;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      show();
      return;
    }

    el.style.opacity = "0";
    el.style.transform = "translateY(22px)";

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show();
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} data-reveal="">
      {children}
    </div>
  );
}
