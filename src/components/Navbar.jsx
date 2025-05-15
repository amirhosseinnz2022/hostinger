
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Games & Items', path: '/games' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Policies', path: '/policies' },
];

const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/e1ea1837-18a9-4085-98fa-817959c745f9/0c4c3dbbca28a43f1e919ccd1b8227ca.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkClass = 'neon-text-primary font-semibold border-b-2 border-primary';
  const inactiveLinkClass = 'hover:text-primary transition-colors duration-300';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg shadow-lg shadow-primary/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoUrl} alt="Parnflowers Limited Logo" className="h-12 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? activeLinkClass : inactiveLinkClass
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-neon-sm">
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="text-primary">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-md shadow-xl py-4"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `py-2 text-lg ${isActive ? activeLinkClass : inactiveLinkClass}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Get Started
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
  