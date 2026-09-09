import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { HERO } from "@/content/hero";

export default function Hero() {
  return (
    <section id="top" className="bg-surface">
      <Container className="grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary-dark md:text-5xl">
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
        />
      </Container>
    </section>
  );
}
