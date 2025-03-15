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
      {/* Full-width Announcement Banner - Hidden on mobile */}
      <motion.div 
        className="fixed w-full z-50 hidden sm:block top-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div 
          className="w-full bg-vivid-purple/30 px-4 py-3 flex justify-center items-center text-sm text-white"
          animate={{ 
            opacity: [0.9, 1, 0.9]
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
          "fixed top-4 sm:top-12 w-full z-40 transition-all duration-300 px-4",
          isScrolled 
            ? "py-2" 
            : "py-3"
        )}
      >
        <div className="max-w-[80%] mx-auto rounded-full backdrop-blur-xl bg-deep-purple/70 border border-white/10 shadow-lg shadow-vivid-purple/20 flex items-center justify-between px-6 py-2">
          <div className="flex-center">
            <a href="#" className="text-gradient-cosmic font-bold text-xl">StellarDev</a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm text-white/90 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="glass-button bg-vivid-purple/70 hover:bg-vivid-purple/90 border-violet-300/20 text-white">
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
          <nav className="md:hidden absolute top-full mt-2 left-0 right-0 mx-auto w-[80%] bg-deep-purple/90 backdrop-blur-xl border border-white/10 rounded-2xl py-4 shadow-lg shadow-vivid-purple/20">
            <div className="flex flex-col space-y-4 px-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-sm py-2 text-white/90 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="glass-button mt-2 w-full bg-vivid-purple/70 hover:bg-vivid-purple/90 border-violet-300/20 text-white">
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
