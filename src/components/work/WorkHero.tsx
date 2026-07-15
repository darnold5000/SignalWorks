import { Hero } from "@/components/Hero";
import { WorkDisclaimer } from "./WorkDisclaimer";

export function WorkHero() {
  return (
    <div>
      <Hero
        eyebrow="Our Work"
        title="See what your business could become."
        description="We create modern websites around real business needs—from clearer services and easier scheduling to payments, customer portals, and tools that can grow with the company."
        descriptionSecondary="Explore each website live to experience the design, navigation, and customer journey."
        size="default"
      />
      <div className="mx-auto max-w-6xl px-6 pb-12 -mt-4 lg:px-8 lg:pb-16 lg:-mt-8">
        <WorkDisclaimer className="max-w-2xl" />
      </div>
    </div>
  );
}
