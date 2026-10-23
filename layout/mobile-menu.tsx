"use client";

import { Dialog as DialogPrimitive } from "radix-ui";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navigationLinks } from "@/layout/navigation-links";

export default function MobileMenu() {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>
        <Button
          aria-label="Ouvrir le menu"
          className="size-8 rounded-full text-[#F5F0E6] hover:bg-[#A3B18A]/30 hover:text-[#F5F0E6]"
          size="icon"
          variant="ghost"
        >
          <Menu aria-hidden="true" className="size-[18px]" />
        </Button>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-[#173c2d]/45 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed inset-y-0 left-0 z-50 flex w-[min(84vw,360px)] flex-col bg-[#66745A] px-6 pb-8 pt-6 text-[#F5F0E6] shadow-2xl outline-none data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:animate-in data-[state=open]:slide-in-from-left">
          <div className="flex items-center justify-between border-b border-[#F5F0E6]/25 pb-5">
            <div>
              <DialogPrimitive.Title className="font-serif text-2xl tracking-[0.2em]">
                H-LUXE
              </DialogPrimitive.Title>
              <p className="mt-1 text-[8px] uppercase tracking-[0.4em] text-[#F5F0E6]/80">
                Accessories
              </p>
            </div>
            <DialogPrimitive.Close asChild>
              <Button
                aria-label="Fermer le menu"
                className="size-9 rounded-full text-[#F5F0E6] hover:bg-[#A3B18A]/30 hover:text-white"
                size="icon"
                variant="ghost"
              >
                <X aria-hidden="true" className="size-5" />
              </Button>
            </DialogPrimitive.Close>
          </div>

          <nav aria-label="Navigation mobile" className="mt-8 flex flex-col">
            {navigationLinks.map((link, index) => (
              <DialogPrimitive.Close asChild key={link.label}>
                <a
                  aria-current={link.active ? "page" : undefined}
                  className="group flex items-center justify-between border-b border-[#F5F0E6]/15 py-5 text-sm font-medium uppercase tracking-[0.16em] text-white transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
                  href={link.href}
                >
                  <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100">
                    {link.label}
                  </span>
                  <span className="text-xs tracking-normal text-[#F5F0E6]/60">
                    0{index + 1}
                  </span>
                </a>
              </DialogPrimitive.Close>
            ))}
          </nav>

          <p className="mt-auto border-t border-[#F5F0E6]/25 pt-5 text-[10px] uppercase tracking-[0.16em] text-[#F5F0E6]/75">
            Des bijoux inspirés du Maroc
          </p>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
