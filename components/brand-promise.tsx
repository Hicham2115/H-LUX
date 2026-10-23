import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const assurances = [
  { value: "500 MAD", label: "Livraison offerte" },
  { value: "14 jours", label: "Pour changer d’avis" },
  { value: "100%", label: "Paiement sécurisé" },
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
              className="h-lux-cta group mt-8 inline-flex min-h-12 items-center gap-8 border border-[#E4C875]/80 px-6 text-[10px] font-semibold uppercase tracking-[0.17em] transition-colors hover:bg-[#E4C875] hover:text-[#173C2D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E4C875] sm:mt-9 sm:min-h-14 sm:px-7 sm:text-xs"
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

      <div className="border-t border-[#D7D1C5] bg-[#F5F0E6] px-5 py-10 sm:px-8 sm:py-12 lg:px-[5.5vw] lg:py-16">
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-7 text-center text-[9px] font-semibold uppercase tracking-[0.22em] text-[#777567] sm:mb-9 sm:text-[10px]">
            Les attentions H-Lux
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-[0.82fr_0.82fr_0.82fr_1.55fr]">
            {assurances.map(({ value, label }, index) => (
              <article
                className={`min-h-[112px] border-[#D7D1C5] px-3 py-3 sm:min-h-[132px] sm:px-5 lg:px-7 ${
                  index % 2 === 1 ? "border-l" : ""
                } ${index > 1 ? "border-t lg:border-t-0" : ""} ${
                  index > 0 ? "lg:border-l" : "lg:border-l-0"
                }`}
                key={value}
              >
                <span className="mb-3 block h-[2px] w-7 bg-[#C49A4A] sm:mb-4" />
                <span className="block font-sans text-[clamp(1.9rem,3.1vw,3.1rem)] font-bold leading-none tracking-[-0.055em] text-[#173C2D]">
                  {value}
                </span>
                <span className="mt-2 block max-w-[160px] text-xs leading-5 text-[#777567] sm:text-sm">
                  {label}
                </span>
              </article>
            ))}
            <article className="col-span-2 border-t border-[#D7D1C5] px-3 py-6 sm:px-5 lg:col-span-1 lg:border-l lg:border-t-0 lg:px-8 lg:py-3">
              <span className="mb-3 block h-[2px] w-7 bg-[#C49A4A] sm:mb-4" />
              <h3 className="max-w-[420px] font-sans text-xl font-semibold leading-snug tracking-[-0.03em] text-[#173C2D] sm:text-2xl">
                Chaque commande, préparée avec attention.
              </h3>
              <p className="mt-3 max-w-[460px] text-sm leading-6 text-[#777567] sm:text-base sm:leading-7">
                Un emballage cadeau élégant et des attentions pensées pour
                rendre chaque commande aussi spéciale que le bijou qu’elle
                renferme.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
