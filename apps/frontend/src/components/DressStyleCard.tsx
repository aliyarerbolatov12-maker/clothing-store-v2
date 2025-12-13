import Image from "next/image";
import Link from "next/link";

export default function DressStyleCard({
  image,
  title,
  className = "",
}: {
  image: string;
  title: string;
  className?: string;
}) {
  return (
    <Link
      href={`/category/${title.toLowerCase()}`}
      className={`block ${className}`}
    >
      <div className="relative rounded-lg overflow-hidden bg-gray-200 h-full w-full">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-full max-[390px]:h-[170px] object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
          sizes="(max-width: 390px) 100vw, (max-width: 1024px) 33vw, 25vw"
        />
        <h3 className="absolute top-0 left-0 pt-[clamp(0.5rem,1.73vw,2rem)] pl-[clamp(0.5rem,2.5vw,2rem)] text-[clamp(0.5rem,2vw,3rem)] max-[390px]:text-[1rem] font-bold text-black">
          {title}
        </h3>
      </div>
    </Link>
  );
}
