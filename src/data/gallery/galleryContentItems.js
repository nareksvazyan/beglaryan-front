// /src/data/gallery/galleryContentItems.js

const API_URL = 'https://beglaryan-backend-1.onrender.com/api/gallery';
// const API_URL = 'https://admin.beglaryancenter.am/api/gallery';
// const API_URL = 'https://beglaryan-bac.onrender.com/api/gallery';


export async function getGalleryContentItems() {
  // 1. fetch the raw array of image URLs
  const resp = await fetch(API_URL);
  if (!resp.ok) throw new Error('Failed to load gallery');
  const urls = await resp.json(); // e.g. [ '/assets/img/1.jpg', '/assets/img/2.jpg', ... ]

  // 2. convert into objects with id/title/imgSrc
  return urls.map((imgSrc, idx) => ({
    id: String(idx + 1),
    title: `Gallery Image ${idx + 1}`,
    imgSrc,
  }));
}
