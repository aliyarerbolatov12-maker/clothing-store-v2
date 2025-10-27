"use client";

import { useState, useMemo, useEffect } from "react";
import ProductList from "@/components/products/product/List";
import Aside from "@/layout/Aside";
import Container from "@/layout/Container";
import { products } from "@/lib/products";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/scadcnUi/sheet";
import Pagination from "@/components/customShadcnUi/Pagination";

export default function FiltersPage() {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  // useEffect(() => {
  //   const updateItems = () => {
  //     if (window.innerWidth < 468) {
  //       setItemsPerPage(4);
  //     } else if (window.innerWidth < 768) {
  //       setItemsPerPage(6);
  //     } else {
  //       setItemsPerPage(9);
  //     }
  //   };

  //   updateItems();
  //   window.addEventListener("resize", updateItems);
  //   return () => window.removeEventListener("resize", updateItems);
  // }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const currentProducts = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return products.slice(start, start + itemsPerPage);
  }, [page, itemsPerPage]);

  return (
    <Container>
      <div className="md:hidden mb-4">
        <Sheet>
          <SheetTrigger asChild>
            <button className="w-full py-2 bg-red-600 text-white font-medium rounded">
              Открыть фильтры
            </button>
          </SheetTrigger>

          <SheetContent
            side="bottom"
            className="max-h-[90vh] overflow-y-auto bg-white rounded-t-xl p-0 border-t"
          >
            <Aside />
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex gap-x-2 md:gap-x-8">
        <div className="hidden md:block w-full max-w-60">
          <Aside />
        </div>

        <div className="w-full flex flex-col relative">
          <ProductList
            productCards={currentProducts}
            className="mb-13 grid gap-5 grid-cols-2 lg:grid-cols-3 max-[30rem]:grid-cols-1"
          />

          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </div>
    </Container>
  );
}
