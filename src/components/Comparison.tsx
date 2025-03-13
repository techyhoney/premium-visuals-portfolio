
import { Check, X, Code, Palette, ShoppingCart, BrainCircuit, Laptop, Gauge, ScreenShare, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const comparisonData = {
  categories: [
    {
      name: "Expertise",
      icon: <Code className="w-5 h-5 text-cosmic-amber" />,
      features: [
        {
          name: "Custom Development",
          icon: <Code className="w-4 h-4 text-white/80" />
        },
        {
          name: "No-Code Solutions",
          icon: <Laptop className="w-4 h-4 text-white/80" />
        },
        {
          name: "Shopify Development",
          icon: <ShoppingCart className="w-4 h-4 text-white/80" />
        },
        {
          name: "AI Integration",
          icon: <BrainCircuit className="w-4 h-4 text-white/80" />
        },
        {
          name: "UI/UX Design",
          icon: <Palette className="w-4 h-4 text-white/80" />
        }
      ]
    },
    {
      name: "Quality",
      icon: <Gauge className="w-5 h-5 text-vivid-purple" />,
      features: [
        {
          name: "Premium Design",
          icon: <Palette className="w-4 h-4 text-white/80" />
        },
        {
          name: "Exceptional UX",
          icon: <ScreenShare className="w-4 h-4 text-white/80" />
        },
        {
          name: "Fast Performance",
          icon: <Gauge className="w-4 h-4 text-white/80" />
        },
        {
          name: "Responsive Interfaces",
          icon: <Laptop className="w-4 h-4 text-white/80" />
        },
        {
          name: "SEO Optimization",
          icon: <Search className="w-4 h-4 text-white/80" />
        }
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
      }
    }
  ]
};

const Comparison = () => {
  return (
    <section id="why-us" className="section-spacing relative overflow-hidden">
      <div className="max-container">
        <div className="text-center mb-16">
          <motion.span 
            className="text-sm text-cosmic-amber"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mt-2 heading-highlight inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            How We Compare
          </motion.h2>
          <motion.p 
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            See how our premium services stack up against the competition.
          </motion.p>
        </div>
        
        <motion.div 
          className="overflow-x-auto pb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <table className="w-full min-w-[640px]">
            <thead>
              <tr>
                <th className="text-left pb-6 pl-4"></th>
                <th className="pb-6">
                  <div className="glass-card rounded-lg py-3 px-4 text-center border border-white/20 bg-gradient-to-r from-vivid-purple/20 to-cosmic-amber/20">
                    <span className="text-gradient-vibrant font-bold">✨ StellarDev</span>
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
                        "pt-8 pb-4 pl-4 font-medium text-lg flex items-center gap-2",
                        categoryIndex > 0 ? "border-t border-white/5" : ""
                      )}
                    >
                      {category.icon} {category.name}
                    </td>
                  </tr>
                  {category.features.map((feature, featureIndex) => (
                    <tr 
                      key={`feature-${categoryIndex}-${featureIndex}`}
                      className="border-t border-white/5"
                    >
                      <td className="py-4 pl-4 text-muted-foreground flex items-center gap-2">
                        {feature.icon} {feature.name}
                      </td>
                      <td className="py-4 text-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-vivid-purple/30 to-cosmic-amber/30 text-white">
                          <Check size={16} />
                        </span>
                      </td>
                      {comparisonData.competitors.map((competitor, competitorIndex) => (
                        <td key={competitorIndex} className="py-4 text-center">
                          {competitor.features[feature.name] ? (
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
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
