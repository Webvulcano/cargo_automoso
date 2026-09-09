import Container from "@/components/ui/Container";
import { BUSINESS } from "@/content/business";
import { FOOTER } from "@/content/footer";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/80">
      <Container className="flex flex-col items-center gap-2 py-8 text-center text-sm">
        <p className="text-base font-semibold text-white">{BUSINESS.brand}</p>
        <p>
          {BUSINESS.address.full} · {BUSINESS.phone.display}
        </p>
        <p>{FOOTER.rightsLine}</p>
      </Container>
    </footer>
  );
}
