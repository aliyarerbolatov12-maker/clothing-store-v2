import Loop from "@/assets/icons/loop.svg?react";

type Props = {
  className?: string;
};

export default function Search({ className }: Props) {
  return (
    <div
      className={`flex items-center
        w-[min(580px,100vw)] py-2 bg-[#F0F0F0] rounded-full
        max-search:w-auto max-search:p-0 max-search:bg-transparent max-search:rounded-none
        ${className ?? ""}
      `}
    >
      <Loop className="shrink-0 flex-none  mx-3.5 max-search:mx-0" />
      <input
        type="text"
        placeholder="Search for products"
        className="grow  pr-4 outline-none max-search:hidden"
      />
    </div>
  );
}
