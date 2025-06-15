
import { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { toast } from 'sonner';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent!", {
      description: "We'll get back to you shortly.",
    });
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen && (
        <div className="animate-enter origin-bottom-right">
          <Card className="w-80 shadow-2xl bg-white">
            <CardHeader className="bg-brand-blue text-white flex flex-row items-center justify-between p-4 rounded-t-lg">
              <CardTitle className="text-lg font-bold">Chat with us</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20 h-8 w-8">
                <X size={20} />
              </Button>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="p-4 space-y-4">
                <p className="text-sm text-gray-600">
                  Hi! Let us know how we can help and we'll get back to you.
                </p>
                <Input placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
                <Textarea placeholder="Your Message" required />
              </CardContent>
              <CardFooter className="p-4">
                <Button type="submit" className="w-full bg-brand-gold text-brand-blue hover:bg-brand-gold/90 font-bold">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      )}
      
      {!isOpen && (
        <Button 
          size="lg"
          onClick={() => setIsOpen(true)} 
          className="rounded-full w-16 h-16 bg-brand-gold text-brand-blue hover:bg-brand-gold/90 shadow-xl animate-pulse"
        >
          <MessageSquare size={32} />
        </Button>
      )}
    </div>
  );
};

export default ChatWidget;
