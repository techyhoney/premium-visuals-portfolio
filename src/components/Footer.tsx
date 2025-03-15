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
    <footer className="bg-black/20 border-t border-white/5 py-16 relative overflow-hidden">
      {/* Company name watermark - positioned lower to avoid text overlap */}
      <div className="absolute inset-0 flex items-center justify-center translate-y-[35%] opacity-[0.03] pointer-events-none">
        <span className="text-[20vw] font-bold tracking-tight text-white whitespace-nowrap">
          StellarDev
        </span>
      </div>
      
      <div className="max-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
          <div className="md:col-span-1">
            <a href="#" className="text-gradient font-bold text-2xl">StellarDev</a>
            <p className="text-muted-foreground mt-4 max-w-xs leading-relaxed">
              Premium software agency delivering exceptional digital experiences through custom development, no-code solutions, and AI automation.
            </p>
            
            <div className="flex space-x-4 mt-6">
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 hover:bg-accent/20 transition-all flex items-center justify-center text-muted-foreground hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 hover:bg-accent/20 transition-all flex items-center justify-center text-muted-foreground hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 hover:bg-accent/20 transition-all flex items-center justify-center text-muted-foreground hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 hover:bg-accent/20 transition-all flex items-center justify-center text-muted-foreground hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-5 text-lg">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-muted-foreground hover:text-white transition-colors text-sm inline-block">Custom Web Development</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-white transition-colors text-sm inline-block">No-Code Solutions</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-white transition-colors text-sm inline-block">Shopify Development</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-white transition-colors text-sm inline-block">AI Automation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-5 text-lg">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-muted-foreground hover:text-white transition-colors text-sm inline-block">About</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-white transition-colors text-sm inline-block">Portfolio</a></li>
              <li><a href="#process" className="text-muted-foreground hover:text-white transition-colors text-sm inline-block">Process</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-white transition-colors text-sm inline-block">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-5 text-lg">Contact</h4>
            <ul className="space-y-3">
              <li><a href="#contact" className="text-muted-foreground hover:text-white transition-colors text-sm inline-block">Schedule a Call</a></li>
              <li><a href="mailto:hello@stellardev.com" className="text-muted-foreground hover:text-white transition-colors text-sm inline-block">hello@stellardev.com</a></li>
              <li><a href="tel:+15551234567" className="text-muted-foreground hover:text-white transition-colors text-sm inline-block">+1 (555) 123-4567</a></li>
              <li><span className="text-muted-foreground text-sm">San Francisco, CA</span></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} StellarDev. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors text-sm">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="bg-white/5 hover:bg-white/10 transition-colors rounded-full p-2 ml-4"
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
