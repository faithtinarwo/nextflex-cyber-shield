
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudyCardProps {
  client: string;
  title: string;
  description: string;
  link: string;
}

const CaseStudyCard = ({ client, title, description, link }: CaseStudyCardProps) => (
  <Card className="flex flex-col text-left animate-fade-in">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>Client: {client}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
    <div className="p-6 pt-0">
        <Button asChild variant="outline">
            <Link to={link}>Read More <ArrowRight className="ml-2" /></Link>
        </Button>
    </div>
  </Card>
);

export default CaseStudyCard;
