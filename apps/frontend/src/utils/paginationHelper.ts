interface PaginationConfig {
  maxVisible?: number;
  showFirstLast?: boolean;
  showEllipsis?: boolean;
}

export default function getPages(
  currentPage: number,
  totalPages: number,
  config: PaginationConfig = {}
): (number | "ellipsis")[] {
  const { maxVisible = 3, showFirstLast = true, showEllipsis = true } = config;
  const pages: (number | "ellipsis")[] = [];

  if (currentPage < 1 || currentPage > totalPages) {
    throw new Error("currentPage must be between 1 and totalPages");
  }

  if (totalPages <= maxVisible + 4) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    const half = Math.floor(maxVisible / 2);
    let start = currentPage - half;
    let end = currentPage + half;

    if (start < 2) {
      start = 2;
      end = start + maxVisible - 1;
    } else if (end > totalPages - 1) {
      end = totalPages - 1;
      start = end - maxVisible + 1;
    }

    if (showFirstLast) pages.push(1);
    if (showEllipsis && start > 2) pages.push("ellipsis");

    for (let i = start; i <= end; i++) pages.push(i);

    if (showEllipsis && end < totalPages - 1) pages.push("ellipsis");
    if (showFirstLast) pages.push(totalPages);
  }

  return pages;
}
