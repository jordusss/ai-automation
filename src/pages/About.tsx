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
            About AI Automation B.V.
          </h1>
          
          <div className="space-y-8 text-lg text-foreground/80">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="glass-card p-6 rounded-lg"
            >
              <p className="mb-6">
                At AI Automation B.V., we believe in the transformative power of Artificial Intelligence to reimagine what's possible for businesses, industries, and people. Founded by a passionate team of technology enthusiasts, our company has one core goal: to help organizations embrace the future by seamlessly integrating AI-driven solutions into everyday operations.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
              <p>
                Our mission is to empower businesses of all sizes with cutting-edge AI tools and strategies that streamline workflows, enhance decision-making, and fuel sustainable growth. By partnering with clients to solve their most pressing challenges, we strive to ensure that AI becomes an accessible, intuitive, and indispensable ally in their journey toward innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="glass-card p-6 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h2>
              <p>
                We envision a world in which intelligent automation fuels new possibilities for every organization. A world where advanced technology not only simplifies processes but also frees talented teams to focus on what matters most—creativity, strategy, and delivering exceptional value to customers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="glass-card p-6 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-foreground">Our Expertise</h2>
              <ul className="list-disc list-inside space-y-3">
                <li><span className="font-semibold">AI-Powered Automation:</span> We specialize in developing and implementing machine learning and automation solutions tailored to your business needs.</li>
                <li><span className="font-semibold">Data-Driven Insights:</span> Our experts turn complex data into actionable insights, enabling more informed and agile decision-making.</li>
                <li><span className="font-semibold">Scalable Solutions:</span> We work closely with clients to design robust systems that adapt to changing market demands and evolving technological landscapes.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="glass-card p-6 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-foreground">Why Choose AI Automation?</h2>
              <ul className="list-disc list-inside space-y-3">
                <li><span className="font-semibold">Tailored Approach:</span> We take the time to understand each client's unique challenges and goals, ensuring our solutions are the perfect fit.</li>
                <li><span className="font-semibold">Innovative Mindset:</span> By staying at the forefront of AI research, we bring fresh ideas and emerging technologies to every engagement.</li>
                <li><span className="font-semibold">Human-Centric Collaboration:</span> We believe that true innovation happens when people and technology work hand in hand, so we focus on building strong client relationships and transparent communication.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="glass-card p-6 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-foreground">Looking Ahead</h2>
              <p className="mb-6">
                As AI continues to redefine industries around the globe, we remain committed to guiding our clients through every stage of their automation journey—helping them realize tangible ROI, foster a culture of innovation, and ultimately achieve their broader business objectives.
              </p>
              <p>
                Whether you're exploring the basics of automation or ready to embark on a transformative AI project, AI Automation B.V. is here to help you unlock the full potential of intelligent technology.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;