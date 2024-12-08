export default function imageLoader({ src, width, quality }) {
  // For local images, return the path as is
  if (src.startsWith('/')) {
    return src;
  }
  
  // For Cloudinary images
  if (src.startsWith('xhttps://res.cloudinary.com')) {
    const actualSrc = src.replace('xhttps://', 'https://');
    return actualSrc;
  }
  
  // For other external images
  return src;
} 