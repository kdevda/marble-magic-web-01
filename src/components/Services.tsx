import { motion } from "framer-motion";
import { Circle, Hexagon, Triangle } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Circle className="w-12 h-12 text-luxury-gold" />,
      title: "Premium Stone Supply",
      description: "Extensive collection of natural marble and granite from worldwide quarries, including Italian marble, Indian granite, and exclusive stone varieties."
    },
    {
      icon: <Triangle className="w-12 h-12 text-luxury-gold" />,
      title: "Edge Processing",
      description: "State-of-the-art edge polishing and customization services, delivering perfect finishes for countertops, flooring, and architectural elements."
    },
    {
      icon: <Hexagon className="w-12 h-12 text-luxury-gold" />,
      title: "Custom Solutions",
      description: "Bespoke stone solutions for luxury residences and commercial projects, with expert consultation and installation services."
    }
  ];

  return (
    <section id="our-services" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 text-white"
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
              className="text-center p-8 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-luxury-gold">{service.title}</h3>
              <p className="text-lg text-white/90">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};