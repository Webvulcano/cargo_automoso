import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import { FAQ } from "@/content/faq";

export default function Faq() {
  return (
    <section id={FAQ.id} className="bg-background py-16 md:py-24">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow={FAQ.eyebrow}
          title={FAQ.title}
          subtitle={FAQ.subtitle}
        />

        <div className="mt-10">
          <Accordion
            items={FAQ.items}
            defaultOpenIndex={FAQ.defaultOpenIndex}
            idPrefix="faq"
          />
        </div>
      </Container>
    </section>
  );
}
