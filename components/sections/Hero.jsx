import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { HERO } from "@/content/hero";

export default function Hero() {
  return (
    <section id="top" className="bg-surface">
      <Container className="grid gap-8 py-10 md:grid-cols-2 md:items-center md:gap-10 md:py-24">
        <div className="order-last md:order-none">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-primary-dark sm:text-3xl md:text-5xl">
            {HERO.headline}
          </h1>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
            {HERO.subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="accent" href={HERO.primaryCta.href}>
              {HERO.primaryCta.label}
            </Button>
            <Button variant="outline" href={HERO.secondaryCta.href}>
              {HERO.secondaryCta.label}
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-primary-dark">
            {HERO.trustBadges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
        </div>

        <BeforeAfterSlider
          before={HERO.beforeAfter.before}
          after={HERO.beforeAfter.after}
          aspect="4/3"
          className="order-first md:order-none"
        />
      </Container>
    </section>
  );
}
