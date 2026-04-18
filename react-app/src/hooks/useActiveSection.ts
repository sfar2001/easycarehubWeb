import { useEffect, useState } from "react";

/**
 * Observes a list of section ids and returns the id currently dominant in the
 * viewport — used by the manual TOC to highlight the active section.
 */
export function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    if (!("IntersectionObserver" in window) || ids.length === 0) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((e): e is HTMLElement => e !== null);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);

  return active;
}
