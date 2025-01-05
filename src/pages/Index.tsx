import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Products />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Index;