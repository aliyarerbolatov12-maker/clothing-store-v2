"use client";

import Logo from "@/components/Logo";
import Container from "./Container";
import AllSocialLogos from "@/components/AllSocialLogos";
import FooterColumn from "@/components/footer/FooterColumn";
import StayInformed from "@/sections/StayInformed";
import FooterLinksList from "@/components/footer/FooterLinksList";
import { Accordion as UIAccordion } from "@/components/ui/scadcnUi/accordion";
import AccordionItem from "@/components/ui/CustomAccordionItem";
import useIsBelow1025 from "@/hooks/useIsBelow1025";

const footerData = [
  {
    title: "Company",
    links: [
      { text: "About", href: "/about" },
      { text: "Features", href: "/features" },
      { text: "Works", href: "/works" },
      { text: "Career", href: "/career" },
    ],
  },
  {
    title: "Help",
    links: [
      { text: "Customer Support", href: "/support" },
      { text: "Delivery Details", href: "/delivery" },
      { text: "Terms & Conditions", href: "/terms" },
      { text: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    title: "FAQ",
    links: [
      { text: "Account", href: "/account" },
      { text: "Manage Deliveries", href: "/deliveries" },
      { text: "Orders", href: "/orders" },
      { text: "Payments", href: "/payments" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "Free eBooks", href: "/ebooks" },
      { text: "Development Tutorial", href: "/tutorial" },
      { text: "How to - Blog", href: "/blog" },
      { text: "Youtube Playlist", href: "https://youtube.com/playlist" },
    ],
  },
];

export default function Footer() {
  const isMobile = useIsBelow1025();

  return (
    <>
      <Container>
        <div className="relative z-10 -mb-[100px]">
          <StayInformed />
        </div>
      </Container>

      <footer className="bg-[#F0F0F0] pt-[100px]">
        <Container className="py-12">
          <ul className="flex flex-col gap-y-12 lg:flex-row lg:justify-between">
            <li>
              <Logo className="mb-6" />
              <p className="text-[14px] max-w-[250px] leading-6 text-[rgba(0,0,0,0.6)] mb-5.5">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <AllSocialLogos />
            </li>

            <li className="flex justify-between">
              {isMobile ? (
                <UIAccordion className="flex-1" type="single" collapsible>
                  {footerData.map(({ title, links }, i) => (
                    <AccordionItem
                      key={title}
                      value={`item-${i}`}
                      title={title}
                      content={<FooterLinksList links={links} />}
                    />
                  ))}
                </UIAccordion>
              ) : (
                <div className="flex flex-col gap-x-8 lg:flex-row  w-full">
                  {footerData.map(({ title, links }) => (
                    <FooterColumn key={title} title={title} links={links} />
                  ))}
                </div>
              )}
            </li>
          </ul>
        </Container>
      </footer>
    </>
  );
}
