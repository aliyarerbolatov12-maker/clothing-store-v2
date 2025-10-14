// components/Button.tsx
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = {
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "w-full py-2 rounded-lg transition font-medium",
        {
          "bg-black text-white hover:bg-gray-800": variant === "primary",
          "border border-gray-300 hover:bg-gray-100": variant === "secondary",
        },
        className
      )}
    >
      {children}
    </button>
  );
}
