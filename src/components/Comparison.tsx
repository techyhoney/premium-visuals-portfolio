
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const comparisonData = {
  categories: [
    {
      name: "Expertise",
      features: [
        "Custom Development",
        "No-Code Solutions",
        "Shopify Development",
        "AI Integration",
        "UI/UX Design"
      ]
    },
    {
      name: "Quality",
      features: [
        "Premium Design",
        "Exceptional UX",
        "Fast Performance",
        "Responsive Interfaces",
        "SEO Optimization"
      ]
    },
    {
      name: "Service",
      features: [
        "Dedicated Team",
        "24/7 Support",
        "Transparent Process",
        "Weekly Updates",
        "Post-Launch Support"
      ]
    }
  ],
  competitors: [
    {
      name: "Typical Agency",
      features: {
        "Custom Development": true,
        "No-Code Solutions": false,
        "Shopify Development": true,
        "AI Integration": false,
        "UI/UX Design": true,
        "Premium Design": false,
        "Exceptional UX": false,
        "Fast Performance": false,
        "Responsive Interfaces": true,
        "SEO Optimization": true,
        "Dedicated Team": false,
        "24/7 Support": false,
        "Transparent Process": false,
        "Weekly Updates": true,
        "Post-Launch Support": false,
      }
    },
    {
      name: "Freelancers",
      features: {
        "Custom Development": true,
        "No-Code Solutions": true,
        "Shopify Development": false,
        "AI Integration": false,
        "UI/UX Design": true,
        "Premium Design": false,
        "Exceptional UX": false,
        "Fast Performance": false,
        "Responsive Interfaces": true,
        "SEO Optimization": false,
        "Dedicated Team": false,
        "24/7 Support": false,
        "Transparent Process": true,
        "Weekly Updates": false,
        "Post-Launch Support": false,
      }
    }
  ]
};

const Comparison = () => {
  return (
    <section id="why-us" className="section-spacing relative overflow-hidden">
      <div className="max-container">
        <div className="text-center mb-16">
          <span className="text-sm text-accent">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">How We Compare</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            See how our premium services stack up against the competition.
          </p>
        </div>
        
        <div className="overflow-x-auto pb-6">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr>
                <th className="text-left pb-6 pl-4"></th>
                <th className="pb-6">
                  <div className="glass-card rounded-lg py-3 px-4 text-center">
                    <span className="text-gradient font-bold">StellarDev</span>
                  </div>
                </th>
                {comparisonData.competitors.map((competitor, index) => (
                  <th key={index} className="pb-6 px-2">
                    <div className="bg-muted/30 rounded-lg py-3 px-4 text-center">
                      <span className="text-muted-foreground">{competitor.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonData.categories.map((category, categoryIndex) => (
                <>
                  <tr key={`category-${categoryIndex}`}>
                    <td 
                      colSpan={3} 
                      className={cn(
                        "pt-8 pb-4 pl-4 font-medium text-lg",
                        categoryIndex > 0 ? "border-t border-white/5" : ""
                      )}
                    >
                      {category.name}
                    </td>
                  </tr>
                  {category.features.map((feature, featureIndex) => (
                    <tr 
                      key={`feature-${categoryIndex}-${featureIndex}`}
                      className="border-t border-white/5"
                    >
                      <td className="py-4 pl-4 text-muted-foreground">{feature}</td>
                      <td className="py-4 text-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent/20 text-accent">
                          <Check size={16} />
                        </span>
                      </td>
                      {comparisonData.competitors.map((competitor, competitorIndex) => (
                        <td key={competitorIndex} className="py-4 text-center">
                          {competitor.features[feature] ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-muted-foreground">
                              <Check size={16} />
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-muted-foreground/50">
                              <X size={16} />
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
