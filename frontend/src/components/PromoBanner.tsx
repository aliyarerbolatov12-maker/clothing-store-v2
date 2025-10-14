import Link from "next/link";

export default function PromoBanner() {
  return (
    <div className="w-full bg-black text-white text-center py-2 text-sm">
      Sign up and get 20% off your first order.
      <Link
        href="/register"
        className="underline font-medium hover:text-gray-300 ml-1"
      >
        Sign Up Now
      </Link>
    </div>
  );
}
