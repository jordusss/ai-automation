import { motion } from "framer-motion";

interface Benefit {
  title: string;
  description: string;
}

interface ServiceBenefitsProps {
  benefits: Benefit[];
}

const ServiceBenefits = ({ benefits }: ServiceBenefitsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="text-3xl font-bold mb-8">Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            className="glass-card p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
            <p className="text-foreground/60">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceBenefits;