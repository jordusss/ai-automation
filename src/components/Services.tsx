import { Bot, Brain, Gauge, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Bot className="h-8 w-8" />,
    title: "AI Chatbots",
    description: "Intelligent conversational agents that enhance customer service",
  },
  {
    icon: <Workflow className="h-8 w-8" />,
    title: "Process Automation",
    description: "Streamline workflows with smart automation solutions",
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Machine Learning",
    description: "Custom ML models for predictive analytics",
  },
  {
    icon: <Gauge className="h-8 w-8" />,
    title: "Performance Optimization",
    description: "AI-driven insights to improve efficiency",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Discover how our AI solutions can transform your business operations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="glass-card relative p-8 rounded-2xl h-full flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
                <div className="text-primary mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-foreground/60">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;