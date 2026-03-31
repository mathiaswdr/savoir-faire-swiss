import About from "@/components/home/about";
import HeroSection from "@/components/home/hero-section";
import Services from "@/components/home/services";
import ShowWork from "@/components/home/show-work";
import Contact from "@/components/home/contact";
import ServicesBis from "@/components/home/services-bis";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen w-full pt-28">
      <HeroSection />
      <About/>
      <Services/>
      {/* <ServicesBis /> */}
      <ShowWork/>
      <Contact/>
    </main>
  );
}
