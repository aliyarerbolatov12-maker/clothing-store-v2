"use client";

import RatingStars from "@/components/RatingStars";
import { ProductCardProps } from "@/types/products/product";
import Image from "next/image";
import Price from "../components/Price";
import ColorSelector from "@/components/customShadcnUi/ColorSelector";
import SizeSelector from "@/components/customShadcnUi/SizeSelector";
import Counter from "@/components/ui/Counter";
import { Button } from "@/components/ui/scadcnUi/button";
import ProductTabs from "../components/ProductTabs";
import RecomendedProduct from "@/sections/RecomendedProduct";

export default function FullInfo({
  srcImg,
  productName,
  rating,
  price,
  discountPrice,
  description,
  colorsName,
  sizes,
  faqs,
  detailsTable,
  reviews,
}: ProductCardProps) {
  return (
    <section>
      <div className="border-t border-gray-200 mt-6 mb-20" />

      <div className="flex flex-col lg:flex-row gap-x-10 gap-y-10 mb-20 px-4">
        {/* Image Block */}
        <div className="w-full lg:max-w-[444px] flex-shrink-0">
          <div className="relative w-full aspect-[444/530] overflow-hidden rounded-[1.25rem]">
            <Image
              src={srcImg}
              alt={productName}
              fill
              className="object-cover rounded-[1.25rem]"
            />
          </div>
        </div>

        {/* Content Block */}
        <div className="flex flex-col justify-start w-full">
          <h2 className="font-bold text-[clamp(1.5rem,3.33vw,2.5rem)]">
            {productName}
          </h2>

          <RatingStars
            rating={rating}
            starSize="w-6 h-6"
            textSize="text-[1.5rem]"
            className="-mt-2"
          />

          <Price
            price={price}
            discountPrice={discountPrice}
            priceSize="text-[2rem]"
            discountSize="text-[2rem]"
            percentSize="text-[1.5rem]"
          />

          <p className="font-sans text-[1rem] opacity-60 mb-3">{description}</p>

          {/* Color Selector */}
          <div className="border-t border-gray-200 pt-4 mb-3">
            <p className="text-[1rem] font-medium opacity-60 mb-1">
              Select Colors
            </p>
            <div className="max-w-full overflow-x-auto">
              <ColorSelector
                colors={colorsName}
                onColorSelect={(color) => {
                  console.log("Selected color:", color);
                }}
              />
            </div>
          </div>

          {/* Size Selector */}
          <div className="border-t border-gray-200 pt-4 mb-4">
            <p className="text-[1rem] font-medium opacity-60 mb-1">
              Choose Size
            </p>
            <SizeSelector sizes={sizes} />
          </div>

          {/* Add to Cart */}
          <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
            <Counter />
            <Button className="text-[1rem] w-full sm:w-auto px-[4rem] sm:px-[10rem] py-5 rounded-[4rem]">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <ProductTabs
        description={description ?? ""}
        faqs={faqs}
        detailsTable={detailsTable}
        reviews={reviews}
      />

      <RecomendedProduct />
      <div className="mb-20" />
    </section>
  );
}
