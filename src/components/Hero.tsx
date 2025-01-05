import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-black/50"
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
          className="w-24 md:w-32 mx-auto mb-8 bg-white/20 p-4 rounded-lg backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg bg-black/30 px-4 py-2 rounded-lg inline-block"
        >
          Crafting Elegance in Stone
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 font-light text-white drop-shadow-lg"
        >
          Since 2007
        </motion.p>
      </div>
    </div>
  );
};