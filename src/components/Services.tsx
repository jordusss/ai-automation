import { Bot, Brain, Gauge, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Bot className="h-8 w-8" />,
    title: "AI Chatbots",
    description: "Intelligent conversational agents that enhance customer service",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  },
  {
    icon: <Workflow className="h-8 w-8" />,
    title: "Process Automation",
    description: "Streamline workflows with smart automation solutions",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Machine Learning",
    description: "Custom ML models for predictive analytics",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
  },
  {
    icon: <Gauge className="h-8 w-8" />,
    title: "Performance Optimization",
    description: "AI-driven insights to improve efficiency",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
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
              className="glass-card neon-border p-6 rounded-lg hover:translate-y-[-4px] transition-transform relative group overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
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