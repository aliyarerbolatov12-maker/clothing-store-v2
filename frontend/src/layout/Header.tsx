"use client";
import { useState } from "react";
import PromoBanner from "@/components/PromoBanner";
import Cart from "@/components/Cart";
import Profile from "@/components/Profile";
import Search from "@/components/Search";
import Container from "./Container";
import Nav from "./Nav";
import Logo from "@/components/Logo";

export default function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <header>
      <PromoBanner />
      <div>
        <Container>
          <div className="flex items-center justify-between gap-[clamp(20px,2.77vw,40px)] max-search:gap-4 mt-6 mb-7">
            <div className="flex items-center gap-10 shrink-0 max-burger:gap-2">
              <Logo className="order-1 burger:order-0" />
              <Nav
                burgerOpen={burgerOpen}
                setBurgerOpen={setBurgerOpen}
                className="order-0 shrink-0 burger:order-1"
              />
            </div>
            <div className="order-2 burger:order-2 flex items-center gap-4 max-search:gap-2 min-w-0 max-search:justify-end">
              <Search />
              <div className="flex items-center gap-4 max-search:gap-2">
                <Cart />
                <Profile />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
