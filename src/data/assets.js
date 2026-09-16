import productData from "./products.json";

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

export const products = productData.map((product) => ({
  ...product,
  src: img(product.image),
}));

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
