"use client";

import Image from "next/image";
import { useState } from "react";

type ProductImage = {
  src: string;
  alt: string;
};

export default function ProductGallery({
  images,
  productName,
}: {
  images: readonly ProductImage[];
  productName: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];

  if (!activeImage) return null;

  return (
    <div className="min-w-0">
      <div className="relative aspect-[0.94] overflow-hidden bg-[#EAE3D6] sm:aspect-square lg:aspect-[0.92]">
        <Image
          alt={activeImage.alt}
          className="object-cover"
          fill
          priority
          sizes="(max-width: 1023px) 100vw, 54vw"
          src={activeImage.src}
        />
        <span className="absolute bottom-4 left-4 bg-[#F5F0E6]/90 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#173C2D] sm:bottom-6 sm:left-6">
          Inspiré du Maroc
        </span>
        {images.length > 1 && (
          <span className="absolute bottom-4 right-4 bg-[#F5F0E6]/90 px-3 py-2 text-[9px] font-semibold tracking-[0.12em] text-[#173C2D] sm:bottom-6 sm:right-6">
            {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
        )}
      </div>

      {images.length > 1 && (
        <div
          aria-label={`Photos de ${productName}`}
          className="mt-3 flex gap-3 overflow-x-auto pb-2 sm:mt-4 sm:gap-4"
          role="group"
        >
          {images.map((image, index) => (
            <button
              aria-label={`Afficher la photo ${index + 1} de ${productName}`}
              aria-pressed={activeIndex === index}
              className={`relative size-[68px] shrink-0 overflow-hidden border bg-[#EAE3D6] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173C2D] sm:size-20 ${activeIndex === index ? "border-[#173C2D]" : "border-transparent"}`}
              key={image.src}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              <Image alt="" className="object-cover" fill sizes="80px" src={image.src} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
