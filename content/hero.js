import { BUSINESS } from "./business";

export const HERO = {
  headline: "Mosás és kozmetika egy helyen, Budapesten.",
  subheadline:
    "Bevisszük, kimossuk, ragyog — átlagosan 45 perc. A XVIII. kerületben, a Gyöngyvirág utcában várjuk.",
  primaryCta: { label: "Hívjon most", href: BUSINESS.phone.href },
  secondaryCta: { label: "Útvonaltervezés", href: BUSINESS.mapsUrl },
  trustBadges: ["★★★★★ 5,0/5 értékelés (15 Google-vélemény)", "Budapest XVIII. kerület"],
  beforeAfter: {
    before: { src: "/images/hero-before.png", alt: "Koszos autó mosás előtt" },
    after: { src: "/images/hero-after.jpg", alt: "Ragyogó autó mosás után" },
  },
};
