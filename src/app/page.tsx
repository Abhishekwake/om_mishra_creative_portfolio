import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FloatingMedia from "@/components/FloatingMedia";

export default function Home() {
  return (
    <main className="bg-[#0b0b0b] text-white">
      <Navbar />
      <FloatingMedia />
      <Hero />
      <Services />
      <About />
    </main>
  );
}
