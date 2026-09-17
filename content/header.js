import { BUSINESS } from "./business";
import { GALLERY } from "./gallery";
import { SERVICES } from "./services";
import { STEPS } from "./steps";
import { FAQ } from "./faq";
import { CONTACT } from "./contact";

export const NAV_LINKS = [
  { id: GALLERY.id, label: "Munkáink" },
  { id: SERVICES.id, label: "Szolgáltatások" },
  { id: STEPS.id, label: "Hogyan zajlik" },
  { id: FAQ.id, label: "GYIK" },
  { id: CONTACT.id, label: "Kapcsolat" },
];

export const HEADER_CTA = { label: BUSINESS.phone.display, href: BUSINESS.phone.href };
