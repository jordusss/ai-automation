import { Brain } from "lucide-react";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <motion.div
        className="relative"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Brain className="w-8 h-8 text-primary" />
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Brain className="w-8 h-8 text-primary blur-sm" />
        </motion.div>
      </motion.div>
      <span className="text-2xl font-bold">
        <span className="text-primary">AI</span> Automation
      </span>
    </div>
  );
};

export default Logo;