import { motion } from "framer-motion";
import { Users, Target, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to revolutionize business automation"
    },
    {
      year: "2021",
      title: "First Major Client",
      description: "Successfully automated operations for a Fortune 500 company"
    },
    {
      year: "2022",
      title: "Team Expansion",
      description: "Grew to 50+ AI and automation experts"
    },
    {
      year: "2023",
      title: "Global Reach",
      description: "Expanded services to 10+ countries worldwide"
    }
  ];

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
            Transform Your Business with AI Driven Automation
          </h1>
          
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="glass-card p-8 rounded-lg space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                AI Automation NL is dedicated to helping businesses achieve operational excellence through innovative automation solutions. We specialize in transforming manual processes into efficient, automated workflows that save time and reduce errors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="glass-card p-8 rounded-lg space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Our Expertise</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Process Automation & Optimization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Custom Software Development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>System Integration</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Industrial Automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>Quality Control Systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span>AI Integration Services</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Our Journey</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="glass-card p-6 rounded-lg"
                  >
                    <div className="text-primary font-bold text-xl mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-foreground/60">{milestone.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-center"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/80"
                onClick={() => window.location.href = '/#contact'}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;