"use client";

import { useCallback, useState } from "react";
import { Check } from "lucide-react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/scadcnUi/toggle-group";
import { Color } from "@/types/products/product";
import clsx from "clsx";

type Props = {
  colors: Color[];
  onColorSelect?: (color: Color) => void;
  className?: string;
};

export default function ColorSelector({
  colors,
  onColorSelect,
  className,
}: Props) {
  const [selected, setSelected] = useState<string>("");

  const handleChange = useCallback(
    (value: string) => {
      setSelected(value);
      const selectedColor = colors.find((color) => color.name === value);
      if (selectedColor) {
        onColorSelect?.(selectedColor);
      }
    },
    [colors, onColorSelect]
  );

  function getContrastColor(hex: string): "black" | "white" {
    const cleanHex = hex.replace("#", "");
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);

    const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    return brightness > 128 ? "black" : "white";
  }

  return (
    <ToggleGroup
      type="single"
      value={selected}
      onValueChange={handleChange}
      className={clsx("flex gap-2", className)}
    >
      {colors.map(({ name, hex }) => {
        const textColor = getContrastColor(hex);

        return (
          <ToggleGroupItem
            key={name}
            value={name}
            aria-label={`Select ${name}`}
            className="w-8 h-8 !rounded-full border-2 p-0 overflow-hidden"
            style={{ backgroundColor: hex }}
          >
            {selected === name && (
              <Check className="w-4 h-4" style={{ color: textColor }} />
            )}
          </ToggleGroupItem>
        );
      })}
    </ToggleGroup>
  );
}
