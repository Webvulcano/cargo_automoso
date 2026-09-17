import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/content/services";

function CheckIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id={SERVICES.id} className="bg-background py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={SERVICES.eyebrow}
          title={SERVICES.title}
          subtitle={SERVICES.subtitle}
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`flex flex-col rounded-2xl border p-6 ${
                pkg.highlight
                  ? "border-accent bg-primary-dark text-white"
                  : "border-line bg-surface text-foreground"
              }`}
            >
              {pkg.highlight && (
                <span className="mb-3 inline-flex w-fit items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Ajánlott
                </span>
              )}
              <h3
                className={`text-lg font-bold ${
                  pkg.highlight ? "text-white" : "text-primary-dark"
                }`}
              >
                {pkg.name}
              </h3>
              <p
                className={`mt-1 text-2xl font-bold ${
                  pkg.highlight ? "text-white" : "text-primary-dark"
                }`}
              >
                {pkg.price}
              </p>
              <ul className="mt-4 flex-1 space-y-2 text-sm">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckIcon
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        pkg.highlight ? "text-accent" : "text-primary"
                      }`}
                    />
                    <span className={pkg.highlight ? "text-white/90" : "text-muted"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-primary-dark">
            Kiegészítő szolgáltatások
          </h3>
          <div className="mt-6 grid gap-x-8 gap-y-3 md:grid-cols-2">
            {SERVICES.extras.map((extra) => (
              <div
                key={extra.label}
                className="flex items-baseline justify-between gap-4 border-b border-line py-2"
              >
                <span className="text-base text-foreground">
                  {extra.label}
                  {extra.detail && (
                    <span className="text-muted"> ({extra.detail})</span>
                  )}
                </span>
                <span className="shrink-0 font-semibold text-primary-dark">
                  {extra.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-2 rounded-2xl bg-surface px-6 py-5 text-sm text-muted">
          <p>{SERVICES.surchargeNote}</p>
          <p>{SERVICES.cosmeticsNote}</p>
        </div>
      </Container>
    </section>
  );
}
