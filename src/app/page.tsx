import Contact from "./componentes/Contact";
import Experience from "./componentes/Experience";
import Hero from "./componentes/Hero";
import Navbar from "./componentes/Navbar";
import Portfolio from "./componentes/Portfolio";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-bgGradientStart via-bgGradientMidStart via-bgGradientMiddle via-bgGradientMidEnd to-bgGradientEnd min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}
