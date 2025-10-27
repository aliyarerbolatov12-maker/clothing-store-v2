import clsx from "clsx";
import useBodyOverflow from "@/hooks/useBodyOverflow";
import useClickOutside from "@/hooks/useClickOutside";
import useMenuAnimation from "@/hooks/useMenuAnimation";
import useWindowSize from "@/hooks/useWindowSize";
import { useRef } from "react";
import NavLinks from "./NavLinks";

type NavProps = {
  burgerOpen: boolean;
  setBurgerOpen: (value: boolean) => void;
  className?: string;
};

export default function Nav({
  burgerOpen,
  setBurgerOpen,
  className,
}: NavProps) {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const burgerRef = useRef<HTMLButtonElement | null>(null);

  useClickOutside([menuRef, burgerRef], () => setBurgerOpen(false));
  useBodyOverflow(burgerOpen);
  const menuClasses = useMenuAnimation(burgerOpen);
  const [windowWidth] = useWindowSize();
  const isMobile = windowWidth < 900;

  const handleBurgerClick = () => setBurgerOpen(!burgerOpen);

  return (
    <nav className={clsx("relative", className)}>
      <div
        className={clsx(
          !isMobile ? "flex" : "hidden",
          "gap-3 text-base font-medium"
        )}
      >
        <NavLinks />
      </div>

      <button
        ref={burgerRef}
        onClick={handleBurgerClick}
        className={clsx(
          isMobile ? "flex" : "hidden",
          "flex-col w-7 h-6 justify-center items-center z-50 relative"
        )}
      >
        <span
          className={clsx(
            "absolute h-0.5 w-full bg-current rounded-full transition-all duration-300",
            burgerOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-0"
          )}
        ></span>
        <span
          className={clsx(
            "absolute h-0.5 w-full bg-current rounded-full transition-all duration-300 top-1/2 -translate-y-1/2",
            burgerOpen ? "opacity-0 scale-x-0" : "opacity-100"
          )}
        ></span>
        <span
          className={clsx(
            "absolute h-0.5 w-full bg-current rounded-full transition-all duration-300",
            burgerOpen ? "-rotate-45 top-1/2 -translate-y-1/2" : "bottom-0"
          )}
        ></span>
      </button>
      <div
        ref={menuRef}
        className={clsx(
          "fixed top-0 right-0 h-screen w-[80%] max-w-[320px] bg-white z-40 transition-transform duration-500 ease-in-out",
          burgerOpen ? "translate-x-0" : "translate-x-full",
          menuClasses,
          "flex flex-col pt-24 px-6 space-y-5 shadow-xl"
        )}
      >
        <NavLinks onClick={() => setBurgerOpen(false)} />
      </div>
    </nav>
  );
}
