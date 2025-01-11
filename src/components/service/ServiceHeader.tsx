import { motion } from "framer-motion";
import { getBackgroundStyle } from "@/utils/serviceStyles";
import { Button } from "@/components/ui/button";
import { serviceBenefits } from "@/data/serviceBenefits";

interface ServiceHeaderProps {
  slug: string;
}

const ServiceHeader = ({ slug }: ServiceHeaderProps) => {
  const service = serviceBenefits[slug];

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={getBackgroundStyle(slug)}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-4"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400"
          >
            {service.subtitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-foreground/80 mb-8"
          >
            {service.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/80"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Now
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceHeader;