import { useEffect, useRef } from "react";

/**
 * Attach to any element to fade + slide it in when it enters the viewport.
 * Adds `is-visible` once; reads `.reveal` base styles from index.css.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.classList.add("is-visible");
          obs.unobserve(el);
        }
      });
    }, options);
    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return ref;
}
