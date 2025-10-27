import { useEffect } from "react";

export default function useClickOutside(
  refs: React.RefObject<HTMLElement | null>[],
  callback: () => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (refs.every((ref) => !ref.current?.contains(event.target as Node))) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, callback]);
}
