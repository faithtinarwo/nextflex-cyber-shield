
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Clients from "@/components/sections/Clients";

const Index = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <Clients />
      <Contact />
    </div>
  );
};

export default Index;
