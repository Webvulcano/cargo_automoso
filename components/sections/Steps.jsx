"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { STEPS } from "@/content/steps";

// Egyezzen a globals.css steps-foam-sweep animation-duration-jével (1.2s).
const STEP_DURATION = 1.2;

export default function Steps() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={STEPS.id}
      ref={sectionRef}
      className="bg-surface py-16 md:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow={STEPS.eyebrow}
          title={STEPS.title}
          subtitle={STEPS.subtitle}
        />

        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {STEPS.items.map((step, index) => (
            <li
              key={step.title}
              className="relative overflow-hidden rounded-2xl bg-background p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-primary-dark">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted">
                {step.description}
              </p>

              <span
                aria-hidden="true"
                className={`steps-foam-band pointer-events-none absolute inset-y-0 left-0 w-3/5 ${inView ? "steps-foam-play" : ""}`}
                style={
                  inView
                    ? { animationDelay: `${index * STEP_DURATION}s` }
                    : undefined
                }
              />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
