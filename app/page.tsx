import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Collection } from "@/components/collection";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Collection />
        <About />
      </main>
      <Footer />
    </>
  );
}
