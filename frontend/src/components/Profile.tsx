import Image from "next/image";
import Link from "next/link";
import ProfileIcon from "@/assets/icons/profile.svg?react";

export default function Profile() {
  return (
    <Link href="/profile">
      <ProfileIcon />
    </Link>
  );
}
