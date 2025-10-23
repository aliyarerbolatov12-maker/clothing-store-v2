"use client";

import { LinkItem } from "@/types/link";
import FooterLinksList from "./FooterLinksList";

type Props = {
  title: string;
  links: LinkItem[];
};

export default function FooterColumn({ title, links }: Props) {
  return (
    <div className="flex flex-col">
      <h3 className="font-bold text-lg mb-4 md:mb-6 text-gray-900">{title}</h3>
      <FooterLinksList links={links} />
    </div>
  );
}
