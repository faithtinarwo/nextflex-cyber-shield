
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-brand-blue/80"></div>
      <div className="relative container mx-auto px-4 h-[calc(100vh-80px)] min-h-[500px] flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight animate-fade-in" style={{ animationFillMode: 'backwards', animationDelay: '0.2s' }}>
          Resilient Cyber Security & Digital Forensics
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-8 text-gray-200 animate-fade-in" style={{ animationFillMode: 'backwards', animationDelay: '0.4s' }}>
          NextFlex conducts Internal & External Penetration Testing, Digital Forensics services and more to protect your digital assets.
        </p>
        <div className="animate-fade-in" style={{ animationFillMode: 'backwards', animationDelay: '0.6s' }}>
          <a href="#contact">
            <Button size="lg" className="bg-brand-gold text-brand-blue hover:bg-brand-gold/90 font-bold text-lg px-8 py-6 transition-transform duration-300 hover:scale-105">
              Get In Touch
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
