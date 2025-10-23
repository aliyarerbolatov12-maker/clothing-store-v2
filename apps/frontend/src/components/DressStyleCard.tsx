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
      <div className="relative   rounded-lg overflow-hidden bg-gray-200 h-full w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full max-[390px]:h-[170px] object-cover  hover:scale-105 transition-transform duration-300"
        />
        <h3 className="absolute top-0 left-0 pt-[clamp(0.5rem,1.73vw,2rem)] pl-[clamp(0.5rem,2.5vw,2rem)] text-[clamp(0.5rem,2vw,3rem)] max-[390px]:text-[1rem] font-bold text-black">
          {title}
        </h3>
      </div>
    </Link>
  );
}
