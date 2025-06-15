
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Lead Security Analyst",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
    bio: "With over a decade of experience in cybersecurity, Alex specializes in ethical hacking and vulnerability assessment."
  },
  {
    name: "Maria Garcia",
    role: "Digital Forensics Expert",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
    bio: "Maria has a keen eye for detail, uncovering digital evidence to help organizations respond to and recover from cyber incidents."
  },
  {
    name: "Chen Wei",
    role: "Risk Management Consultant",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
    bio: "Chen helps businesses understand and mitigate their technological risks, ensuring compliance and building resilience."
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">Meet Our Experts</h2>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
            The dedicated professionals behind our success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <img src={member.imageUrl} alt={member.name} className="w-full h-56 object-cover" />
              <CardHeader>
                <CardTitle className="text-xl font-bold text-brand-blue">{member.name}</CardTitle>
                <p className="text-base text-brand-gold font-semibold">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
