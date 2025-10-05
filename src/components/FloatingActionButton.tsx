import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Expanded Menu */}
      {isExpanded && (
        <div className="absolute bottom-20 right-0 space-y-3 animate-fade-in-up">
          <Link
            to="/contact"
            className="flex items-center justify-center w-14 h-14 bg-white text-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            title="Contact Us"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </Link>
          
          <a
            href="tel:+254700000000"
            className="flex items-center justify-center w-14 h-14 bg-white text-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            title="Call Us"
          >
            <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
          
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-14 h-14 bg-white text-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            title="Back to Top"
          >
            <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      )}

      {/* Main FAB */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-16 h-16 bg-gradient-to-r from-primary to-green-600 text-white rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-110 animate-glow ${
          isExpanded ? 'rotate-45' : ''
        }`}
        title="Quick Actions"
      >
        <div className="flex items-center justify-center">
          {isExpanded ? (
            <div className="w-6 h-0.5 bg-white"></div>
          ) : (
            <MessageCircle className="w-7 h-7" />
          )}
        </div>
      </button>
    </div>
  );
};

export default FloatingActionButton;