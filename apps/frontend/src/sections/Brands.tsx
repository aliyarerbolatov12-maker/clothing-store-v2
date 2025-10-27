const brands = [
  { src: "/images/logos/brands/versace.svg", alt: "versace" },
  { src: "/images/logos/brands/zara.svg", alt: "zara" },
  { src: "/images/logos/brands/gucci.svg", alt: "gucci" },
  { src: "/images/logos/brands/prada.svg", alt: "prada" },
  { src: "/images/logos/brands/calvinKlein.svg", alt: "calvinKlein" },
];

const duplicated = [...brands, ...brands];

export default function Brands() {
  return (
    <section className="bg-black py-[clamp(1rem,4vw,2rem)] overflow-hidden relative">
      <div
        className="relative w-full"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <div className="flex animate-scroll gap-9 w-max">
          {duplicated.map(({ src, alt }, i) => (
            <div
              key={alt + i}
              className="flex items-center justify-center h-10 shrink-0 transition-opacity duration-200 hover:opacity-80"
            >
              <img
                src={src}
                alt={alt}
                className="h-full w-auto object-contain max-w-[150px]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
