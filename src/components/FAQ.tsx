
import { useState } from 'react';
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer: "We work with businesses of all sizes, from startups to established enterprises, across various industries including technology, e-commerce, healthcare, finance, and more. Our approach is tailored to meet the specific needs and goals of each client."
  },
  {
    question: "How long does it typically take to complete a project?",
    answer: "Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a custom web application could take 3-6 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements."
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes, we provide ongoing maintenance and support to ensure your digital products continue to function optimally. We offer various support packages that include regular updates, performance monitoring, security patches, and technical assistance."
  },
  {
    question: "How do you handle project management and communication?",
    answer: "We use a transparent project management approach with regular check-ins and updates. You'll have access to our project management tools to track progress, and we schedule weekly meetings to discuss developments, address concerns, and gather feedback."
  },
  {
    question: "What is your pricing structure?",
    answer: "Our pricing is project-based and depends on the scope, complexity, and timeline of your requirements. We provide detailed proposals that break down costs for each phase of the project. For some services, we also offer retainer-based pricing for ongoing work."
  },
  {
    question: "Do you work with clients internationally?",
    answer: "Yes, we work with clients globally. Our team is experienced in collaborating remotely, and we use various tools to ensure smooth communication across different time zones."
  },
  {
    question: "How do you approach the design process?",
    answer: "Our design process begins with understanding your brand, target audience, and business goals. We create wireframes and prototypes for your review before moving to high-fidelity designs. We iterate based on your feedback until we achieve the perfect design that meets your objectives."
  },
  {
    question: "Can you integrate with existing systems and platforms?",
    answer: "Yes, we specialize in integrating with existing systems, whether it's CRMs, ERPs, payment gateways, or custom platforms. Our team has extensive experience working with various APIs and creating custom integrations to ensure seamless data flow between systems."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="section-spacing relative">
      <div className="max-container">
        <div className="text-center mb-16">
          <span className="text-sm text-accent">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and pricing.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={cn(
                "mb-4 glass-card rounded-xl overflow-hidden",
                "transition-all duration-300"
              )}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown 
                  size={20} 
                  className={cn(
                    "transition-transform duration-300",
                    openIndex === index ? "transform rotate-180" : ""
                  )} 
                />
              </button>
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Still have questions? <a href="#contact" className="text-primary hover:underline">Contact us</a> for more information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
