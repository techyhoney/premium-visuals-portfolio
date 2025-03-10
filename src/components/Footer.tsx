
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-black/20 border-t border-white/5 py-12">
      <div className="max-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <a href="#" className="text-gradient font-bold text-2xl">StellarDev</a>
            <p className="text-muted-foreground mt-4 max-w-xs">
              Premium software agency delivering exceptional digital experiences through custom development, no-code solutions, and AI automation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-muted-foreground hover:text-white transition-colors">Custom Web Development</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-white transition-colors">No-Code Solutions</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-white transition-colors">Shopify Development</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-white transition-colors">AI Automation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-white transition-colors">About</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#process" className="text-muted-foreground hover:text-white transition-colors">Process</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-muted-foreground hover:text-white transition-colors">Schedule a Call</a></li>
              <li><a href="mailto:hello@stellardev.com" className="text-muted-foreground hover:text-white transition-colors">hello@stellardev.com</a></li>
              <li><a href="tel:+15551234567" className="text-muted-foreground hover:text-white transition-colors">+1 (555) 123-4567</a></li>
              <li><span className="text-muted-foreground">San Francisco, CA</span></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} StellarDev. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors text-sm">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="bg-white/5 hover:bg-white/10 transition-colors rounded-full p-2"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
