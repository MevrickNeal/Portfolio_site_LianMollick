import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const el = ref.current;
    if (el) {
      const targets = el.querySelectorAll(".reveal, .reveal-left, .reveal-right");
      targets.forEach((t) => observer.observe(t));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
