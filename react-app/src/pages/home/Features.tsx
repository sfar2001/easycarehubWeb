import type { ReactNode } from "react";
import { useI18n } from "../../i18n";
import { useReveal } from "../../hooks/useReveal";
import {
  IconRadar, IconGrid, IconBell, IconShield, IconDoc, IconGlobe,
} from "../../components/Icon";

function FeatureCard({ icon, title, body, delay = 0 }: {
  icon: ReactNode; title: string; body: string; delay?: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="feature reveal" style={{ transitionDelay: `${delay}ms` }}>
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export function Features() {
  const { t } = useI18n();
  const items = [
    { icon: <IconRadar />,  title: t.features.f1title, body: t.features.f1body },
    { icon: <IconGrid />,   title: t.features.f2title, body: t.features.f2body },
    { icon: <IconBell />,   title: t.features.f3title, body: t.features.f3body },
    { icon: <IconShield />, title: t.features.f4title, body: t.features.f4body },
    { icon: <IconDoc />,    title: t.features.f5title, body: t.features.f5body },
    { icon: <IconGlobe />,  title: t.features.f6title, body: t.features.f6body },
  ];

  return (
    <section className="section features" id="features">
      <div className="container">
        <div style={{ maxWidth: 680 }}>
          <span className="eyebrow">{t.features.eyebrow}</span>
          <h2>{t.features.title}</h2>
          <p className="lead">{t.features.sub}</p>
        </div>

        <div className="features-grid">
          {items.map((f, i) => (
            <FeatureCard key={f.title} {...f} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}
