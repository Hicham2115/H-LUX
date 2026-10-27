import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" id="top">
      <div className="relative isolate min-h-[min(760px,calc(100svh-110px))] overflow-hidden bg-[#073D2B] text-[#F5F0E6] lg:min-h-[clamp(620px,calc(100svh-112px),920px)]">
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

        <div className="relative z-20 mx-auto flex min-h-[inherit] max-w-[1800px] items-end px-6 pb-10 pt-[min(38svh,300px)] lg:items-center lg:px-10 lg:pb-14 lg:pt-10 xl:px-[5.5vw]">
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
            <p className="mt-7 max-w-[450px] font-display text-base leading-7 text-white max-lg:mt-6 max-lg:max-w-[900px] max-lg:font-serif max-lg:text-[clamp(1.05rem,2.4vw,1.5rem)] max-lg:leading-[1.5] lg:mt-8 lg:text-lg lg:leading-8">
              Des accessoires inspirés du Maroc, pensés avec soin pour révéler
              votre style au quotidien.
            </p>
            <Link
              className="h-lux-cta mt-8 inline-flex min-h-14  font-semibold items-center gap-8 border border-[#F5F0E6]/80 px-5 font-display text-[10px]  uppercase tracking-[0.15em] text-[#F5F0E6] transition-colors hover:border-[#D9B35F] hover:bg-transparent hover:text-[#D9B35F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9B35F] max-lg:mt-10 max-lg:min-h-[68px] max-lg:w-full max-lg:max-w-[640px] max-lg:justify-between max-lg:border-[#D9B35F] max-lg:px-6 max-lg:text-xs lg:mt-10 lg:px-5 lg:text-xs"
              href="#nouveautes"
            >
              Découvrir nos bijoux
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
