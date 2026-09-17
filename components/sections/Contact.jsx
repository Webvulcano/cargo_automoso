import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { CONTACT } from "@/content/contact";

function StarIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 7.1-1.01L12 2z" />
    </svg>
  );
}

function ClockIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function UsersIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ArrowRightIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

const BADGE_ICONS = { star: StarIcon, clock: ClockIcon, users: UsersIcon };

export default function Contact() {
  return (
    <section id={CONTACT.id} className="bg-surface pt-16 pb-10 md:py-24">
      <Container>
        <div className="rounded-3xl bg-primary-dark px-6 py-12 text-center md:px-16 md:py-20">
          <div className="flex items-center justify-center gap-4">
            <img
              src="/images/logo-white.png"
              alt=""
              aria-hidden="true"
              className="h-12 w-auto md:h-14"
            />
            <img
              src="/images/white-title.png"
              alt=""
              aria-hidden="true"
              className="h-3 w-auto md:h-14"
            />
          </div>
          <h2 className="mt-6 text-2xl font-bold text-white md:text-4xl">
            {CONTACT.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            {CONTACT.subtitle}
          </p>

          <div className="mt-8 flex justify-center">
            <Button href={CONTACT.cta.href} variant="accent">
              {CONTACT.cta.label}
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/60">
            {CONTACT.badges.map((badge) => {
              const Icon = BADGE_ICONS[badge.icon];
              return (
                <span key={badge.label} className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {badge.label}
                </span>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
