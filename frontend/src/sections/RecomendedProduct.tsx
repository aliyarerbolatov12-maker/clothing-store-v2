import ProductList from "@/components/products/product/List";
import ViewAllButton from "@/components/ui/ViewAllButton";
import { products } from "@/lib/products";

export default function RecomendedProduct() {
  return (
    <section>
      <h1 className="text-center  mb-[clamp(1rem,4.55vw,5rem)] font-bold text-[clamp(1rem,4vw,3.5rem)] font-display ">
        You might also like
      </h1>
      <ProductList
        productCards={products}
        className="grid grid-cols-2 gap-5 justify-center [&>*:nth-child(n+5)]:hidden
            max-[460px]:[&>*:nth-child(n+3)]:hidden
            md:grid-cols-4"
      />
    </section>
  );
}
