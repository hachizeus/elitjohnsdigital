import { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

const PWAInstaller = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    localStorage.setItem('pwa-install-dismissed', 'true');
  };

  if (!showInstallPrompt || localStorage.getItem('pwa-install-dismissed')) {
    return null;
  }

  return (
    <div className="fixed top-20 right-4 z-40 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 max-w-sm animate-fade-in">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Download className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-gray-900">Install App</h3>
        </div>
        <button onClick={handleDismiss} className="text-gray-400 hover:text-gray-600">
          <X className="w-4 h-4" />
        </button>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Install Elitjohns Digital for quick access and offline browsing.
      </p>
      <div className="flex space-x-2">
        <button onClick={handleInstall} className="btn-primary text-sm px-4 py-2">
          Install
        </button>
        <button onClick={handleDismiss} className="text-sm text-gray-600 hover:text-gray-800 px-4 py-2">
          Not now
        </button>
      </div>
    </div>
  );
};

export default PWAInstaller;