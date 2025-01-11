import { motion } from "framer-motion";
import { ContactForm } from "./contact/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-foreground/60">
              Ready to transform your business? Let's discuss how we can help.
            </p>
          </motion.div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;