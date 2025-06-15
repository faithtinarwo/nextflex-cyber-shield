
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudiesTeaser = () => {
  return (
    <section id="case-studies-teaser" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Real Results, Proven Expertise</h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          Don't just take our word for it. Explore our case studies to see how we tackle complex security challenges and deliver measurable results for businesses like yours.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link to="/case-studies">
              Explore Our Case Studies
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesTeaser;
