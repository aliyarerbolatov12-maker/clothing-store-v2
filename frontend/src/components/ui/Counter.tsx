"use client";

import { useState } from "react";
import { Button } from "@/components/ui/scadcnUi/button";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#F0F0F0] px-5 py-2">
      <Button
        variant="ghost"
        onClick={decrease}
        disabled={count === 0}
        className="w-[24px] h-[24px] p-0 text-lg"
      >
        −
      </Button>
      <span className="min-w-[24px] text-center text-base font-semibold">
        {count}
      </span>
      <Button
        variant="ghost"
        onClick={increase}
        className="w-[24px] h-[24px] p-0 text-lg"
      >
        +
      </Button>
    </span>
  );
}
