import CryptoJS from 'crypto-js';

const IMAGEKIT_URL = 'https://ik.imagekit.io/elitjohns';
const IMAGEKIT_PUBLIC_KEY = 'public_ubvHkKLQ1KZWDd+UcPhncElZqAU=';
const IMAGEKIT_PRIVATE_KEY = 'private_to2x8naE/aYY0a1nXXQyPvtLAuk=';

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



const generateAuthParams = () => {
  const token = CryptoJS.lib.WordArray.random(128/8).toString();
  const expire = Math.floor(Date.now() / 1000) + 3600;
  const signature = CryptoJS.HmacSHA1(token + expire, IMAGEKIT_PRIVATE_KEY).toString();
  
  return { token, expire, signature };
};

export const uploadToImageKit = async (file: File, folder = 'portfolio') => {
  const { token, expire, signature } = generateAuthParams();
  const fileName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
  
  const formData = new FormData();
  formData.append('file', file);
  formData.append('publicKey', IMAGEKIT_PUBLIC_KEY);
  formData.append('signature', signature);
  formData.append('expire', expire.toString());
  formData.append('token', token);
  formData.append('fileName', fileName);
  formData.append('folder', folder);
  
  const response = await fetch('https://upload.imagekit.io/api/v1/files/upload', {
    method: 'POST',
    body: formData
  });
  
  const result = await response.json();
  
  if (!response.ok) {
    throw new Error(result.message || `Upload failed: ${response.status}`);
  }
  
  return result;
};