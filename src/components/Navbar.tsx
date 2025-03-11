
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Sparkles, TicketPercent } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Announcement Banner */}
      <div className="w-full py-2.5 bg-accent/10 border-b border-white/5 backdrop-blur-sm">
        <motion.div 
          className="flex justify-center items-center text-sm text-white px-4"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <TicketPercent className="h-4 w-4 mr-2 text-accent" />
          <span>✨ Summer Special! 20% off all services until August 31st ✨</span>
          <Sparkles className="h-4 w-4 ml-2 text-accent" />
        </motion.div>
      </div>
      
      <header 
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled 
            ? "py-4 backdrop-blur-lg bg-background/80 border-b border-white/5" 
            : "py-6 bg-transparent"
        )}
        style={{ top: "32px" }} // Offset for the announcement banner
      >
        <div className="max-container flex-between">
          <div className="flex-center">
            <a href="#" className="text-gradient font-bold text-xl">StellarDev</a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="glass-button">
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg border-b border-white/5 py-4">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-sm py-2 text-muted-foreground hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="glass-button mt-2 w-full">
                Contact Us
              </Button>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default Navbar;
