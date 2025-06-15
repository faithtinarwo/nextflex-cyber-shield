
import CaseStudyCard from "@/components/CaseStudyCard";

const caseStudies = [
  {
    client: "Global Finance",
    title: "Strengthening Defenses for a Financial Giant",
    description: "A comprehensive security overhaul that reduced incident response time by 90% and thwarted multiple advanced persistent threats.",
    link: "#",
  },
  {
    client: "Tech Innovators",
    title: "Securing Cloud Infrastructure for a SaaS Leader",
    description: "Implemented a multi-layered cloud security posture management solution, achieving 99.9% compliance with industry benchmarks.",
    link: "#",
  },
  {
    client: "Retail Giant",
    title: "PCI-DSS Compliance and Threat Mitigation",
    description: "Guided a major retailer through the complexities of PCI-DSS 4.0, securing their payment systems and protecting millions of customer records.",
    link: "#",
  },
];

const CaseStudies = () => {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Case Studies</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Discover how we've helped leading companies overcome their most pressing cybersecurity challenges and achieve peace of mind.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={study.title} style={{ animationDelay: `${index * 150}ms` }}>
              <CaseStudyCard {...study} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
