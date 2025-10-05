import { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';
import logo from '@/assets/elitjohns-logo.png';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-white via-gray-50 to-green-50 flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Logo Animation */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto animate-bounce-in">
            <img src={logo} alt="Elitjohns Digital" className="w-full h-full" />
          </div>
          <div className="absolute inset-0 w-24 h-24 mx-auto border-4 border-primary/20 rounded-full animate-ping"></div>
        </div>

        {/* Brand Name */}
        <div className="space-y-2 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-3xl font-bold text-primary">Elitjohns</span>
            <span className="text-3xl font-bold text-gray-900">Digital</span>
          </div>
          <p className="text-gray-600 font-medium">Premium Digital Solutions</p>
        </div>

        {/* Loading Bar */}
        <div className="w-64 mx-auto animate-fade-in-up" style={{animationDelay: '1s'}}>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-green-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-500">Loading...</span>
            <span className="text-sm font-semibold text-primary">{progress}%</span>
          </div>
        </div>

        {/* Loading Icon */}
        <div className="animate-spin">
          <Zap className="w-8 h-8 text-primary mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;