import clsx from "clsx";
import StarFull from "@/assets/icons/stars/starFull.svg?react";
import StarHalf from "@/assets/icons/stars/starHalf.svg?react";
import { RatingStarsProps } from "@/types/ui/ratingStar";

export default function RatingStars({
  rating,
  className = "",
  isText = true,
  starSize = "w-5 h-5",
  textSize = "text-lg",
}: RatingStarsProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className={clsx("flex flex-wrap items-center gap-1", className)}>
      <div className="flex gap-x-1">
        {[...Array(fullStars)].map((_, i) => (
          <StarFull key={i} className={clsx(starSize)} />
        ))}
        {hasHalfStar && <StarHalf className={clsx(starSize)} />}
      </div>

      {isText && (
        <span className={clsx("font-bold", textSize, "ml-2 max-[468px]:ml-0")}>
          {rating.toFixed(1)} / <span className="text-gray-500">5</span>
        </span>
      )}
    </div>
  );
}
