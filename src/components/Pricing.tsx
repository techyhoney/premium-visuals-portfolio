
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const pricingPlans = [
  {
    title: "Startup",
    description: "Perfect for early-stage startups and small businesses.",
    price: "$5,000+",
    features: [
      "Custom web design",
      "Responsive development",
      "Basic SEO setup",
      "1 month of support",
      "Up to 5 pages"
    ],
    popular: false
  },
  {
    title: "Business",
    description: "For growing businesses with more complex requirements.",
    price: "$12,000+",
    features: [
      "Premium UI/UX design",
      "Responsive development",
      "E-commerce integration",
      "Advanced SEO setup",
      "3 months of support",
      "Up to 15 pages",
      "Content management system"
    ],
    popular: true
  },
  {
    title: "Enterprise",
    description: "Comprehensive solutions for large-scale projects.",
    price: "Custom",
    features: [
      "Custom application development",
      "Advanced integration options",
      "Dedicated project manager",
      "Performance optimization",
      "6 months of support",
      "Unlimited pages",
      "Custom functionality",
      "User testing & research"
    ],
    popular: false
  }
];

const Pricing = () => {
  const [showAnnual, setShowAnnual] = useState(false);
  
  return (
    <section id="pricing" className="section-spacing relative overflow-hidden">
      <div className="max-container">
        <div className="text-center mb-16">
          <span className="text-sm text-accent">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Investment Plans</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Choose a pricing plan that fits your needs. We offer flexible options for businesses of all sizes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={cn(
                "glass-card rounded-xl p-8 relative transition-all duration-300 hover:translate-y-[-5px]",
                plan.popular ? "border-accent/30" : "border-white/10"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-accent text-white py-1 px-3 rounded-full text-xs">
                  Popular
                </div>
              )}
              
              <h3 className="text-xl font-semibold">{plan.title}</h3>
              <p className="text-muted-foreground mt-2 h-12">
                {plan.description}
              </p>
              
              <div className="mt-6 mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground"> / project</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="mr-3 mt-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-accent/20 text-accent">
                      <Check size={12} />
                    </span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className={cn(
                "w-full",
                plan.popular ? "bg-accent text-white hover:bg-accent/90" : "glass-button"
              )}>
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Need a custom solution? <a href="#contact" className="text-primary hover:underline">Contact us</a> for a personalized quote.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
