import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=2000')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll", // Changed from fixed to scroll for better mobile experience
        }}
      >
        <div className="absolute inset-0 bg-black/60" /> {/* Overlay moved to separate div */}
      </div>
      <div className="relative z-10 text-center text-white max-w-4xl px-4">
        <motion.img 
          src="/lovable-uploads/564fe528-49fa-4f40-b9e6-2f61af545989.png"
          alt="Shree Sai Marble & Granites Logo"
          className="w-64 md:w-72 lg:w-80 mx-auto mb-12 bg-white/30 p-8 rounded-lg backdrop-blur-sm" // Increased logo size
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg bg-black/30 px-4 md:px-6 py-3 rounded-lg inline-block"
        >
          Crafting Elegance in Stone
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl mb-8 font-light text-white drop-shadow-lg"
        >
          Since 2007
        </motion.p>
      </div>
    </section>
  );
};