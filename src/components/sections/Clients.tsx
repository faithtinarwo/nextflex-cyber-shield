
import { Briefcase } from 'lucide-react';

const clients = [
  "Tech Innovators",
  "Global Finance",
  "Secure Health",
  "Logistics Pro",
  "Retail Giant"
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-brand-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Trusted By Leading Companies</h2>
          <p className="text-lg text-gray-300 mt-2 max-w-2xl mx-auto">
            We are proud to partner with businesses of all sizes to enhance their cyber resilience.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {clients.map((client) => (
            <div key={client} className="flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-brand-gold" />
              <span className="text-xl font-semibold text-gray-200">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
