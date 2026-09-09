import { BUSINESS } from "./business";

export const CONTACT = {
  id: "kapcsolat",
  eyebrow: "Kapcsolat",
  title: "Kérdése van? Írjon nekünk",
  subtitle:
    "Töltse ki az űrlapot, és hamarosan válaszolunk — vagy hívjon minket most.",
  visitPanel: {
    heading: "Keressen fel személyesen",
    address: BUSINESS.address.full,
    hours: BUSINESS.hours,
    phone: BUSINESS.phone,
  },
  form: {
    nameLabel: "Név",
    namePlaceholder: "Az Ön neve",
    phoneLabel: "Telefonszám",
    phonePlaceholder: "+36 30 123 4567",
    emailLabel: "E-mail",
    emailPlaceholder: "nev@example.com",
    topicLabel: "Miben segíthetünk?",
    topicOptions: [
      "Kérdésem van a szolgáltatásokról",
      "Havi bérlet igénylése",
      "Árajánlatot kérek céges flottára",
      "Panasz / visszajelzés",
      "Egyéb kérdés",
    ],
    messageLabel: "Üzenet",
    messagePlaceholder: "Írja le, miben segíthetünk…",
    submitLabel: "Üzenet elküldése",
  },
};
