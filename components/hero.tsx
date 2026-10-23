import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleDot, Gem, Link2, Circle } from "lucide-react";

const categories = [
  { label: "Bagues", href: "#bagues", icon: CircleDot },
  { label: "Colliers", href: "#colliers", icon: Gem },
  { label: "Bracelets", href: "#bracelets", icon: Link2 },
  { label: "Boucles d’oreilles", href: "#boucles", icon: Circle },
];

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" id="top">
      <div className="relative isolate min-h-[760px] overflow-hidden bg-[#073D2B] text-[#F5F0E6] sm:min-h-[820px] lg:min-h-[clamp(620px,calc(100svh-112px),920px)]">
        <Image
          alt="Deux modèles portent les bijoux dorés H-Lux devant un fond émeraude profond"
          className="z-0 object-cover object-[66%_0%]"
          fill
          priority
          sizes="100vw"
          src="/images/h-lux-campaign-emerald.png"
        />

        <div className="relative z-20 mx-auto flex min-h-[760px] max-w-[1800px] items-end px-6 pb-12 pt-80 sm:min-h-[820px] sm:items-center sm:px-10 sm:pb-14 sm:pt-10 lg:min-h-[inherit] lg:px-[5.5vw]">
          <div className="max-w-[600px]">
            <p className="mb-6 flex items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D9B35F] sm:text-[11px] sm:tracking-[0.25em]">
              <span
                aria-hidden="true"
                className="h-px w-9 bg-[#D9B35F] sm:w-12"
              />
              L’art du bijou, inspiré du Maroc
            </p>
            <h1
              className="font-display text-[clamp(3.6rem,7.5vw,8rem)] font-medium uppercase leading-[0.84] tracking-[-0.05em] text-[#F5F0E6]"
              id="hero-title"
            >
              <span className="block">L’éclat</span>
              <span className="block">du</span>
              <span className="block italic text-[#D9B35F]">Maroc.</span>
            </h1>
            <p className="mt-7 max-w-[450px] font-display text-base leading-7 text-[#F5F0E6]/90 sm:mt-8 sm:text-lg sm:leading-8">
              Des pièces choisies avec soin, entre héritage marocain et élégance
              contemporaine.
            </p>
            <Link
              className="mt-8 inline-flex min-h-14 items-center gap-8 border border-[#F5F0E6]/80 px-7 font-display text-[10px] font-medium uppercase tracking-[0.15em] text-[#F5F0E6] transition-colors hover:bg-[#D9B35F] hover:text-[#062b1e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9B35F] sm:mt-10 sm:px-8 sm:text-xs"
              href="#nouveautes"
            >
              Explorer la collection
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </div>

      <nav
        aria-label="Découvrir par catégorie"
        className="mx-auto grid max-w-[1480px] grid-cols-2 bg-[#F5F0E6] px-4 py-4 sm:px-8 md:grid-cols-4 md:px-12 md:py-6 xl:px-20"
        id="categories"
      >
        {categories.map(({ label, href, icon: Icon }, index) => (
          <a
            className={`flex min-h-14 items-center justify-center gap-3 px-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#394638] transition-colors hover:text-[#66745A] sm:gap-4 sm:text-xs md:justify-center ${
              index % 2 === 0
                ? "border-r border-[#66745A]/30 md:border-r"
                : "md:border-r md:border-[#66745A]/30"
            } ${index === 3 ? "md:border-r-0" : ""}`}
            href={href}
            key={label}
          >
            <Icon
              aria-hidden="true"
              className="size-7 text-[#66745A]"
              strokeWidth={1.45}
            />
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </section>
  );
}
