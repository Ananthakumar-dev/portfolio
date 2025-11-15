import Image from "next/image";
import NavBar from "./_components/NavBar";
import Hero from "./_components/Hero";
import About from "./_components/About";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
    </>
  );
}
