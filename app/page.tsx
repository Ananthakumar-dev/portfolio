import Image from "next/image";
import NavBar from "./_components/NavBar";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Experience from "./_components/Experience";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Experience />
    </>
  );
}
