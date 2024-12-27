import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-purple-600">
            About The Automation Group
          </h1>
          
          <div className="space-y-8 text-lg text-foreground/80">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="glass-card p-6 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
              <p>
                The Automation Group is dedicated to helping businesses achieve operational excellence through innovative automation solutions. We specialize in transforming manual processes into efficient, automated workflows that save time and reduce errors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="glass-card p-6 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-foreground">Our Expertise</h2>
              <ul className="list-disc list-inside space-y-3">
                <li>Process Automation & Optimization</li>
                <li>Custom Software Development</li>
                <li>System Integration</li>
                <li>Industrial Automation</li>
                <li>Quality Control Systems</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="glass-card p-6 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-foreground">Why Choose Us</h2>
              <p className="mb-4">
                With years of experience in industrial automation and process optimization, we understand the unique challenges businesses face in today's fast-paced environment. Our team of experts works closely with clients to deliver tailored solutions that drive efficiency and growth.
              </p>
              <p>
                We combine technical expertise with practical industry knowledge to ensure our solutions not only meet but exceed your expectations.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;