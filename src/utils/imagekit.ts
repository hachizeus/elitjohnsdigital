const IMAGEKIT_URL = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT || 'https://ik.imagekit.io/elitjohns';
const IMAGEKIT_PUBLIC_KEY = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY || 'public_ubvHkKLQ1KZWDd+UcPhncElZqAU=';

export const optimizeImage = (src: string, width: number, height?: number) => {
  if (!src.startsWith('http')) return src;
  
  const transforms = [
    `w-${width}`,
    height ? `h-${height}` : '',
    'q-80',
    'f-webp'
  ].filter(Boolean).join(',');
  
  return `${IMAGEKIT_URL}/tr:${transforms}/${encodeURIComponent(src)}`;
};

export const generateSrcSet = (src: string) => {
  const sizes = [320, 640, 1024];
  return sizes.map(w => `${optimizeImage(src, w)} ${w}w`).join(', ');
};

export const uploadToImageKit = async (file: File, folder = 'portfolio') => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('publicKey', IMAGEKIT_PUBLIC_KEY);
  formData.append('fileName', file.name);
  formData.append('folder', folder);
  
  const response = await fetch('https://upload.imagekit.io/api/v1/files/upload', {
    method: 'POST',
    body: formData
  });
  
  if (!response.ok) throw new Error('Upload failed');
  return response.json();
};