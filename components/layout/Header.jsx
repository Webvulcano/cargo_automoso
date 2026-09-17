import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { BUSINESS } from "@/content/business";
import { NAV_LINKS, HEADER_CTA } from "@/content/header";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/95 backdrop-blur">
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
