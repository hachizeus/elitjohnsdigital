import { useState } from 'react';
import { uploadToImageKit } from '@/utils/imagekit';
import { Button } from '@/components/ui/button';

interface ImageUploadProps {
  onUpload: (url: string) => void;
  folder?: string;
}

export const ImageUpload = ({ onUpload, folder = 'portfolio' }: ImageUploadProps) => {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const result = await uploadToImageKit(file, folder);
      onUpload(result.url);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        disabled={uploading}
        className="hidden"
        id="image-upload"
      />
      <Button asChild disabled={uploading}>
        <label htmlFor="image-upload">
          {uploading ? 'Uploading...' : 'Upload Image'}
        </label>
      </Button>
    </div>
  );
};