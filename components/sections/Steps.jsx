import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { STEPS } from "@/content/steps";

export default function Steps() {
  return (
    <section id={STEPS.id} className="bg-surface py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={STEPS.eyebrow}
          title={STEPS.title}
          subtitle={STEPS.subtitle}
        />

        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {STEPS.items.map((step, index) => (
            <li key={step.title} className="rounded-2xl bg-background p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-primary-dark">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
