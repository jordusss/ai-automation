import { motion } from 'framer-motion';
import PinballGame from '@/components/PinballGame';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
          <div className="glass-card p-6 rounded-lg mb-8">
            <p className="text-lg mb-4">
              We are a cutting-edge AI automation agency dedicated to transforming businesses
              through innovative solutions. Our team of experts combines creativity with
              technical excellence to deliver outstanding results.
            </p>
            <p className="text-lg">
              Take a break and enjoy our mini-game while you learn more about us!
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Play Neon Pinball</h2>
            <PinballGame />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;