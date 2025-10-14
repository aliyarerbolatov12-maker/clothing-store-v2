import { PriceProps } from "@/types/products/price";
import clsx from "clsx";

export default function Price({
  price,
  discountPrice = 0,
  priceSize = "text-2xl",
  discountSize = "text-base",
  percentSize = "text-lg",
}: PriceProps) {
  const discountPercent = Math.round(
    ((discountPrice - price) / discountPrice) * 100
  );

  return (
    <div className="mt-2 max-[408px]:mt-0  font-bold">
      {discountPrice ? (
        <div className="flex items-center gap-2.5">
          <span className={clsx("text-2xl", priceSize)}>${discountPrice}</span>
          <span className={clsx("line-through opacity-40", discountSize)}>
            ${price}
          </span>
          <span
            className={clsx(
              "text-[#FF3333] px-3.5 py-1.5 rounded-[3.875rem]",
              percentSize
            )}
            style={{ backgroundColor: "rgba(255, 51, 51, 0.1)" }}
          >
            {discountPercent}%
          </span>
        </div>
      ) : (
        <span className={clsx("text-2xl", priceSize)}>${price}</span>
      )}
    </div>
  );
}
