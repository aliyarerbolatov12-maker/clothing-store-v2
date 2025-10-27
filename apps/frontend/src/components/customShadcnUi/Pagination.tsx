import React, { useMemo } from "react";
import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/scadcnUi/pagination";
import getPages from "@/utils/paginationHelper";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  config?: {
    maxVisible?: number;
    showFirstLast?: boolean;
    showEllipsis?: boolean;
  };
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  config = {},
}: PaginationProps) {
  const pages = useMemo(
    () => getPages(currentPage, totalPages, config),
    [currentPage, totalPages, config]
  );

  return (
    <PaginationRoot className="mb-20">
      <PaginationContent>
        <PaginationItem className="absolute left-0">
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
          />
        </PaginationItem>

        {pages.map((p, i) =>
          p === "ellipsis" ? (
            <PaginationItem key={`ellipsis-${i}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                isActive={p === currentPage}
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(p);
                }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        <PaginationItem className="absolute right-0">
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationRoot>
  );
}
