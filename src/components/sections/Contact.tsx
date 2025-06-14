
import { MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactDetails = [
    {
      icon: <MapPin className="h-8 w-8 text-brand-gold" />,
      title: "Our Address",
      info: "1st Floor, Building 4, Parc Nicol Office Park 3001 William Nicol Drive, Bryanston, Sandton, 2191",
    },
    {
      icon: <Phone className="h-8 w-8 text-brand-gold" />,
      title: "Call Us",
      info: "+27 10 300 0280",
      href: "tel:+27103000280",
    },
    {
      icon: <Mail className="h-8 w-8 text-brand-gold" />,
      title: "Email Us",
      info: "info@nextflex.co.za",
      href: "mailto:info@nextflex.co.za",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-brand-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
          <p className="text-lg text-gray-300 mt-2">
            Get in touch with our team of experts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactDetails.map((detail) => (
            <Card key={detail.title} className="bg-white/5 border-white/10 text-center">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">{detail.icon}</div>
                <h3 className="text-xl font-bold text-brand-gold mb-2">{detail.title}</h3>
                {detail.href ? (
                  <a href={detail.href} className="text-gray-200 hover:text-white transition-colors">{detail.info}</a>
                ) : (
                  <p className="text-gray-200">{detail.info}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
