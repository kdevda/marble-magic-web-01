import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-20 bg-luxury-gray">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 text-luxury-black">Our Legacy</h2>
          <p className="text-lg leading-relaxed mb-6">
            For over 15 years, Shree Sai Marble & Granites has been the premier supplier of natural stone in the region. Our commitment to quality and craftsmanship has made us the trusted choice for architects, designers, and homeowners alike.
          </p>
          <p className="text-lg leading-relaxed">
            We source the finest marble and granite from quarries worldwide, ensuring each piece meets our exacting standards for beauty and durability.
          </p>
        </motion.div>
      </div>
    </section>
  );
};