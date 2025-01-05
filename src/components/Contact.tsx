import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-luxury-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Contact Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <MapPin className="w-8 h-8 mx-auto mb-4 text-luxury-gold" />
            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
            <p className="text-gray-300">
              Shree Sai Marble And Granites,<br />
              Opposite Kalash-3 Apartment,<br />
              Ghuma, Ahmedabad,<br />
              Gujarat 380058, India
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Phone className="w-8 h-8 mx-auto mb-4 text-luxury-gold" />
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-gray-300">
              <a href="tel:+919898054857" className="hover:text-luxury-gold transition-colors">+91 98980 54857</a>
              <br />
              <a href="tel:+918852020122" className="hover:text-luxury-gold transition-colors">+91 88520 20122</a>
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Mail className="w-8 h-8 mx-auto mb-4 text-luxury-gold" />
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-gray-300">
              <a href="mailto:info@shreesaimarble.com" className="hover:text-luxury-gold transition-colors">info@shreesaimarble.com</a>
            </p>
          </motion.div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};