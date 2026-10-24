"use client";

import type { ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function ScrollToTopOnPageChange() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true, force: true });
  }, [lenis, pathname]);

  return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root>
      <ScrollToTopOnPageChange />
      {children}
    </ReactLenis>
  );
}
