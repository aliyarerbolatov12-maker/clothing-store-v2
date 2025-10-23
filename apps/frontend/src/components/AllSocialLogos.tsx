import Facebook from "@/assets/logos/social/facebook.svg?react";
import Twitter from "@/assets/logos/social/twitter.svg?react";
import Instagram from "@/assets/logos/social/instagram.svg?react";
import Github from "@/assets/logos/social/github.svg?react";

type Props = {
  className?: string;
  circleSize?: string;
};

export default function AllSocialLogos({ className = "" }: Props) {
  const SocialIcon = ({
    Icon,
    href,
  }: {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    href: string;
  }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group flex items-center justify-center        
        rounded-full bg-white
        border border-black/20
        hover:bg-black hover:border-black
        transition-colors duration-200
        w-8 h-8
        cursor-pointer
      `}
    >
      <Icon className={`${className} w-5 h-5 group-hover:fill-white`} />
    </a>
  );

  return (
    <div className="flex gap-3">
      <SocialIcon Icon={Facebook} href="https://facebook.com" />
      <SocialIcon Icon={Twitter} href="https://twitter.com" />
      <SocialIcon Icon={Instagram} href="https://instagram.com" />
      <SocialIcon Icon={Github} href="https://github.com" />
    </div>
  );
}
