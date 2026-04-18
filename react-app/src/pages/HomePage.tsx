import { Hero } from "./home/Hero";
import { TrustBar } from "./home/TrustBar";
import { Features } from "./home/Features";
import { HowItWorks } from "./home/HowItWorks";
import { Stats } from "./home/Stats";
import { CtaBand } from "./home/CtaBand";

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Features />
      <HowItWorks />
      <Stats />
      <CtaBand />
    </>
  );
}
