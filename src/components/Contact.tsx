import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const Contact = () => {
  return (
    <section id="contact" className="section-spacing relative pb-32">
      <div className="max-container">
        <div className="text-center mb-16">
          <span className="text-sm text-accent">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Schedule a Consultation</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals with our premium digital solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2 glass-card rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-medium">hello@oncefor.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <p className="font-medium">+917009493850</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-medium">Bengaluru, KA</p>
                </div>
              </div>
            </div>
            
            {/* <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-muted-foreground mb-6">Follow us on social media</p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div> */}
          </div>
          
          <div className="md:col-span-3 glass-card rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full py-3 px-4 bg-white/5 rounded-lg border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full py-3 px-4 bg-white/5 rounded-lg border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full py-3 px-4 bg-white/5 rounded-lg border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <Button className="bg-accent text-white hover:bg-accent/90 w-full">
                    Send Message <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
              
              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <h3 className="text-xl font-semibold mb-6">Schedule a Call</h3>
                
                <div className="glass-card border border-white/10 rounded-lg p-6 text-center">
                  <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h4 className="text-lg font-medium mb-2">Book a Consultation</h4>
                  <p className="text-muted-foreground mb-6">
                    Schedule a 30-minute discovery call to discuss your project requirements.
                  </p>
                  
                  <Button className="bg-accent text-white hover:bg-accent/90 w-full">
                    Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Availability</h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <p className="text-muted-foreground">Monday - Friday</p>
                      <p>9:00 AM - 6:00 PM</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-muted-foreground">Saturday</p>
                      <p>10:00 AM - 2:00 PM</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-muted-foreground">Sunday</p>
                      <p>Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
