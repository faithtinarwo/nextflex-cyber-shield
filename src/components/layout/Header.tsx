
import { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '/#about', label: 'About' },
    { href: '/#services', label: 'Services' },
    { href: '/#team', label: 'Team' },
    { href: '/#testimonials', label: 'Testimonials' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/#contact', label: 'Contact Us' },
  ];

  const renderLink = (link: { href: string; label: string }, isMobile = false) => {
    const className = `text-white hover:text-brand-gold transition-colors font-medium ${isMobile ? 'text-lg' : ''}`;
    if (link.href.startsWith('/#')) {
      return <a href={link.href} className={className} onClick={() => isMobile && setIsMenuOpen(false)}>{link.label}</a>;
    }
    return <Link to={link.href} className={className} onClick={() => isMobile && setIsMenuOpen(false)}>{link.label}</Link>;
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-blue/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <ShieldCheck className="h-8 w-8 text-brand-gold" />
            <span className="text-2xl font-bold text-white">NextFlex</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.href}>{renderLink(link)}</div>
            ))}
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:bg-white/10">
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-brand-blue pb-4">
          <nav className="flex flex-col items-center gap-4">
             {navLinks.map((link) => (
              <div key={link.href}>{renderLink(link, true)}</div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
