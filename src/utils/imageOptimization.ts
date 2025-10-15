// Professional image optimization utilities
export const generateOptimizedImageUrl = (
  src: string,
  width: number,
  height?: number,
  quality: number = 80
): string => {
  // For external images, use a CDN service like Cloudinary or ImageKit
  if (src.startsWith('http')) {
    // Using ImageKit.io as example (free tier available)
    const imageKitUrl = 'https://ik.imagekit.io/your-id/';
    const transformations = `tr:w-${width}${height ? `,h-${height}` : ''},q-${quality},f-auto`;
    return `${imageKitUrl}${transformations}/${encodeURIComponent(src)}`;
  }
  
  // For local images, return as-is (Vite handles optimization)
  return src;
};

export const generateImageSrcSet = (src: string, sizes: number[]): string => {
  return sizes
    .map(size => `${generateOptimizedImageUrl(src, size)} ${size}w`)
    .join(', ');
};

export const getOptimalImageSize = (containerWidth: number): number => {
  // Return appropriate image size based on container
  if (containerWidth <= 320) return 320;
  if (containerWidth <= 640) return 640;
  if (containerWidth <= 1024) return 1024;
  return 1200;
};