import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create a new access key at https://web3forms.com/
    const formPayload = {
      access_key: "YOUR-ACCESS-KEY-HERE",
      subject: "New Contact Form Submission - Shree Sai Marble",
      from_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formPayload)
      });

      const data = await response.json();
      console.log('Form submission response:', data);

      if (data.success) {
        toast({
          title: "Success!",
          description: "Your message has been sent. We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
      console.error('Form submission error:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto"
    >
      <h3 className="text-2xl font-bold text-center mb-8">Send us an Inquiry</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="bg-white/10 border-luxury-gold/50 text-white placeholder:text-gray-400"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="bg-white/10 border-luxury-gold/50 text-white placeholder:text-gray-400"
          />
        </div>
        <div>
          <Input
            type="tel"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="bg-white/10 border-luxury-gold/50 text-white placeholder:text-gray-400"
          />
        </div>
        <div>
          <Textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            className="bg-white/10 border-luxury-gold/50 text-white placeholder:text-gray-400"
            rows={5}
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black font-bold"
        >
          Send Message
        </Button>
      </form>
    </motion.div>
  );
};