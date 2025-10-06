import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

import logo from "@/assets/elitjohns-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const topbarRef = useRef<HTMLDivElement | null>(null);
  const [topOffset, setTopOffset] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Measure the top bar height and apply it as the top offset for the main nav
  useEffect(() => {
    const measure = () => {
      const h = topbarRef.current?.offsetHeight ?? 0;
      setTopOffset(h);
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
  {/* Top Bar */}
  <div ref={topbarRef} className="fixed top-0 left-0 right-0 z-50 bg-primary text-white py-2 text-xs sm:text-sm">
        <div className="container mx-auto px-2 sm:px-4 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2 sm:space-x-6">
            <div className="hidden sm:flex items-center space-x-2">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden md:inline">+254 759 001 048</span>
              <span className="md:hidden">Call Us</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden lg:inline">elitjohnsdigital@gmail.com</span>
              <span className="lg:hidden">Email Us</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Facebook className="w-3 h-3 sm:w-4 sm:h-4 hover:text-green-200 cursor-pointer" />
            <Instagram className="w-3 h-3 sm:w-4 sm:h-4 hover:text-green-200 cursor-pointer" />
            <Twitter className="w-3 h-3 sm:w-4 sm:h-4 hover:text-green-200 cursor-pointer" />
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      } ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
        style={{ top: `${topOffset}px` }}
      >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-18'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Elitjohns Digital" className="h-6 w-6 sm:h-8 sm:w-8" />
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="text-sm sm:text-lg font-bold text-primary">Elitjohns</span>
              <span className="text-sm sm:text-lg font-bold text-gray-900">Digital</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm lg:text-base font-medium transition-all duration-200 px-3 py-2 rounded-lg relative overflow-hidden ${
                  isActive(link.path)
                    ? "text-primary bg-primary/10"
                    : "text-gray-700 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-primary text-white text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3 rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium shadow-sm">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pb-4 pt-2 bg-white/95 backdrop-blur-md border-t border-gray-200">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 text-sm font-medium transition-all duration-200 hover:bg-primary/5 ${
                  isActive(link.path)
                    ? "text-primary bg-primary/10"
                    : "text-gray-700 hover:text-primary"
                }`}
                style={{animationDelay: `${index * 50}ms`}}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 mt-3">
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)} 
                className="bg-primary text-white text-sm px-4 py-2 rounded-md hover:bg-primary-light transition-colors w-full text-center block"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navigation;
