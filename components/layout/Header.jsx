import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { BUSINESS } from "@/content/business";
import { NAV_LINKS, HEADER_CTA } from "@/content/header";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-4">
        <a href="#top" className="text-xl font-bold text-primary-dark">
          {BUSINESS.brand}
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

        <Button href={HEADER_CTA.href} variant="accent" className="px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base">
          {HEADER_CTA.label}
        </Button>
      </Container>
    </header>
  );
}
