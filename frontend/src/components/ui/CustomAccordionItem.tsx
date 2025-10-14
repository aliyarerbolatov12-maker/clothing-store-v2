import {
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/scadcnUi/accordion";

type AccordionItemProps = {
  value: string;
  title: string;
  content: React.ReactNode;
  titleClassName?: string;
  contentClassName?: string;
};

export default function CustomAccordionItem({
  value,
  title,
  content,
  titleClassName,
  contentClassName,
}: AccordionItemProps) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className={titleClassName}>{title}</AccordionTrigger>
      <AccordionContent className={contentClassName}>
        {content}
      </AccordionContent>
    </AccordionItem>
  );
}
