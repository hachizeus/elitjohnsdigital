import { Link } from "react-router-dom";
import { Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-heading font-bold text-primary">Elitjohns</span>
              <span className="text-xl font-heading font-bold">Digital</span>
            </div>
            <p className="text-sm text-secondary-foreground/70">
              Transforming businesses through innovative digital solutions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-secondary-foreground/70">Web Development</li>
              <li className="text-sm text-secondary-foreground/70">App Development</li>
              <li className="text-sm text-secondary-foreground/70">Branding</li>
              <li className="text-sm text-secondary-foreground/70">Social Media</li>
              <li className="text-sm text-secondary-foreground/70">SEO</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:elitjohnsdigital@gmail.com"
                className="flex items-center space-x-2 text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
              >
                <Mail size={16} />
                <span>elitjohnsdigital@gmail.com</span>
              </a>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/70">
            © {new Date().getFullYear()} Elitjohns Digital Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
