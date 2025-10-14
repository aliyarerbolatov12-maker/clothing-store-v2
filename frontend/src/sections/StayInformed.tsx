import Email from "../assets/icons/email.svg?react";
import clsx from "clsx";

type StayInformedProps = {
  className?: string;
};

export default function StayInformed({ className }: StayInformedProps) {
  return (
    <section
      className={`
      flex flex-col min-[860px]:flex-row items-center justify-between gap-8
      px-[clamp(1rem,4vw,4rem)] py-[clamp(1rem,2.5vw,3rem)] max-w-[1440px] 
      mx-auto bg-black text-white rounded-2xl md:rounded-3xl ${className}`}
    >
      <h1 className="font-display  min-[425px]:text-center min-[860px]:text-left leading-tight text-[clamp(1.5rem,5vw,2.5rem)]">
        STAY UP TO DATE ABOUT OUR LATEST OFFERS
      </h1>

      <form className="w-full max-w-[26rem] flex flex-col gap-4">
        <div className="flex items-center bg-white rounded-full  focus-within:ring-2 focus-within:ring-blue-500">
          <div className="flex-none pl-4 pr-1">
            <Email className="text-gray-500 w-6 h-6 " />
          </div>
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="flex-grow bg-transparent text-black placeholder:text-gray-500 px-4 
            py-3 text-base leading-normal text-left focus:outline-none  "
          />
        </div>
        <button
          type="submit"
          className="w-full  bg-white text-black font-medium py-3 rounded-full hover:bg-gray-100 active:scale-95 
          transition duration-200 text-base shadow-md hover:shadow-lg"
        >
          Subscribe to Newsletter
        </button>
      </form>
    </section>
  );
}
