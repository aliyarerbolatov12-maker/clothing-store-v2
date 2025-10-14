type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <h1
      className={`font-display font-bold   min-[21.25rem]:text-3xl max-[21.25rem]:text-lg pb-1.5 leading-none  ${
        className ?? ""
      }`}
    >
      SHOP.CO
    </h1>
  );
}
