"use client";

import { useCallback, useState } from "react";
import { Check } from "lucide-react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/scadcnUi/toggle-group";
import { Color } from "@/types/products/product";
import clsx from "clsx";
import getContrastColor from "@/utils/colorUtils";

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
