import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  maintenance?: string;
  afterCosts?: string;
  featured?: boolean;
}

const ServiceCard = ({
  title,
  price,
  description,
  features,
  maintenance,
  afterCosts,
  featured = false,
}: ServiceCardProps) => {
  return (
    <div className={`relative p-4 sm:p-6 lg:p-8 rounded-lg transition-all duration-300 hover:shadow-hover ${
      featured 
        ? 'bg-primary text-white shadow-lg' 
        : 'card-modern'
    }`}>
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-primary px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="mb-6">
        <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 ${featured ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        <div className={`text-xl sm:text-2xl md:text-3xl font-bold mb-3 ${featured ? 'text-white' : 'text-primary'}`}>
          {price}
        </div>
        <p className={`leading-relaxed text-sm sm:text-sm md:text-base ${featured ? 'text-green-100' : 'text-gray-600'}`}>
          {description}
        </p>
      </div>
        
      <div className="space-y-4 mb-8">
        <h4 className={`font-semibold ${featured ? 'text-white' : 'text-gray-900'}`}>
          What's included:
        </h4>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check size={18} className={`flex-shrink-0 mt-0.5 ${featured ? 'text-white' : 'text-primary'}`} />
              <span className={`text-sm sm:text-sm ${featured ? 'text-green-100' : 'text-gray-700'}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {(maintenance || afterCosts) && (
        <div className={`space-y-3 mb-8 pt-6 border-t ${featured ? 'border-white/20' : 'border-gray-200'}`}>
          {maintenance && (
            <p className={`text-sm ${featured ? 'text-green-100' : 'text-gray-600'}`}>
              <span className="font-semibold">Maintenance:</span> {maintenance}
            </p>
          )}
          {afterCosts && (
            <p className={`text-sm ${featured ? 'text-green-100' : 'text-gray-600'}`}>
              <span className="font-semibold">Additional Costs:</span> {afterCosts}
            </p>
          )}
        </div>
      )}
      
      <Link 
        to="/contact" 
        className={`w-full py-3 px-6 rounded-lg font-medium transition-smooth text-center block ${
          featured 
            ? 'bg-white text-primary hover:bg-gray-100' 
            : 'bg-primary text-white hover:bg-primary-light'
        }`}
      >
        Get Started
      </Link>
    </div>
  );
};

export default ServiceCard;
