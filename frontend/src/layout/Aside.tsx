"use client";

import { useState } from "react";
import { Accordion } from "@/components/ui/scadcnUi/accordion";
import CustomAccordionItem from "@/components/ui/CustomAccordionItem";
import ColorSelector from "@/components/customShadcnUi/ColorSelector";
import SizeSelector from "@/components/customShadcnUi/SizeSelector";
import CheckBoxGroup from "@/components/customShadcnUi/CheckBoxGroup";
import PriceSlider from "@/components/ui/PriceSlider";
import { Button } from "@/components/ui/scadcnUi/button";

export default function Aside() {
  const [selectedFilters, setSelectedFilters] = useState<Set<string>>(
    new Set()
  );
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    new Set()
  );

  const colors = [
    { name: "green", hex: "#00C12B" },
    { name: "red", hex: "#FF0000" },
    { name: "yellow", hex: "#FFFF00" },
    { name: "orange", hex: "#FFA500" },
    { name: "blue", hex: "#06CAF5" },
    { name: "brightBlue", hex: "#063AF5" },
    { name: "purple", hex: "#7D06F5" },
    { name: "pink", hex: "#FFC0CB" },
    { name: "white", hex: "#FFFFFF" },
    { name: "black", hex: "#000000" },
  ];

  const sizes = [
    { name: "XX-Small" },
    { name: "X-Small" },
    { name: "Small" },
    { name: "Meduim" },
    { name: "Large" },
    { name: "X-Large" },
    { name: "XX-Large" },
    { name: "3X-Large" },
    { name: "4X-Large" },
  ];

  const dressStyle = ["Casual", "Formal", "Party", "Gym"];
  const categories = ["T-shirts", "Shorts", "Shirts", "Hoodies", "Jeans"];

  return (
    <aside
      className="w-full border px-5 py-5 rounded-2xl
    md:max-w-[14.3rem]
    md:px-3"
    >
      <h1 className="font-bold text-[1.25rem] mb-4">Filters</h1>

      <Accordion
        type="multiple"
        defaultValue={["category", "price", "color", "size", "dress-style"]}
      >
        <CustomAccordionItem
          value="category"
          title="Category"
          titleClassName="text-[1.25rem] font-bold"
          content={
            <CheckBoxGroup
              options={categories}
              selected={selectedCategories}
              onChange={setSelectedCategories}
            />
          }
        />
        <CustomAccordionItem
          value="price"
          title="Price"
          titleClassName="text-[1.25rem] font-bold"
          contentClassName="px-5"
          content={<PriceSlider />}
        />
        <CustomAccordionItem
          value="color"
          title="Color"
          titleClassName="text-[1.25rem] font-bold"
          content={
            <ColorSelector
              colors={colors}
              className="grid grid-cols-5 text-[1.25rem]"
            />
          }
        />
        <CustomAccordionItem
          value="size"
          title="Size"
          titleClassName="text-[1.25rem] font-bold"
          content={
            <SizeSelector sizes={sizes} className="grid grid-cols-2 gap-2" />
          }
        />
        <CustomAccordionItem
          value="dress-style"
          title="Dress Style"
          titleClassName="text-[1.25rem] font-bold"
          content={
            <CheckBoxGroup
              options={dressStyle}
              selected={selectedFilters}
              onChange={setSelectedFilters}
            />
          }
        />
      </Accordion>

      <Button className="w-full rounded-[4rem] mt-4">Apply filter</Button>
    </aside>
  );
}
