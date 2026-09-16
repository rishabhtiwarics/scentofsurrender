const assetModules = import.meta.glob(["../IMG/*", "../IMG/**/*"], {
  eager: true,
  import: "default",
  query: "?url",
});

export const img = (path) => assetModules[`../IMG/${path}`];

export const heroSlides = [
  {
    src: img("bannerhome/bnnrhome1.jpeg"),
    mobileSrc: img("bannerhome/mobilebnnrhome1.jpeg"),
    alt: "SOS Scent of Surrender home banner",
  },
  {
    src: img("bannerhome/bnnrhome2.jpeg"),
    mobileSrc: img("bannerhome/mobilebnnrhome2.jpeg"),
    alt: "SOS Liquid Gold Eau de Parfum",
  },
  {
    src: img("bannerhome/bnnrhome3.jpeg"),
    mobileSrc: img("bannerhome/mobilebnnrhome3.jpeg"),
    alt: "SOS fragrance collection",
  },
];

export const products = [
  { name: "Liquid Gold Eau de Parfum", price: "Rs. 1,999", src: img("product/product1.webp") },
  { name: "Noir Surrender", price: "Rs. 1,799", src: img("product/product2.webp") },
  { name: "Velvet Oud", price: "Rs. 2,199", src: img("product/product3.webp") },
  { name: "Amber Muse", price: "Rs. 1,699", src: img("product/product4.webp") },
  { name: "Rose Archive", price: "Rs. 1,899", src: img("product/product5.webp") },
  { name: "Saffron Aura", price: "Rs. 2,299", src: img("product/product6.webp") },
];

export const instagramPosts = [
  img("instragram/inst1.jpeg"),
  img("instragram/inst2.png"),
  img("instragram/inst3.jpeg"),
  img("instragram/inst4.jpeg"),
  img("instragram/inst5.png"),
  img("instragram/inst6.jpeg"),
  img("instragram/inst7.jpeg"),
  img("instragram/inst8.png"),
];

export const middleVideo = img("middlevideo/video1.mp4");
export const instagramVideo = img("instragram/instvideo.mp4");
export const homeBannerPoster = img("homemdbnner.jpeg");
