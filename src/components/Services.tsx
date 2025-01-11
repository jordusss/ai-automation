import { Bot, Brain, Gauge, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const services = [
  {
    icon: <Bot className="h-8 w-8" />,
    title: "AI Chatbots",
    description: "Intelligent conversational agents that enhance customer service",
    slug: "ai-chatbots",
    image: "photo-1485827404703-89b55fcc595e",
  },
  {
    icon: <Workflow className="h-8 w-8" />,
    title: "Process Automation",
    description: "Streamline workflows with smart automation solutions",
    slug: "process-automation",
    image: "photo-1488972685288-c3fd157d7c7a",
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Machine Learning",
    description: "Custom ML models for predictive analytics",
    slug: "machine-learning",
    image: "photo-1526374965328-7f61d4dc18c5",
  },
  {
    icon: <Gauge className="h-8 w-8" />,
    title: "Performance Optimization",
    description: "AI-driven insights to improve efficiency",
    slug: "performance-optimization",
    image: "photo-1487058792275-0ad4aaf24ca7",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-purple-600">
            Our Services
          </h1>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Discover how our AI solutions can transform your business operations
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden relative group cursor-pointer"
              onClick={() => navigate(`/services/${service.slug}`)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="glass-card relative p-8 rounded-2xl h-full flex flex-col items-center text-center">
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