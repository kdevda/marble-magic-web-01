import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export const Products = () => {
  const collections = [
    {
      title: "Marble Collection",
      description: "Exquisite marble varieties including Italian Statuario, Calacatta Gold, and premium Indian marble",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3"
    },
    {
      title: "Granite Selection",
      description: "Premium granite stones including Black Galaxy, Steel Grey, and exclusive varieties",
      image: "https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?ixlib=rb-4.0.3"
    },
    {
      title: "Luxury Stones",
      description: "Rare Italian marble including Portoro Gold, Emperador, and exclusive onyx collections",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3"
    }
  ];

  return (
    <section id="collections" className="min-h-screen flex items-center bg-luxury-gray py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 text-luxury-black"
        >
          Premium Collections
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {collections.map((collection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <CardContent className="p-8 bg-white flex-grow">
                  <h3 className="text-2xl font-bold mb-3 text-luxury-black">{collection.title}</h3>
                  <p className="text-lg text-gray-600">{collection.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};