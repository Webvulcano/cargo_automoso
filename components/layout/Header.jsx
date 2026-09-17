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
  // Az alapállapot (mielőtt a JS lefutna) CSS-sel van megoldva — mobilon a
  // `grid-rows-[0fr]`/opacity-0 kombó eleve összecsukva jelenik meg,
  // desktopon a `md:grid-rows-[1fr]` felülírja —, mert a useEffect csak a
  // böngésző render UTÁN fut le, így egy state-alapú megoldás a
  // szerver-render pillanatában (mindig `false` induló érték) mindig
  // felvillantaná a fejlécet mobilon, mielőtt eltűnne.
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
    <header className="sticky top-0 z-50">
      {/* grid-template-rows 0fr↔1fr trükk: ez tudja animálni a "hidden"
          <-> "auto magasság" váltást, amit `display:none` sosem tudna. */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out md:grid-rows-[1fr] ${
          pastHero ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div
          className={`overflow-hidden border-b border-line bg-background/95 backdrop-blur transition-opacity duration-300 md:opacity-100 ${
            pastHero ? "opacity-100" : "opacity-0"
          }`}
        >
          <Container className="flex min-h-20 items-center justify-between gap-3 sm:gap-4">
            <a href="#top" className="flex min-w-0 shrink-0 items-center">
              <img
                src="/images/logo.jpg"
                alt={BUSINESS.brand}
                className="h-12 w-auto sm:h-14"
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
        </div>
      </div>
    </header>
  );
}
