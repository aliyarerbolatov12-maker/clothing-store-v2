"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/scadcnUi/tabs";
import { useState } from "react";
import clsx from "clsx";
import ProductFaqs from "./ProductFaqs";
import ProductDetailsTable from "./ProductDetailsTable";
import ProductReviews from "./ProductReviews";
import {
  ProductFaq,
  ProductDetailsTableProps,
  ProductReview,
} from "@/types/products/product";
import ViewAllButton from "@/components/ui/ViewAllButton";
import RecomendedProduct from "@/sections/RecomendedProduct";

type ProductTabsProps = {
  description: string;
  faqs: ProductFaq[];
  detailsTable: ProductDetailsTableProps[];
  reviews: ProductReview[];
};

export default function ProductTabs({
  detailsTable,
  faqs,
  reviews,
}: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState("details");

  const TABS = [
    {
      value: "details",
      label: "Details",
      content: (
        <div>
          <h3 className="text-2xl font-bold mt-10 mb-4">Details</h3>
          <ProductDetailsTable details={detailsTable} />
        </div>
      ),
    },
    {
      value: "reviews",
      label: "Reviews",
      content: (
        <div>
          <h3 className="text-2xl font-bold mt-10 mb-4">All Reviews</h3>
          <ProductReviews reviews={reviews} />
          <ViewAllButton>Load More Reviews</ViewAllButton>
        </div>
      ),
    },
    {
      value: "faqs",
      label: "FAQs",
      content: <ProductFaqs faqs={faqs} />,
    },
  ];

  return (
    <Tabs
      defaultValue="details"
      className="mb-[3rem]"
      onValueChange={setActiveTab}
    >
      <TabsList className="w-full !bg-transparent flex">
        {TABS.map(({ value, label }) => (
          <TabsTrigger
            key={value}
            value={value}
            className="flex-1 text-gray-500 !shadow-none !bg-transparent"
          >
            {label}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="flex h-[2px]">
        {TABS.map(({ value }) => (
          <div
            key={value}
            className={clsx(
              "w-[33.33%] transition-all duration-200",
              activeTab === value ? "bg-black" : "bg-gray-200"
            )}
          />
        ))}
      </div>

      {TABS.map(({ value, content }) => (
        <TabsContent key={value} value={value}>
          {content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
