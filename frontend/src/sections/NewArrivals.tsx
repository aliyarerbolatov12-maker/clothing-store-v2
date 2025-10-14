import ProductList from "@/components/products/product/List";
import ViewAllButton from "@/components/ui/ViewAllButton";
import { products } from "@/lib/products";

export default function NewArrivals() {
  return (
    <section>
      <h1 className="text-center mt-[72px]  mb-[clamp(1rem,2.55vw,5rem)] font-bold text-[clamp(1rem,4vw,3.5rem)] font-display">
        New Arrivals
      </h1>
      <ProductList
        productCards={products}
        className="grid grid-cols-2 gap-5 justify-center [&>*:nth-child(n+5)]:hidden
            max-[460px]:[&>*:nth-child(n+3)]:hidden
            md:grid-cols-4"
      />
      <ViewAllButton>View All</ViewAllButton>
    </section>
  );
}
