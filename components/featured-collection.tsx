import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";

const featuredSlugs = new Set([
  "collier-piece",
  "collier-emeraude",
  "collier-quartz-rose",
  "collier-onyx",
]);

export default function FeaturedCollection() {
  return (
    <section
      aria-labelledby="featured-title"
      className="bg-[#F5F0E6] px-5 py-14 sm:px-8 sm:py-16 lg:px-[5.5vw] lg:py-20"
      id="nouveautes"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="relative mb-8 text-center sm:mb-10 lg:mb-12">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#777567] sm:text-xs">
            Notre sélection
          </p>
          <h2
            className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-tight tracking-[-0.04em] text-[#173C2D]"
            id="featured-title"
          >
            Nos pièces incontournables
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-3 flex w-36 items-center gap-2 text-[#C49A4A]"
          >
            <span className="h-px flex-1 bg-[#C49A4A]/70" />
            <span className="size-2 rotate-45 bg-[#C49A4A]" />
            <span className="h-px flex-1 bg-[#C49A4A]/70" />
          </div>
          <Link
            className="h-lux-cta mt-5 inline-flex min-h-11 items-center gap-3 border border-[#173C2D]/35 px-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#173C2D] hover:border-[#C49A4A] hover:bg-transparent hover:text-[#8C7043] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#66745A] sm:min-h-12 sm:px-5 sm:text-xs lg:absolute lg:right-0 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2"
            href="/products"
          >
            Voir toute la collection
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-5 sm:gap-y-8 lg:grid-cols-4 lg:gap-6">
          {products.filter((product) => featuredSlugs.has(product.slug)).map((product) => (
            <article className="min-w-0 text-center" key={product.name}>
              <Link
                aria-label={`Découvrir ${product.name}`}
                className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#66745A]"
                href={`/products/${product.slug}`}
              >
                <div className="relative aspect-[1.08] overflow-hidden bg-[#EAE3D6]">
                  <Image
                    alt={product.images[0].alt}
                    className="object-cover"
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    src={product.images[0].src}
                  />
                </div>
                <h3 className="mt-3 font-serif text-sm text-[#292B25] sm:mt-4 sm:text-base">
                  {product.name}
                </h3>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
