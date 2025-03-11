import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="text-2xl font-bold text-blue-500">
            Kettsefi
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#services" isScrolled={isScrolled}>Services</NavLink>
            <NavLink href="#case-studies" isScrolled={isScrolled}>Case Studies</NavLink>
            <NavLink href="#team" isScrolled={isScrolled}>Team</NavLink>
            <NavLink href="#contact" isScrolled={isScrolled}>Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4"
          >
            <div className="flex flex-col space-y-4 px-4">
              <MobileNavLink href="#services" onClick={() => setIsMobileMenuOpen(false)}>
                Services
              </MobileNavLink>
              <MobileNavLink href="#case-studies" onClick={() => setIsMobileMenuOpen(false)}>
                Case Studies
              </MobileNavLink>
              <MobileNavLink href="#team" onClick={() => setIsMobileMenuOpen(false)}>
                Team
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, children, isScrolled }: { href: string; children: React.ReactNode; isScrolled: boolean }) => (
  <a
    href={href}
    className={`text-lg font-medium transition-colors duration-300 ${
      isScrolled ? 'text-gray-800 hover:text-blue-500' : 'text-white hover:text-blue-300'
    }`}
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-gray-800 hover:text-blue-500 text-lg font-medium block py-2"
  >
    {children}
  </a>
);

export default Navigation;