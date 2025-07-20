import imageCompression from 'browser-image-compression';

const options = {
  maxSizeMB: 1,
  maxWidthOrHeight: 1920,
  useWebWorker: true,
};

export const compressImage = async (imageUrl: string): Promise<string> => {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const compressedFile = await imageCompression(blob, options);
    return URL.createObjectURL(compressedFile);
  } catch (error) {
    console.error('Error compressing image:', error);
    return imageUrl; // Return original image URL on error
  }
};
