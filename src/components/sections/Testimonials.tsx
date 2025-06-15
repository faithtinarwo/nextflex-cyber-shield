
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "NextFlex's expertise in penetration testing is unmatched. They identified critical vulnerabilities we didn't know we had and helped us secure our systems.",
    name: "John Doe",
    title: "CIO, Tech Corp",
  },
  {
    quote: "The cyber security awareness training was a game-changer for our team. It was engaging, informative, and has tangibly improved our security culture.",
    name: "Jane Smith",
    title: "HR Director, Finance Solutions",
  },
  {
    quote: "In a crisis, you want NextFlex on your side. Their digital forensics team was professional, swift, and crucial in our incident response.",
    name: "Sam Wilson",
    title: "Head of IT, Global Logistics",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
            Real stories from businesses we've helped protect.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <CardContent className="p-8 flex flex-col flex-grow">
                <div className="flex text-brand-gold mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="h-5 w-5" />)}
                </div>
                <p className="text-gray-600 mb-6 flex-grow">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-brand-blue">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
