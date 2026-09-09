import { BUSINESS } from "./business";

export const HERO = {
  headline: "Csillogó autó, mire kihűl a kávéja.",
  subheadline:
    "Bevisszük, kimossuk, ragyog — 45 perc, időpont nélkül. Ön csak parkoljon le, a többit intézzük.",
  primaryCta: { label: "Hívjon most", href: BUSINESS.phone.href },
  secondaryCta: { label: "Útvonaltervezés", href: BUSINESS.mapsUrl },
  trustBadges: [
    "★★★★★ 4,9/5 értékelés",
    "180+ elégedett ügyfél",
    "Időpont nélkül, bármikor",
  ],
  beforeAfter: {
    before: { src: "/images/hero-before.png", alt: "Koszos autó mosás előtt" },
    after: { src: "/images/hero-after.jpg", alt: "Ragyogó autó mosás után" },
  },
};
