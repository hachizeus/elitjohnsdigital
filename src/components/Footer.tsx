import { Link } from "react-router-dom";
import { Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/elitjohns-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Elitjohns Digital" className="h-10 w-10" />
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-primary">Elitjohns</span>
                <span className="text-xl font-bold text-white">Digital</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming businesses across Kenya through innovative digital solutions and professional services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Web Development</li>
              <li className="text-gray-400">App Development</li>
              <li className="text-gray-400">Branding & Design</li>
              <li className="text-gray-400">Social Media</li>
              <li className="text-gray-400">SEO & Marketing</li>
              <li className="text-gray-400">AI Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <a
                href="mailto:elitjohnsdigital@gmail.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-primary transition-colors"
              >
                <Mail size={18} />
                <span>elitjohnsdigital@gmail.com</span>
              </a>
              <div className="pt-4">
                <p className="text-gray-400 mb-4">Follow us on social media</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Elitjohns Digital Agency. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-400 hover:text-primary transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/" className="text-gray-400 hover:text-primary transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
