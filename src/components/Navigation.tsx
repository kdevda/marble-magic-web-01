import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: "Home", target: "home" },
    { title: "About", target: "about" },
    { title: "Services", target: "our-services" },
    { title: "Collections", target: "collections" },
    { title: "Testimonials", target: "testimonials" },
    { title: "Contact", target: "contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-luxury-black/90 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden absolute right-4 top-4 text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center space-x-6 py-4">
          {menuItems.map((item) => (
            <li key={item.target}>
              <Link
                to={item.target}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-white hover:text-luxury-gold cursor-pointer transition-colors"
                activeClass="text-luxury-gold"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? "auto" : 0
          }}
          className="md:hidden overflow-hidden"
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {menuItems.map((item) => (
              <li key={item.target} className="w-full">
                <Link
                  to={item.target}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block text-center text-white hover:text-luxury-gold cursor-pointer transition-colors py-2"
                  activeClass="text-luxury-gold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};