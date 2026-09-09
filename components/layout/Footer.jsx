import Container from "@/components/ui/Container";
import { BUSINESS } from "@/content/business";
import { FOOTER } from "@/content/footer";

const BUBBLES = [
  { left: "6%", size: 6, duration: 6, delay: 0 },
  { left: "14%", size: 10, duration: 8, delay: 1.5 },
  { left: "23%", size: 5, duration: 5, delay: 3 },
  { left: "32%", size: 8, duration: 7, delay: 0.8 },
  { left: "41%", size: 12, duration: 9, delay: 2.2 },
  { left: "50%", size: 6, duration: 6.5, delay: 4 },
  { left: "59%", size: 9, duration: 7.5, delay: 1 },
  { left: "68%", size: 5, duration: 5.5, delay: 3.5 },
  { left: "77%", size: 11, duration: 8.5, delay: 0.4 },
  { left: "86%", size: 7, duration: 6, delay: 2.8 },
  { left: "94%", size: 5, duration: 5, delay: 4.5 },
];

export default function Footer() {
  return (
    <footer className="relative -mt-px bg-primary-dark text-white/80">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-10 bottom-0 overflow-hidden md:-top-16"
      >
        {BUBBLES.map((b, i) => (
          <span
            key={i}
            className="footer-bubble absolute bottom-0 rounded-full bg-white/30"
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10 flex flex-col items-center gap-2 py-8 text-center text-sm">
        <p className="text-base font-semibold text-white">{BUSINESS.brand}</p>
        <p>
          {BUSINESS.address.full} · {BUSINESS.phone.display}
        </p>
        <p>{FOOTER.rightsLine}</p>
      </Container>
    </footer>
  );
}
