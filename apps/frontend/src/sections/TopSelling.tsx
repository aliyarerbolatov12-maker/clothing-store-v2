import ProductSection from "./ProductSection";
import { products } from "@/lib/products";

export default function TopSelling() {
  return <ProductSection title="Top Selling" products={products} />;
}
