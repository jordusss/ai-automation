import { motion } from "framer-motion";
import { Clock, Scale, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Benefit {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface CTA {
  title: string;
  description: string;
}

interface ServiceBenefitsProps {
  benefits: Benefit[];
  cta: CTA;
}

const ServiceBenefits = ({ benefits, cta }: ServiceBenefitsProps) => {
  const navigate = useNavigate();
  
  const benefitsWithIcons = [
    {
      ...benefits[0],
      icon: <Clock className="w-8 h-8" />,
    },
    {
      ...benefits[1],
      icon: <Scale className="w-8 h-8" />,
    },
    {
      ...benefits[2],
      icon: <LineChart className="w-8 h-8" />,
    },
  ];

  const handleGetStarted = () => {
    navigate('/#contact');
  };

  return (
    <div className="py-24 bg-gradient-to-b from-background via-background/95 to-background/90">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Key Benefits
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {benefitsWithIcons.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-card h-full p-8 rounded-2xl transition-all duration-300 hover:translate-y-[-4px]">
                <div className="relative mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="absolute -inset-4 bg-primary/5 rounded-[20px] -z-10 blur-xl group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            {cta.title}
          </h3>
          <p className="text-lg text-foreground/80 mb-8">
            {cta.description}
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/80"
            onClick={handleGetStarted}
          >
            Get Started Now
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceBenefits;