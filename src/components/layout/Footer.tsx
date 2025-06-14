
import { ShieldCheck } from 'lucide-react';

const Footer = () => {
  const serviceLinks = [
    { href: "#services", label: "Cyber Security & Digital Forensics" },
    { href: "#services", label: "Risk Management" },
    { href: "#services", label: "Internal IT Audit" },
    { href: "#services", label: "Cyber Security Training & Awareness" },
  ];

  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <ShieldCheck className="h-8 w-8 text-brand-gold" />
              <span className="text-2xl font-bold">NextFlex</span>
            </a>
            <p className="text-sm text-gray-300">
              Specialist cyber security and technology advisory company.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-brand-gold">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-brand-gold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  PoPIA Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
          
           <div>
            <h3 className="font-bold text-lg mb-4 text-brand-gold">Contact</h3>
            <address className="not-italic text-sm text-gray-300 space-y-2">
              <p>1st Floor, Building 4, Parc Nicol Office Park, 3001 William Nicol Drive, Bryanston, Sandton, 2191</p>
              <p><a href="tel:+27103000280" className="hover:text-white">+27 10 300 0280</a></p>
              <p><a href="mailto:info@nextflex.co.za" className="hover:text-white">info@nextflex.co.za</a></p>
            </address>
          </div>

        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} NextFlex. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
