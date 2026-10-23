import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gift, RotateCcw, ShieldCheck, Truck } from "lucide-react";

const assurances = [
  { Icon: Truck, title: "Livraison gratuite", detail: "Dès 500 MAD" },
  { Icon: RotateCcw, title: "Retours faciles", detail: "Sous 14 jours" },
  { Icon: Gift, title: "Emballage cadeau", detail: "Prêt à offrir" },
  { Icon: ShieldCheck, title: "Paiement sécurisé", detail: "100% fiable" },
];

export default function BrandPromise() {
  return (
    <section aria-labelledby="brand-promise-title" id="notre-histoire">
      <div className="grid bg-[#173C2D] text-[#F5F0E6] lg:min-h-[500px] lg:grid-cols-2">
        <div className="relative min-h-[310px] overflow-hidden sm:min-h-[400px] lg:min-h-[500px]">
          <Image
            alt="Un artisan marocain façonne à la main un pendentif en filigrane doré"
            className="object-cover object-[48%_center]"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            src="/images/h-lux-artisan-workshop.png"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#131A13]/65 via-transparent to-[#131A13]/10"
          />
          <p className="absolute bottom-6 left-6 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#F5F0E6]/90 sm:bottom-8 sm:left-9 sm:text-[10px]">
            <span aria-hidden="true" className="h-px w-8 bg-[#D9B35F]" />
            Façonné à la main au Maroc
          </p>
        </div>

        <div className="relative flex items-center px-6 py-14 sm:px-10 sm:py-16 lg:px-[7vw] lg:py-20">
          <span
            aria-hidden="true"
            className="absolute right-7 top-7 hidden size-14 rotate-45 border border-[#D9B35F]/45 lg:block"
          />
          <div className="max-w-[620px]">
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E4C875] sm:text-xs">
              <span aria-hidden="true" className="h-px w-8 bg-[#D9B35F]" />
              Un savoir-faire marocain
            </p>
            <h2
              className="max-w-[580px] font-serif text-[clamp(2.65rem,4.4vw,4.7rem)] font-normal leading-[0.94] tracking-[-0.045em]"
              id="brand-promise-title"
            >
              Des bijoux pensés{" "}
              <span className="font-display italic text-[#E4C875]">
                avec sens.
              </span>
            </h2>
            <p className="mt-6 max-w-[530px] text-sm leading-7 text-[#F5F0E6]/90 sm:text-base sm:leading-8">
              Chaque pièce H-Lux prend racine au Maroc et se façonne avec le
              geste patient de nos artisans. Des lignes authentiques, conçues
              pour traverser le temps et accompagner chaque jour.
            </p>
            <Link
              className="group mt-8 inline-flex min-h-12 items-center gap-8 border border-[#E4C875]/80 px-6 text-[10px] font-semibold uppercase tracking-[0.17em] transition-colors hover:bg-[#E4C875] hover:text-[#173C2D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E4C875] sm:mt-9 sm:min-h-14 sm:px-7 sm:text-xs"
              href="#top"
            >
              Notre histoire
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[#D7D1C5] bg-[#F5F0E6] px-5 py-9 sm:px-8 sm:py-11 lg:px-[5.5vw] lg:py-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-6 text-center text-[9px] font-semibold uppercase tracking-[0.22em] text-[#777567] sm:mb-7 sm:text-[10px]">
            Les attentions H-Lux
          </p>
          <ul className="grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-4 sm:gap-0">
            {assurances.map(({ Icon, title, detail }) => (
              <li
                className="flex min-h-[76px] items-center gap-3 border-[#D7D1C5] px-2 sm:justify-center sm:gap-3 sm:border-l sm:px-3 first:sm:border-l-0 lg:gap-4 lg:px-5"
                key={title}
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[#D7D1C5] bg-[#F9F7F1] text-[#53664E] sm:size-12">
                  <Icon
                    aria-hidden="true"
                    className="size-5 stroke-[1.6] sm:size-[21px]"
                  />
                </span>
                <span className="text-left leading-5">
                  <span className="block text-[11px] font-semibold text-[#292B25] sm:text-xs lg:text-sm">
                    {title}
                  </span>
                  <span className="mt-0.5 block text-[10px] text-[#777567] sm:text-[11px]">
                    {detail}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
