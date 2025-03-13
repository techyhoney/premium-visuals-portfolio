
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
      {/* Sticky Announcement Banner - Hidden on mobile */}
      <motion.div 
        className="fixed w-full py-2.5 bg-vivid-purple/15 border-b border-white/5 backdrop-blur-md z-50 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div 
          className="flex justify-center items-center text-sm text-white px-4"
          animate={{ 
            opacity: [0.8, 1, 0.8],
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <TicketPercent className="h-4 w-4 mr-2 text-accent" />
          <span>🔥 Summer Special! 20% off all services until August 31st</span>
          <Sparkles className="h-4 w-4 ml-2 text-accent" />
        </motion.div>
      </motion.div>
      
      <header 
        className={cn(
          "fixed top-0 sm:top-8 w-full z-40 transition-all duration-300",
          isScrolled 
            ? "py-4 backdrop-blur-xl bg-deep-purple/50 border-b border-white/5" 
            : "py-6 bg-transparent"
        )}
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
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="glass-button bg-white/10 hover:bg-white/15 border-violet-300/20">
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
          <nav className="md:hidden absolute top-full left-0 w-full bg-deep-purple/90 backdrop-blur-xl border-b border-white/5 py-4">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-sm py-2 text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="glass-button mt-2 w-full bg-white/10 hover:bg-white/15 border-violet-300/20">
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
