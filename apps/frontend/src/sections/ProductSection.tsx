import ProductList from "@/components/products/product/List";
import ViewAllButton from "@/components/ui/ViewAllButton";
import { ProductCardProps } from "@/types/products/product";

interface ProductSectionProps {
  title: string;
  products: ProductCardProps[];
  showViewAllButton?: boolean;
  maxVisible?: number;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  products,
  showViewAllButton = true,
  maxVisible = 4,
}) => {
  const visibleProducts = products.slice(0, maxVisible);

  return (
    <section>
      <h1 className="text-center mt-[72px] mb-[clamp(1rem,2.55vw,5rem)] font-bold text-[clamp(1rem,4vw,3.5rem)] font-display">
        {title}
      </h1>

      <ProductList
        productCards={visibleProducts}
        className="grid grid-cols-2 gap-5 justify-center
                   max-[460px]:grid-cols-2
                   md:grid-cols-4"
      />

      {showViewAllButton && <ViewAllButton>View All</ViewAllButton>}
    </section>
  );
};

export default ProductSection;
