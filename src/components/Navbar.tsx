
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
      {/* Floating Announcement Banner - Hidden on mobile */}
      <motion.div 
        className="fixed w-full py-2.5 z-50 hidden sm:flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ top: '15px' }}
      >
        <motion.div 
          className="bg-vivid-purple/25 backdrop-blur-md border border-white/10 rounded-full px-6 py-1.5 flex justify-center items-center text-sm text-white shadow-lg"
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
          <TicketPercent className="h-4 w-4 mr-2 text-cosmic-amber" />
          <span>🔥 Summer Special! 20% off all services until August 31st</span>
          <Sparkles className="h-4 w-4 ml-2 text-cosmic-amber" />
        </motion.div>
      </motion.div>
      
      <header 
        className={cn(
          "fixed top-0 sm:top-16 w-full z-40 transition-all duration-300 px-4",
          isScrolled 
            ? "py-2" 
            : "py-3"
        )}
      >
        <div className={cn(
          "max-w-7xl mx-auto rounded-full backdrop-blur-xl transition-all duration-300 flex-between px-6",
          isScrolled 
            ? "bg-deep-purple/70 border border-white/10 shadow-lg" 
            : "bg-deep-purple/40 border border-white/5"
        )}>
          <div className="flex-center py-3">
            <a href="#" className="text-gradient-vibrant font-bold text-xl">StellarDev</a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm text-white/80 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-vivid-purple to-cosmic-amber transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Button className="glass-button bg-white/10 hover:bg-white/15 border-violet-300/20 transition-all duration-300 hover:scale-105 rounded-full">
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground py-3" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full mt-2 px-4">
            <div className="flex flex-col space-y-4 bg-deep-purple/90 backdrop-blur-xl border border-white/5 p-4 rounded-xl">
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
              <Button className="glass-button mt-2 w-full bg-gradient-to-r from-vivid-purple/80 to-cosmic-amber/80 hover:from-vivid-purple hover:to-cosmic-amber text-white border-0 rounded-full">
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
