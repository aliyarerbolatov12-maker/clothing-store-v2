import Link from "next/link";
import ProductCard from "./Card";

type Product = {
  id: string;
  srcImg: string;
  productName: string;
  rating: number;
  price: number;
};

type Props = {
  productCards: Product[];
  className?: string;
};

export default function ProductList({ productCards, className }: Props) {
  return (
    <div className={className}>
      {productCards.map((element) => (
        <Link href={`/productInfo/${element.id}`} key={element.id}>
          <ProductCard
            srcImg={element.srcImg}
            productName={element.productName}
            rating={element.rating}
            price={element.price}
          />
        </Link>
      ))}
    </div>
  );
}
