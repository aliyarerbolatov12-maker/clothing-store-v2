import Image from "next/image";
import RatingStars from "../../RatingStars";
import Price from "../components/Price";
import { ProductCardProps } from "@/types/products/product";

export default function ProductCard({
  srcImg,
  productName,
  rating,
  price,
  discountPrice,
}: ProductCardProps) {
  return (
    <div>
      <div className="w-full  max-w-[270px] overflow-hidden rounded-[1.25rem]">
        <Image
          src={srcImg}
          alt={productName}
          width={270}
          height={380}
          className="w-full h-auto object-cover rounded-[1.25rem]"
        />
      </div>

      <h2 className="font-bold text-[clamp(0.9rem,1.3vw,1.2rem)] mt-2">
        {productName}
      </h2>

      <RatingStars
        rating={rating}
        className="mt-2"
        starSize="w-5 h-5"
        textSize="text-[0.8rem]"
      />
      <Price price={price} discountPrice={discountPrice} />
    </div>
  );
}
