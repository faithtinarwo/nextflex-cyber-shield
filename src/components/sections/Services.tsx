
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldAlert, BarChart3, FileCheck, Users } from 'lucide-react';

const services = [
  {
    icon: <ShieldAlert className="h-10 w-10 text-brand-blue" />,
    title: "Cyber Security & Digital Forensics",
    description: "We conduct Internal & External Penetration Testing, Digital Forensics services and more.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-brand-blue" />,
    title: "Risk Management",
    description: "We identify emerging risks, conduct Business Impact Analysis (BIA), Risk Evaluation, Risk Treatments and more.",
  },
  {
    icon: <FileCheck className="h-10 w-10 text-brand-blue" />,
    title: "Internal IT Audit",
    description: "We assess your organisation’s execution of processes against a number of standards and policies.",
  },
  {
    icon: <Users className="h-10 w-10 text-brand-blue" />,
    title: "Cyber Security Training & Awareness",
    description: "NextFlex develops Cyber Security Awareness Programmes for your organisation.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">Our Services</h2>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
            A comprehensive suite of solutions to fortify your organization's security posture.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="items-center">
                <div className="p-4 bg-brand-gold/10 rounded-full mb-4">
                    {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-brand-blue">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 pt-2">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
