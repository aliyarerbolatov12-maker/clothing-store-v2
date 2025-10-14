"use client";

import { useRef } from "react";
import Slider, { SliderRef } from "@/components/ui/Slider";
import { reviews } from "@/lib/reviews";
import Review from "../ui/Review";

export default function HappyCustomerSlider() {
  const sliderRef = useRef<SliderRef>(null);

  return (
    <section className="w-full mx-auto px-4 my-20 md:my-20">
      <div className="flex items-center justify-between mb-10 max-w-7xl mx-auto">
        <h2 className="text-[1.8rem] md:text-[3rem] font-bold font-display text-[#000000]">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="flex gap-2 xs:gap-4">
          <button
            onClick={() => sliderRef.current?.scrollPrev()}
            className="bg-white text-[1.5rem] xs:text-3xl rounded-ful"
          >
            ⬅️
          </button>
          <button
            onClick={() => sliderRef.current?.scrollNext()}
            className="bg-white text-[1.5rem] xs:text-3xl rounded-full "
          >
            ➡️
          </button>
        </div>
      </div>

      <Slider
        ref={sliderRef}
        items={reviews}
        renderItem={(review) => <Review {...review} />}
      />
    </section>
  );
}
