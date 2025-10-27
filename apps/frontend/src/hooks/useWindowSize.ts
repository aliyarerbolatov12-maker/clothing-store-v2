import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [size, setSize] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
