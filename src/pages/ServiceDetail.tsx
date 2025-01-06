import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "@/components/Services";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return null;
  }

  const getBackgroundStyle = (slug: string) => {
    switch (slug) {
      case "ai-chatbots":
        return {
          background: `
            linear-gradient(45deg, 
              rgba(34, 31, 38, 0.95), 
              rgba(155, 135, 245, 0.85)
            ),
            radial-gradient(circle at 50% 50%, 
              rgba(14, 165, 233, 0.4) 0%, 
              rgba(139, 92, 246, 0.4) 50%, 
              rgba(217, 70, 239, 0.4) 100%
            ),
            repeating-linear-gradient(
              45deg,
              rgba(249, 115, 22, 0.1) 0px,
              rgba(249, 115, 22, 0.1) 2px,
              transparent 2px,
              transparent 10px
            )
          `,
          backgroundBlendMode: "overlay, screen, normal",
          position: "relative",
          overflow: "hidden",
        } as const;
      case "process-automation":
        return {
          background: `
            linear-gradient(45deg, 
              rgba(15, 23, 42, 0.9), 
              rgba(56, 189, 248, 0.8)
            ),
            radial-gradient(circle at 30% 70%, 
              rgba(56, 189, 248, 0.4) 0%, 
              rgba(14, 165, 233, 0.4) 50%, 
              rgba(3, 105, 161, 0.4) 100%
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(56, 189, 248, 0.1) 0px,
              rgba(56, 189, 248, 0.1) 1px,
              transparent 1px,
              transparent 8px
            )
          `,
          backgroundBlendMode: "overlay, screen, normal",
          position: "relative",
          overflow: "hidden",
        } as const;
      case "machine-learning":
        return {
          background: `
            linear-gradient(45deg, 
              rgba(17, 24, 39, 0.95), 
              rgba(124, 58, 237, 0.85)
            ),
            radial-gradient(circle at 70% 30%, 
              rgba(124, 58, 237, 0.4) 0%, 
              rgba(109, 40, 217, 0.4) 50%, 
              rgba(91, 33, 182, 0.4) 100%
            ),
            repeating-linear-gradient(
              135deg,
              rgba(167, 139, 250, 0.1) 0px,
              rgba(167, 139, 250, 0.1) 2px,
              transparent 2px,
              transparent 10px
            )
          `,
          backgroundBlendMode: "overlay, screen, normal",
          position: "relative",
          overflow: "hidden",
        } as const;
      case "performance-optimization":
        return {
          background: `
            linear-gradient(45deg, 
              rgba(20, 83, 45, 0.95), 
              rgba(34, 197, 94, 0.85)
            ),
            radial-gradient(circle at 40% 60%, 
              rgba(34, 197, 94, 0.4) 0%, 
              rgba(22, 163, 74, 0.4) 50%, 
              rgba(21, 128, 61, 0.4) 100%
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(74, 222, 128, 0.1) 0px,
              rgba(74, 222, 128, 0.1) 2px,
              transparent 2px,
              transparent 10px
            )
          `,
          backgroundBlendMode: "overlay, screen, normal",
          position: "relative",
          overflow: "hidden",
        } as const;
      default:
        return {};
    }
  };

  const benefits = {
    "ai-chatbots": [
      {
        title: "24/7 Customer Support",
        description: "Provide instant responses to customer inquiries around the clock, improving satisfaction and reducing support costs."
      },
      {
        title: "Scalable Operations",
        description: "Handle thousands of conversations simultaneously without compromising quality or response time."
      },
      {
        title: "Data-Driven Insights",
        description: "Gather valuable customer interaction data to improve products and services continuously."
      }
    ],
    "process-automation": [
      {
        title: "Increased Efficiency",
        description: "Eliminate manual tasks and reduce human error in business processes."
      },
      {
        title: "Cost Reduction",
        description: "Significantly lower operational costs through automated workflows."
      },
      {
        title: "Enhanced Productivity",
        description: "Free up employees to focus on high-value strategic tasks."
      }
    ],
    "machine-learning": [
      {
        title: "Predictive Analytics",
        description: "Make data-driven decisions with accurate forecasting and trend analysis."
      },
      {
        title: "Pattern Recognition",
        description: "Identify complex patterns in data that humans might miss."
      },
      {
        title: "Continuous Improvement",
        description: "Models that learn and adapt to new data, becoming more accurate over time."
      }
    ],
    "performance-optimization": [
      {
        title: "Resource Efficiency",
        description: "Optimize resource allocation for maximum ROI."
      },
      {
        title: "System Performance",
        description: "Improve speed and reliability of business systems."
      },
      {
        title: "Cost Optimization",
        description: "Identify and eliminate inefficiencies in processes and operations."
      }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          className="mb-8 hover:bg-primary/10"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card rounded-2xl overflow-hidden mb-12"
        >
          <div
            className="h-64 md:h-96 bg-cover bg-center relative"
            style={getBackgroundStyle(service.slug)}
          >
            {service.slug === "ai-chatbots" && (
              <>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0.5, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-32 h-32 rounded-full border-2 border-white/30"
                  />
                </div>
                <div className="absolute inset-0">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/30 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.7, 0.3],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-foreground/60 mb-8">{service.description}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8">Why Invest in {service.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits[service.slug].map((benefit, index) => (
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/80"
            onClick={() => navigate("/#contact")}
          >
            Get Started <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;
