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
    icon: <Bot className="h-8 w-8" />,
    title: "AI Agents",
    description: "Autonomous AI agents that perform complex tasks and decision-making",
    slug: "ai-agents",
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
              className="rounded-2xl overflow-hidden relative group cursor-pointer"
              onClick={() => navigate(`/services/${service.slug}`)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="glass-card relative p-8 rounded-2xl h-full flex flex-col items-center text-center">
                <div className="mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:text-primary relative z-10">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300 relative z-10">
                  {service.title}
                </h3>
                <p className="text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300 relative z-10">
                  {service.description}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 to-purple-600/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;