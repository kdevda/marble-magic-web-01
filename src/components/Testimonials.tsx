import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      text: "The quality of marble from Shree Sai exceeded our expectations. Their attention to detail in edge processing was remarkable.",
      author: "Raj Patel",
      position: "Interior Designer"
    },
    {
      text: "Outstanding selection of premium stones. Their expertise helped us choose the perfect granite for our project.",
      author: "Sarah Williams",
      position: "Architect"
    },
    {
      text: "Professional service from start to finish. The custom solutions they provided were exactly what we needed.",
      author: "Amit Shah",
      position: "Property Developer"
    }
  ];

  return (
    <section className="py-20" style={{
      backgroundImage: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1604715892639-61d265a76ce6?auto=format&fit=crop&q=80&w=1500')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed"
    }}>
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Client Testimonials
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-none">
                <CardContent className="p-6 text-white">
                  <Quote className="w-8 h-8 mb-4 text-luxury-gold" />
                  <p className="mb-4 italic">{testimonial.text}</p>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-300">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};