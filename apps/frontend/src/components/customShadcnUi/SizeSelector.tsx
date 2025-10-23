"use client";

import { useCallback, useState } from "react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/scadcnUi/toggle-group";
import { ProductSize } from "@/types/products/product";
import { clsx } from "clsx";

type Props = {
  sizes: ProductSize[];
  onSizeSelect?: (size: ProductSize) => void;
  className?: string;
  itemClassName?: string;
};

export default function SizeSelector({
  sizes,
  onSizeSelect,
  className,
  itemClassName,
}: Props) {
  const [selected, setSelected] = useState<string>("");

  const handleChange = useCallback(
    (value: string) => {
      setSelected(value);
      const selectedSize = sizes.find((size) => size.name === value);
      if (selectedSize) {
        onSizeSelect?.(selectedSize);
      }
    },
    [sizes, onSizeSelect]
  );

  return (
    <ToggleGroup
      type="single"
      value={selected}
      onValueChange={handleChange}
      className={clsx("flex flex-wrap gap-2", className)}
    >
      {sizes.map(({ name }) => (
        <ToggleGroupItem
          key={name}
          value={name}
          aria-label={`Select ${name}`}
          className={clsx(
            "!rounded-[4rem] py-[0.75rem] px-[1.25rem] text-sm font-medium transition-colors",
            selected === name
              ? "!bg-black !text-white"
              : "!bg-[#F0F0F0] !text-black/60",
            itemClassName
          )}
        >
          {name}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
