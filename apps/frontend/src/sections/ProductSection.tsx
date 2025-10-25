import ProductList from "@/components/products/product/List";
import ViewAllButton from "@/components/ui/ViewAllButton";
import { ProductCardProps } from "@/types/products/product";

interface ProductSectionProps {
  title: string;
  products: ProductCardProps[];
  showViewAllButton?: boolean;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  products,
  showViewAllButton = true,
}) => (
  <section>
    <h1 className="text-center mt-[72px] mb-[clamp(1rem,2.55vw,5rem)] font-bold text-[clamp(1rem,4vw,3.5rem)] font-display">
      {title}
    </h1>
    <ProductList
      productCards={products}
      className="grid grid-cols-2 gap-5 justify-center [&>*:nth-child(n+5)]:hidden
          max-[460px]:[&>*:nth-child(n+3)]:hidden
          md:grid-cols-4"
    />
    {showViewAllButton && <ViewAllButton>View All</ViewAllButton>}
  </section>
);

export default ProductSection;
