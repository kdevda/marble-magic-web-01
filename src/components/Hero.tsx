import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/564fe528-49fa-4f40-b9e6-2f61af545989.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      />
      <div className="relative z-10 text-center text-white max-w-4xl px-4">
        <motion.img 
          src="/lovable-uploads/564fe528-49fa-4f40-b9e6-2f61af545989.png"
          alt="Shree Sai Marble & Granites Logo"
          className="w-32 md:w-48 mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 font-light"
        >
          Crafting Elegance in Stone Since 2009
        </motion.p>
      </div>
    </div>
  );
};