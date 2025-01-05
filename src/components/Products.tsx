import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export const Products = () => {
  const collections = [
    {
      title: "Marble Collection",
      description: "Exquisite marble varieties from Italian Calacatta to Indian Makrana",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Granite Selection",
      description: "Premium granite stones sourced from quarries worldwide",
      image: "https://images.unsplash.com/photo-1604715892639-61d265a76ce6?auto=format&fit=crop&q=80&w=500"
    },
    {
      title: "Luxury Stones",
      description: "Rare and exclusive stone collections for distinctive projects",
      image: "https://images.unsplash.com/photo-1599619585752-c3edb42a414c?auto=format&fit=crop&q=80&w=500"
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
          Premium Collections
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-luxury-black">{collection.title}</h3>
                  <p className="text-gray-600">{collection.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};