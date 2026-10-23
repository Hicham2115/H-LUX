import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  { label: "Bagues", href: "#bagues", icon: "ring" },
  { label: "Colliers", href: "#colliers", icon: "necklace" },
  { label: "Bracelets", href: "#bracelets", icon: "bracelet" },
  { label: "Boucles d’oreilles", href: "#boucles", icon: "earrings" },
];

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" id="top">
      <div className="relative isolate min-h-[820px] overflow-hidden bg-[#073D2B] text-[#F5F0E6] lg:min-h-[clamp(620px,calc(100svh-112px),920px)]">
        <Image
          alt="Deux modèles portent les bijoux dorés H-Lux devant un fond émeraude profond"
          className="z-0 hidden object-cover object-[66%_0%] lg:block"
          fill
          priority
          unoptimized
          sizes="100vw"
          src="/images/h-lux-campaign-warm-2x.png"
        />
        <Image
          alt="Deux modèles portent les bijoux dorés H-Lux devant un fond émeraude profond"
          className="z-0 object-cover object-center lg:hidden"
          fill
          priority
          unoptimized
          sizes="100vw"
          src="/images/h-lux-campaign-mobile-warm-2x.png"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#061710] via-[#061710]/75 to-transparent lg:hidden"
        />

        <div className="relative z-20 mx-auto flex min-h-[inherit] max-w-[1800px] items-end px-6 pb-12 pt-80 lg:items-center lg:px-10 lg:pb-14 lg:pt-10 xl:px-[5.5vw]">
          <div className="max-w-[600px] max-lg:max-w-[900px]">
            <p className="mb-6 flex items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D9B35F] max-lg:hidden lg:text-[11px] lg:tracking-[0.25em]">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[#D9B35F] sm:w-12"
              />
              Des bijoux façonnés pour vous
            </p>
            <h1
              className="font-display text-[clamp(2.7rem,5.4vw,6rem)] font-medium uppercase leading-[0.88] tracking-[-0.05em] text-[#F5F0E6] max-lg:font-serif max-lg:text-[clamp(3rem,8.5vw,5.25rem)] max-lg:leading-[0.84]"
              id="hero-title"
            >
              <span className="block">L’élégance</span>
              <span className="block">qui vous</span>
              <span className="block italic text-[#D9B35F]">ressemble.</span>
            </h1>
            <p className="mt-7 max-w-[450px] font-display text-base leading-7 text-[#F5F0E6]/90 max-lg:mt-6 max-lg:max-w-[900px] max-lg:font-serif max-lg:text-[clamp(1.05rem,2.4vw,1.5rem)] max-lg:leading-[1.5] lg:mt-8 lg:text-lg lg:leading-8">
              Des accessoires inspirés du Maroc, pensés avec soin pour révéler
              votre style au quotidien.
            </p>
            <Link
              className="mt-8 inline-flex min-h-14 items-center gap-8 border border-[#F5F0E6]/80 px-7 font-display text-[10px] font-medium uppercase tracking-[0.15em] text-[#F5F0E6] transition-colors hover:bg-[#D9B35F] hover:text-[#062b1e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9B35F] max-lg:mt-10 max-lg:min-h-[68px] max-lg:w-full max-lg:max-w-[640px] max-lg:justify-between max-lg:border-[#D9B35F] max-lg:px-6 max-lg:text-xs lg:mt-10 lg:px-8 lg:text-xs"
              href="#nouveautes"
            >
              Découvrir nos bijoux
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </div>

      <nav
        aria-label="Découvrir par catégorie"
        className="grid w-full grid-cols-2 bg-[#F5F0E6] px-4 py-2 sm:px-8 md:grid-cols-4 md:px-12 md:py-3 xl:px-20"
        id="categories"
      >
        {categories.map(({ label, href, icon }, index) => (
          <a
            className={`group flex min-h-[58px] items-center justify-center gap-3 border-[#8B8778]/35 px-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#25271F] transition-colors hover:text-[#66745A] focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#66745A] sm:gap-4 sm:text-xs md:min-h-[78px] md:gap-5 md:text-sm ${
              index % 2 === 0 ? "border-r" : ""
            } ${index < 2 ? "max-md:border-b" : ""} ${
              index < 3 ? "md:border-r" : "md:border-r-0"
            }`}
            href={href}
            key={label}
          >
            <svg
              aria-hidden="true"
              className="size-8 shrink-0 text-[#777567] transition-colors group-hover:text-[#173C2D] sm:size-9 md:size-10"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.25"
              viewBox="0 0 24 24"
            >
              {icon === "ring" && (
                <>
                  <circle cx="12" cy="16" r="6.5" />
                  <path d="m9.5 7.5 2.5-4 2.5 4-2.5 2.2-2.5-2.2Z" />
                  <path d="M9.5 7.5h5" />
                </>
              )}
              {icon === "necklace" && (
                <>
                  <path d="M3.5 4.5c.6 7.1 4.1 10.4 8.5 10.4s7.9-3.3 8.5-10.4" />
                  <path d="m12 14.9-3 3 3 3 3-3-3-3Z" />
                  <path d="m10.5 17.9 1.5 3 1.5-3" />
                </>
              )}
              {icon === "bracelet" && (
                <>
                  <ellipse cx="12" cy="12" rx="8.5" ry="5.4" transform="rotate(-24 12 12)" />
                  <path d="m6 7.8 1.1 1.5m2.1-3.1.8 1.7m3-2.1.2 1.9m3.2-.8-.5 1.8m2.9 1.1-1 1.5m-11.2 1.2 1.1 1.4m2.5-.2.8 1.6m3.1-1 .2 1.9m3.1-2.7-.5 1.8" />
                </>
              )}
              {icon === "earrings" && (
                <>
                  <path d="M7 3.5v3m0 0c-3.8 2.1-3.6 12.8 0 12.8s3.8-10.7 0-12.8Z" />
                  <path d="M17 3.5v3m0 0c-3.8 2.1-3.6 12.8 0 12.8s3.8-10.7 0-12.8Z" />
                </>
              )}
            </svg>
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </section>
  );
}
