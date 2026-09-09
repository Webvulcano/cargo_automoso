"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { GALLERY } from "@/content/gallery";

export default function Gallery() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={GALLERY.id}
      ref={sectionRef}
      className="bg-background py-16 md:py-24"
    >
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
              <BeforeAfterSlider
                key={item.before.alt}
                before={item.before}
                after={item.after}
                aspect={isLarge ? "16/9" : "1/1"}
                sizes="(min-width: 768px) 25vw, 50vw"
                className={isLarge ? "col-span-2" : ""}
                loop={false}
                play={inView}
                sequenceIndex={index}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
