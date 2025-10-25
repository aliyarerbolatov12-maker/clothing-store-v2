import ProductSection from "./ProductSection";
import { products } from "@/lib/products";

export default function RecomendedProduct() {
  return (
    <ProductSection
      title="You might also like"
      products={products}
      showViewAllButton={false}
    />
  );
}
