import Link from "next/link";
import Container from "@/layout/Container";
import Image from "next/image";
import Brands from "@/sections/Brands";

const stats = [
  { value: "200+", label: "International Brands" },
  { value: "2,000+", label: "High-Quality Products" },
  { value: "30,000+", label: "Happy Customers" },
];

export default function Hero() {
  return (
    <section className="bg-[#F2F0F1] overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          <div className="w-full pt-[clamp(2rem,2vw,5rem)] lg:max-w-[570px] flex flex-col">
            <h1 className="font-display font-bold text-[clamp(1.5rem,4.44vw,3rem)] leading-none mb-6">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>

            <p className="font-sans max-w-[555px] leading-[clamp(1.25rem,2.5vw,1.75rem)] mb-8">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>

            <Link
              href="/shops"
              className="w-full sm:w-auto text-center py-4 px-8 bg-black text-white 
              font-medium font-sans rounded-[70px] hover:bg-gray-800 transition-colors"
            >
              Shop now
            </Link>

            <ul className="mt-12 flex  justify-center sm:flex-row gap-[clamp(1rem,2vw,4rem)]">
              {stats.map(({ value, label }) => (
                <li key={label} className="flex flex-col items-start">
                  <b className="font-bold text-[clamp(1.375rem,3.5vw,2.125rem)]">
                    {value}
                  </b>
                  <p className="mt-1 text-sm">{label}</p>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="w-full max-w-[800px] 
            flex items-end justify-center 
            h-[clamp(500px,70vh,600px)] 
            max-[880px]:h-[clamp(250px,70vh,400px)]
            max-[510px]:h-[clamp(250px,70vh,300px)] "
          >
            <Image
              src="/images/background/t.jpg"
              alt="two people clothing"
              width={900}
              height={900}
              priority
              className="w-full h-full object-contain object-bottom"
            />
          </div>
        </div>
      </Container>

      <Brands />
    </section>
  );
}
