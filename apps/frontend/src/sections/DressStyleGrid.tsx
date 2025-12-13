import DressStyleCard from "@/components/DressStyleCard";

export default function DressStyleGrid() {
  return (
    <section className="mt-[clamp(1rem,5.55vw,5rem)] bg-[#F0F0F0] rounded-[40px] max-[390px]:rounded-[20px] px-[clamp(1rem,4vw,4rem)] pb-[clamp(1rem,5.55vw,3rem)]">
      <h1 className="text-[clamp(1.5rem,4vw,3.5rem)]  max-[390px]:leading-5 font-display text-center py-[clamp(1.5rem,5.55vw,3rem)]">
        BROWSE BY DRESS STYLE
      </h1>

      <div className="grid grid-cols-1 min-[390px]:grid-cols-3 gap-3 max-[390px]:gap-2 auto-rows-[1fr]">
        <DressStyleCard
          title="CASUAL"
          image="/images/browserDressStyle/casual.webp"
        />
        <DressStyleCard
          title="FORMAL"
          image="/images/browserDressStyle/formal.webp"
          className="col-span-1 min-[390px]:col-span-2"
        />
        <DressStyleCard
          title="PARTY"
          image="/images/browserDressStyle/party.webp"
          className="col-span-1 min-[390px]:col-span-2"
        />
        <DressStyleCard
          title="GYM"
          image="/images/browserDressStyle/gym.webp"
        />
      </div>
    </section>
  );
}
