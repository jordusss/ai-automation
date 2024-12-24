import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-background z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-background to-blue-500/20" />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"
        />
      </div>

      <Navbar />
      <Hero />
      <Services />
      <Contact />
    </div>
  );
};

export default Index;