"use client";

import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/scadcnUi/button";

type CounterProps = {
  value: number;
  onChange: Dispatch<SetStateAction<number>>;
  min?: number;
  max?: number;
};

export default function Counter({
  value,
  onChange,
  min = 1,
  max = 100,
}: CounterProps) {
  const decrease = () => {
    if (value > min) onChange(value - 1);
  };

  const increase = () => {
    if (value < max) onChange(value + 1);
  };

  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#F0F0F0] px-5 py-2">
      <Button
        variant="ghost"
        onClick={decrease}
        disabled={value <= min}
        className="w-6 h-6 p-0 text-lg"
      >
        −
      </Button>
      <span className="min-w-6 text-center text-base font-semibold">
        {value}
      </span>
      <Button
        variant="ghost"
        onClick={increase}
        disabled={value >= max}
        className="w-6 h-6 p-0 text-lg"
      >
        +
      </Button>
    </span>
  );
}
