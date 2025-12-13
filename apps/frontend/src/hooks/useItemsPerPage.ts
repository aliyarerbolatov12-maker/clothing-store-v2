"use client";

import { useEffect, useState } from "react";

export function useItemsPerPage() {
  const [itemsPerPage, setItemsPerPage] = useState(9);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 467px)");
    const tablet = window.matchMedia("(max-width: 767px)");

    const update = () => {
      if (mobile.matches) setItemsPerPage(4);
      else if (tablet.matches) setItemsPerPage(6);
      else setItemsPerPage(9);
    };

    update();

    mobile.addEventListener("change", update);
    tablet.addEventListener("change", update);

    return () => {
      mobile.removeEventListener("change", update);
      tablet.removeEventListener("change", update);
    };
  }, []);

  return itemsPerPage;
}
