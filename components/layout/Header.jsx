"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { BUSINESS } from "@/content/business";
import { NAV_LINKS, HEADER_CTA } from "@/content/header";

export default function Header() {
  // Mobilon (< md) amíg a hero szekción állunk, a fejléc eltűnik — több hely
  // jut a hero tartalmának. Asztali nézetben mindig látszik.
  //
  // `fixed` (nem `sticky`) + `translateY` csúsztatás: a fixed elem sosem
  // vesz részt a normál flow-ban, úgyhogy a meg-/eltűnése SOHA nem tolja el
  // az alatta lévő szekciókat (ellentétben egy magasság-animációval, ami
  // egy flow-ban lévő elemen reflow-t okozna minden keretben). Md-től
  // visszavált `sticky`-re — onnantól ugyanúgy viselkedik, mint korábban.
  //
  // Az alapállapot (mielőtt a JS lefutna) CSS-sel van megoldva (mobilon
  // eleve `-translate-y-full`, md-től `md:translate-y-0` felülírja), mert a
  // useEffect csak a böngésző render UTÁN fut le, így egy state-alapú
  // megoldás a szerver-render pillanatában (mindig `false` induló érték)
  // mindig felvillantaná a fejlécet mobilon, mielőtt eltűnne.
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("top");
    if (!heroEl) return;

    const update = () => setPastHero(window.scrollY >= heroEl.offsetHeight);

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-line bg-background/95 backdrop-blur transition-transform duration-300 ease-in-out md:sticky md:translate-y-0 ${
        pastHero ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Container className="flex min-h-20 items-center justify-between gap-3 sm:gap-4">
        <a href="#top" className="flex min-w-0 shrink-0 items-center gap-2">
          <img
            src="/images/logo-black.png"
            alt={BUSINESS.brand}
            className="h-10 w-auto sm:h-12"
          />
          <img
            src="/images/black-title.png"
            alt=""
            aria-hidden="true"
            className="h-8 w-auto sm:h-10"
          />
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-base font-medium text-foreground hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          href={HEADER_CTA.href}
          variant="accent"
          className="shrink-0 px-3 py-2 text-sm whitespace-nowrap sm:px-6 sm:py-3 sm:text-base"
        >
          {HEADER_CTA.label}
        </Button>
      </Container>
    </header>
  );
}
