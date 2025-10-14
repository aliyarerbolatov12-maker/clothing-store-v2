import Link from "next/link";
import { LinkItem } from "@/types/link";

type Props = {
  links: LinkItem[];
  className?: string;
};

export default function FooterLinksList({ links, className = "" }: Props) {
  return (
    <ul className={`flex flex-col gap-3 ${className}`}>
      {links.map(({ text, href }) => {
        const isExternal = href.startsWith("http");
        return (
          <li key={text}>
            {isExternal ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-black"
              >
                {text}
              </a>
            ) : (
              <Link
                href={href}
                className="text-sm text-gray-600 hover:text-black"
              >
                {text}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
