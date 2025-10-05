interface SkeletonLoaderProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

const SkeletonLoader = ({ 
  className = '', 
  variant = 'rectangular', 
  width = '100%', 
  height = '20px' 
}: SkeletonLoaderProps) => {
  const baseClasses = 'animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer';
  
  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg'
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ width, height }}
    />
  );
};

export const SkeletonCard = () => (
  <div className="card-modern p-6 space-y-4">
    <SkeletonLoader variant="circular" width={48} height={48} />
    <SkeletonLoader variant="text" height={24} width="80%" />
    <SkeletonLoader variant="text" height={16} width="100%" />
    <SkeletonLoader variant="text" height={16} width="60%" />
    <SkeletonLoader variant="rectangular" height={40} width="50%" className="mt-4" />
  </div>
);

export const SkeletonText = ({ lines = 3 }: { lines?: number }) => (
  <div className="space-y-2">
    {Array.from({ length: lines }).map((_, i) => (
      <SkeletonLoader 
        key={i} 
        variant="text" 
        height={16} 
        width={i === lines - 1 ? '70%' : '100%'} 
      />
    ))}
  </div>
);

export default SkeletonLoader;