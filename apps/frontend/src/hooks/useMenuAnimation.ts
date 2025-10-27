import { useEffect, useState } from "react";

export default function useMenuAnimation(isOpen: boolean) {
  const [animationClass, setAnimationClass] = useState("translate-x-full");

  useEffect(() => {
    if (isOpen) {
      setAnimationClass("translate-x-0");
    } else {
      setAnimationClass("translate-x-full");
    }
  }, [isOpen]);

  return animationClass;
}
