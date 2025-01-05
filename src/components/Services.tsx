import { motion } from "framer-motion";
import { Circle, Hexagon, Triangle } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Circle className="w-8 h-8 text-luxury-gold" />,
      title: "Premium Stone Supply",
      description: "Extensive collection of natural marble and granite from worldwide quarries"
    },
    {
      icon: <Triangle className="w-8 h-8 text-luxury-gold" />,
      title: "Edge Processing",
      description: "Professional edge polishing and rounding services for perfect finishes"
    },
    {
      icon: <Hexagon className="w-8 h-8 text-luxury-gold" />,
      title: "Custom Solutions",
      description: "Tailored stone solutions for commercial and residential projects"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-luxury-black"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-luxury-black">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};