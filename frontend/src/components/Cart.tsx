import Link from "next/link";
import CartIcon from "@/assets/icons/cart.svg?react";

export default function Cart() {
  return (
    <Link href="/cart">
      <CartIcon />
    </Link>
  );
}
