import About from "@/components/home/about";
import HeroSection from "@/components/home/hero-section";
import Services from "@/components/home/services";
import ShowWork from "@/components/home/show-work";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen w-full pt-32">
      <HeroSection />
      <About/>
      <Services/>
      <ShowWork/>
      <Contact/>
    </main>
  );
}
