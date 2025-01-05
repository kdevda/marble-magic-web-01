import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const Navigation = () => {
  const menuItems = [
    { title: "Home", target: "home" },
    { title: "About", target: "about" },
    { title: "Services", target: "services" },
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
        <ul className="flex justify-center space-x-6 py-4">
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
      </div>
    </motion.nav>
  );
};