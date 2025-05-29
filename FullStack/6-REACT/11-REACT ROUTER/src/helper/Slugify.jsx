// src/helper/slugify.js
const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // boşlukları "-" yap
    .replace(/[^\w\-]+/g, "") // alfanümerik olmayan karakterleri sil
    .replace(/\-\-+/g, "-"); // ardışık - işaretlerini tek - yap

export default slugify;
