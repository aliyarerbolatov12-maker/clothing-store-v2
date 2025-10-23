"use client";

import { Accordion } from "@/components/ui/scadcnUi/accordion";
import AccordionItem from "@/components/ui/CustomAccordionItem";
import { ProductCardProps } from "@/types/products/product";

type ProductFaqsProps = {
  faqs: ProductCardProps["faqs"];
};

export default function ProductFaqs({ faqs }: ProductFaqsProps) {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold mb-4">FAQs</h3>
      <Accordion type="single" collapsible className="flex flex-col gap-2">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`faq-${index}`}
            title={faq.title}
            content={
              <p className="text-sm text-muted-foreground">{faq.content}</p>
            }
          />
        ))}
      </Accordion>
    </div>
  );
}
