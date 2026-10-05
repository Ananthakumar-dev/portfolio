import NavBar from "./_components/NavBar";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Experience from "./_components/Experience";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
