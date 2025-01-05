import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-luxury-gray relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          opacity: "0.1"
        }}
      />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl font-bold mb-8 text-luxury-black">Our Legacy</h2>
          <p className="text-xl leading-relaxed mb-6">
            For over 18 years, Shree Sai Marble & Granites has been the premier supplier of natural stone in the region. Our commitment to quality and craftsmanship has made us the trusted choice for architects, designers, and homeowners alike.
          </p>
          <p className="text-xl leading-relaxed">
            We source the finest marble and granite from quarries worldwide, ensuring each piece meets our exacting standards for beauty and durability.
          </p>
        </motion.div>
      </div>
    </section>
  );
};