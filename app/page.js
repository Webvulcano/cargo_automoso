import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Gallery from "@/components/sections/Gallery";
import Services from "@/components/sections/Services";
import Steps from "@/components/sections/Steps";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import WaveDivider from "@/components/ui/WaveDivider";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <WaveDivider bgClassName="bg-surface" fillClassName="fill-background" />
        <Gallery />
        <Services />
        <WaveDivider bgClassName="bg-background" fillClassName="fill-surface" flip />
        <Steps />
        <WaveDivider bgClassName="bg-surface" fillClassName="fill-background" />
        <Faq />
        <WaveDivider
          bgClassName="bg-background"
          fillClassName="fill-surface"
          flip
          animate
        />
        <Contact />
        <WaveDivider
          bgClassName="bg-surface"
          fillClassName="fill-primary-dark"
          animate
        />
      </main>
      <Footer />
    </>
  );
}
