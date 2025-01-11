import { motion } from "framer-motion";
import { getBackgroundStyle } from "@/utils/serviceStyles";

interface ServiceHeaderProps {
  title: string;
  description: string;
  slug: string;
}

const ServiceHeader = ({ title, description, slug }: ServiceHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass-card rounded-2xl overflow-hidden mb-12"
    >
      <div
        className="h-64 md:h-96 bg-cover bg-center relative"
        style={getBackgroundStyle(slug)}
      >
        {slug === "ai-chatbots" && (
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
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        <p className="text-xl text-foreground/60 mb-8">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceHeader;