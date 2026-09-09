import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageSlot from "@/components/ui/ImageSlot";
import { GALLERY } from "@/content/gallery";

export default function Gallery() {
  return (
    <section id={GALLERY.id} className="bg-background py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={GALLERY.eyebrow}
          title={GALLERY.title}
          subtitle={GALLERY.subtitle}
        />

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {GALLERY.items.map((item, index) => {
            const isLarge = index >= 4;
            return (
              <ImageSlot
                key={item.alt}
                alt={item.alt}
                aspect={isLarge ? "16/9" : "1/1"}
                sizes="(min-width: 768px) 25vw, 50vw"
                className={isLarge ? "col-span-2" : ""}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
