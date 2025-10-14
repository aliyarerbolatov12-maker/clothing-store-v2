import { PriceProps } from "./price";

export interface Color {
  name: string;
  hex: string;
}

export interface ProductSize {
  name: string;
}

export interface ProductFaq {
  title: string;
  content: string;
}

export interface ProductDetailsTableProps {
  label: string;
  value: string;
}

export interface ProductReview {
  author: string;
  content: string;
  date: string;
}

export interface ProductCardProps extends PriceProps {
  id: string;
  srcImg: string;
  productName: string;
  description?: string;
  faqs: ProductFaq[];
  colorsName: Color[];
  sizes: ProductSize[];
  rating: number;
  detailsTable: ProductDetailsTableProps[];
  reviews: ProductReview[];
}
