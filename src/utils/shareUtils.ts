// Define ShareData type for TypeScript
type ShareData = {
  title?: string;
  text?: string;
  url?: string;
  files?: File[];
};

export const shareContent = async (title: string, text: string, url: string, imageUrl?: string) => {
  // First, update meta tags for rich link previews
  if (imageUrl) {
    updateMetaTags(title, text, imageUrl, url);
  }
  
  // Then prepare the share data
  const shareData: ShareData = {
    title: title,
    text: text,
    url: url,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else if (navigator.clipboard) {
      // Fallback for browsers that don't support Web Share API
      await navigator.clipboard.writeText(`${title}\n\n${text}\n\n${url}`);
      alert('Link promo berhasil disalin ke clipboard!');
    } else {
      // Fallback for very old browsers
      prompt('Salin teks berikut untuk membagikan promo:', `${title}\n\n${text}\n\n${url}`);
    }
  } catch (error: unknown) {
    console.error('Error sharing:', error);
    if (error instanceof Error && error.name !== 'AbortError') {
      alert('Gagal membagikan promo. Silakan coba lagi.');
    }
  }
};

export const updateMetaTags = (title: string, description: string, imageUrl: string, url: string) => {
  // Update or create meta tags for social sharing
  const metaTags = [
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: imageUrl },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: imageUrl },
  ];

  metaTags.forEach((tag) => {
    let element = document.querySelector(`meta[property="${tag.property}"], meta[name="${tag.name}"]`);
    
    if (!element) {
      element = document.createElement('meta');
      if (tag.property) {
        element.setAttribute('property', tag.property);
      } else if (tag.name) {
        element.setAttribute('name', tag.name);
      }
      document.head.appendChild(element);
    }
    
    element.setAttribute('content', tag.content);
  });
};
