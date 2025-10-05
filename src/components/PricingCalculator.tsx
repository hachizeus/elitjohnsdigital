import { useState } from 'react';
import { Calculator, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PricingCalculator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [selections, setSelections] = useState({
    service: '',
    features: [] as string[],
    timeline: '',
    support: ''
  });

  const services = {
    'website': { name: 'Website Development', basePrice: 25000 },
    'app': { name: 'App Development', basePrice: 100000 },
    'branding': { name: 'Branding Package', basePrice: 15000 },
    'social': { name: 'Social Media Management', basePrice: 30000 }
  };

  const features = {
    'responsive': { name: 'Mobile Responsive', price: 5000 },
    'ecommerce': { name: 'E-commerce Integration', price: 25000 },
    'seo': { name: 'SEO Optimization', price: 10000 },
    'analytics': { name: 'Analytics Setup', price: 3000 },
    'cms': { name: 'Content Management', price: 8000 }
  };

  const calculateTotal = () => {
    const servicePrice = selections.service ? services[selections.service as keyof typeof services].basePrice : 0;
    const featuresPrice = selections.features.reduce((total, feature) => {
      return total + (features[feature as keyof typeof features]?.price || 0);
    }, 0);
    const timelineMultiplier = selections.timeline === 'rush' ? 1.5 : 1;
    const supportPrice = selections.support === 'premium' ? 5000 : 0;

    return Math.round((servicePrice + featuresPrice + supportPrice) * timelineMultiplier);
  };

  const toggleFeature = (feature: string) => {
    setSelections(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-40 right-8 z-40 w-14 h-14 bg-white text-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        title="Pricing Calculator"
      >
        <Calculator className="w-6 h-6" />
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Project Calculator</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
              <p className="text-gray-600 mt-2">Get an instant estimate for your project</p>
            </div>

            <div className="p-6 space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Select Service</label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(services).map(([key, service]) => (
                    <button
                      key={key}
                      onClick={() => setSelections(prev => ({ ...prev, service: key }))}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        selections.service === key
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-gray-200 hover:border-primary/50'
                      }`}
                    >
                      <div className="font-medium">{service.name}</div>
                      <div className="text-sm text-gray-600">KES {service.basePrice.toLocaleString()}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Additional Features</label>
                <div className="space-y-2">
                  {Object.entries(features).map(([key, feature]) => (
                    <button
                      key={key}
                      onClick={() => toggleFeature(key)}
                      className={`w-full p-3 rounded-lg border-2 transition-all flex items-center justify-between ${
                        selections.features.includes(key)
                          ? 'border-primary bg-primary/10'
                          : 'border-gray-200 hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          selections.features.includes(key) ? 'border-primary bg-primary' : 'border-gray-300'
                        }`}>
                          {selections.features.includes(key) && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span>{feature.name}</span>
                      </div>
                      <span className="text-primary font-semibold">+KES {feature.price.toLocaleString()}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Timeline</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelections(prev => ({ ...prev, timeline: 'standard' }))}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selections.timeline === 'standard'
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    <div className="font-medium">Standard</div>
                    <div className="text-sm text-gray-600">4-6 weeks</div>
                  </button>
                  <button
                    onClick={() => setSelections(prev => ({ ...prev, timeline: 'rush' }))}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selections.timeline === 'rush'
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                  >
                    <div className="font-medium">Rush (+50%)</div>
                    <div className="text-sm text-gray-600">2-3 weeks</div>
                  </button>
                </div>
              </div>

              {/* Total */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-gray-900">Estimated Total</span>
                  <span className="text-3xl font-bold text-primary">
                    KES {calculateTotal().toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  This is an estimate. Final pricing may vary based on specific requirements.
                </p>
                <button 
                  className="w-full btn-primary"
                  onClick={() => {
                    const quoteData = {
                      service: services[selections.service as keyof typeof services]?.name || '',
                      features: selections.features.map(f => features[f as keyof typeof features]?.name).join(', '),
                      timeline: selections.timeline === 'rush' ? 'Rush (2-3 weeks)' : 'Standard (4-6 weeks)',
                      total: calculateTotal()
                    };
                    const message = `Quote Request:\n\nService: ${quoteData.service}\nFeatures: ${quoteData.features}\nTimeline: ${quoteData.timeline}\nEstimated Total: KES ${quoteData.total.toLocaleString()}\n\nPlease provide a detailed quote for the above requirements.`;
                    navigate('/contact', { state: { message } });
                    setIsOpen(false);
                  }}
                >
                  Get Detailed Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PricingCalculator;