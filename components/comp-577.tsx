"use client";

import { Heart, Search, ShoppingBag } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import MobileMenu from "@/layout/mobile-menu";
import { navigationLinks } from "@/layout/navigation-links";

const actions = [
  { icon: Search, label: "Rechercher" },
  { icon: Heart, label: "Mes favoris" },
];

export default function CossNavbar() {
  return (
    <div className="grid h-[58px] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center bg-[#66745A] px-3 text-[#F5F0E6] sm:h-[64px] sm:px-8 lg:h-[70px] lg:px-[5.5vw]">
      <div className="flex items-center">
        <div className="lg:hidden">
          <MobileMenu />
        </div>
        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <Link
                  className="relative inline-block text-[12px] font-medium uppercase tracking-[0.13em] text-white transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <Link aria-label="H-Lux Accessories — accueil" className="text-center" href="#top">
        <span className="block font-serif text-[19px] leading-none tracking-[0.2em] text-[#F5F0E6] sm:text-[26px] sm:tracking-[0.24em]">
          H-LUXE
        </span>
        <span className="mt-0.5 block text-[6px] font-medium uppercase tracking-[0.38em] text-[#F5F0E6]/80 sm:text-[7px]">
          Accessories
        </span>
      </Link>

      <div className="flex min-w-0 items-center justify-end gap-0 sm:gap-3">
        {actions.map(({ icon: Icon, label }) => (
          <Button
            aria-label={label}
            className={`size-8 rounded-full text-[#F5F0E6] hover:bg-[#A3B18A]/30 hover:text-[#F5F0E6] sm:size-10 ${label === "Rechercher" ? "hidden sm:inline-flex" : ""}`}
            key={label}
            size="icon"
            variant="ghost"
          >
            <Icon aria-hidden="true" className="size-[19px]" strokeWidth={1.55} />
          </Button>
        ))}
        <Button
          aria-label="Panier, 0 article"
          className="relative size-8 rounded-full text-[#F5F0E6] hover:bg-[#A3B18A]/30 hover:text-[#F5F0E6] sm:size-10"
          size="icon"
          variant="ghost"
        >
          <ShoppingBag aria-hidden="true" className="size-[19px]" strokeWidth={1.55} />
          <span className="absolute right-0 top-0 flex size-4 items-center justify-center rounded-full bg-[#A3B18A] text-[9px] leading-none text-[#173c2d]">
            0
          </span>
        </Button>
      </div>
    </div>
  );
}
