import { useEffect, useRef } from "react";

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
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  const handleBurgerClick = () => {
    setBurgerOpen(!burgerOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        burgerOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target as Node)
      ) {
        setBurgerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [burgerOpen, setBurgerOpen]);

  useEffect(() => {
    document.body.style.overflow = burgerOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [burgerOpen]);

  const navLinks = [
    { label: "Shop", href: "#" },
    { label: "On Sale", href: "#" },
    { label: "New Arrivals", href: "#" },
    { label: "Brands", href: "#" },
  ];

  return (
    <nav className={`relative ${className}`}>
      <div className="hidden burger:flex gap-8 text-base font-medium">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-gray-800 hover:text-blue-600 transition-colors duration-300 py-2"
          >
            {link.label}
          </a>
        ))}
      </div>
      <button
        ref={burgerRef}
        onClick={handleBurgerClick}
        className="flex-col w-7 h-6 justify-center items-center burger:hidden flex z-50 relative"
        aria-expanded={burgerOpen}
        aria-label="Toggle menu"
      >
        <span
          className={`absolute h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
            burgerOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-0"
          }`}
        ></span>
        <span
          className={`absolute h-0.5 w-full bg-current rounded-full transition-all duration-300 top-1/2 -translate-y-1/2 ${
            burgerOpen ? "opacity-0 scale-x-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`absolute h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
            burgerOpen ? "-rotate-45 top-1/2 -translate-y-1/2" : "bottom-0"
          }`}
        ></span>
      </button>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-screen w-4/5 max-w-xs bg-white z-40 transition-transform duration-500 ease burger:hidden flex flex-col pt-24 px-6 space-y-5 shadow-xl ${
          burgerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setBurgerOpen(false)}
            className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300 py-2 border-b border-gray-100"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
