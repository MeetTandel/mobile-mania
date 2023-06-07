import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "iphone",
    img: "https://res.cloudinary.com/djxpf0jzi/image/upload/v1686057235/Neog%20Ecommerce/iphone-category_henf4z.jpg"
  },
  {
    _id: uuid(),
    categoryName: "android",
    img: "https://res.cloudinary.com/djxpf0jzi/image/upload/v1686057235/Neog%20Ecommerce/android-category_pnexmy.jpg"
  },
  {
    _id: uuid(),
    categoryName: "feature phones",
    img: "https://res.cloudinary.com/djxpf0jzi/image/upload/v1686057235/Neog%20Ecommerce/feature-phones-category_ia541s.jpg"
  },
];
