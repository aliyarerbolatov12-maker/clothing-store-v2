import ProductSection from "./ProductSection";
import { products } from "@/lib/products";

export default function NewArrivals() {
  return <ProductSection title="New Arrivals" products={products} />;
}
