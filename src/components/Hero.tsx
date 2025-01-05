import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-black/60"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=2000')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      />
      <div className="relative z-10 text-center text-white max-w-4xl px-4">
        <motion.img 
          src="/lovable-uploads/564fe528-49fa-4f40-b9e6-2f61af545989.png"
          alt="Shree Sai Marble & Granites Logo"
          className="w-48 md:w-64 mx-auto mb-12 bg-white/30 p-8 rounded-lg backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg bg-black/30 px-6 py-3 rounded-lg inline-block"
        >
          Crafting Elegance in Stone
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl mb-8 font-light text-white drop-shadow-lg"
        >
          Since 2007
        </motion.p>
      </div>
    </section>
  );
};