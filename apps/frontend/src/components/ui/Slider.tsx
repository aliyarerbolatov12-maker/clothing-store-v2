"use client";

import React, { useImperativeHandle, forwardRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

export interface SliderRef {
  scrollPrev: () => void;
  scrollNext: () => void;
}

interface SliderProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

function SliderInner<T>(
  { items, renderItem }: SliderProps<T>,
  ref: React.Ref<SliderRef>
) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
  });

  useImperativeHandle(ref, () => ({
    scrollPrev: () => emblaApi?.scrollPrev(),
    scrollNext: () => emblaApi?.scrollNext(),
  }));

  return (
    <div className="relative">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-x-4 items-stretch px-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex-[0_0_80%] sm:flex-[0_0_60%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%]"
            >
              <div className="h-full w-full">{renderItem(item, i)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Slider = forwardRef(SliderInner) as <T>(
  props: SliderProps<T> & { ref?: React.Ref<SliderRef> }
) => ReturnType<typeof SliderInner>;

export default Slider;
