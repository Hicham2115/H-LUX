"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const products = [
  {
    name: "Collier Pièce",
    stone: "Médaillon",
    image: "/images/products/ChatGPT%20Image%20Oct%2023,%202026,%2009_23_09%20PM.png",
    alt: "Collier doré avec pendentif pièce dans son écrin",
  },
  {
    name: "Collier Émeraude",
    stone: "Émeraude",
    image: "/images/products/ChatGPT%20Image%20Oct%2023,%202026,%2009_23_22%20PM.png",
    alt: "Collier doré avec pendentif vert émeraude",
  },
  {
    name: "Collier Saphir",
    stone: "Saphir",
    image: "/images/products/ChatGPT%20Image%20Oct%2023,%202026,%2009_23_27%20PM.png",
    alt: "Collier doré avec pendentif bleu",
  },
  {
    name: "Collier Quartz Rose",
    stone: "Quartz rose",
    image: "/images/products/ChatGPT%20Image%20Oct%2023,%202026,%2009_24_05%20PM.png",
    alt: "Collier doré avec pendentif rose pâle",
  },
  {
    name: "Collier Jade",
    stone: "Jade",
    image: "/images/products/ChatGPT%20Image%20Oct%2023,%202026,%2009_23_46%20PM.png",
    alt: "Collier doré avec pendentif vert jade",
  },
  {
    name: "Collier Citrine",
    stone: "Citrine",
    image: "/images/products/ChatGPT%20Image%20Oct%2023,%202026,%2009_23_33%20PM.png",
    alt: "Collier doré avec pendentif jaune citrine",
  },
  {
    name: "Collier Onyx",
    stone: "Onyx",
    image: "/images/products/ChatGPT%20Image%20Oct%2023,%202026,%2009_23_14%20PM.png",
    alt: "Collier doré avec pendentif noir onyx",
  },
  {
    name: "Collier Grenat",
    stone: "Grenat",
    image: "/images/products/ChatGPT%20Image%20Oct%2023,%202026,%2009_23_51%20PM.png",
    alt: "Collier argenté avec pendentif rouge grenat",
  },
  {
    name: "Médaillon Héritage",
    stone: "Médaillon",
    image: "/images/products/ChatGPT%20Image%20Oct%2023,%202026,%2009_24_01%20PM.png",
    alt: "Collier doré avec pendentif pièce ancien",
  },
];

const sortOptions = [
  { value: "featured", label: "Recommandés" },
  { value: "ascending", label: "Nom : A à Z" },
  { value: "descending", label: "Nom : Z à A" },
] as const;

type SortOption = (typeof sortOptions)[number]["value"];

function FilterOptions({
  selectedStone,
  onSelectStone,
}: {
  selectedStone: string;
  onSelectStone: (stone: string) => void;
}) {
  const stones = ["Tous", ...products.map((product) => product.stone)];

  return (
    <fieldset className="mt-5 space-y-4">
      <legend className="sr-only">Filtrer par pierre</legend>
      {stones.map((stone, index) => (
        <label
          className="flex cursor-pointer items-center gap-3 text-sm text-[#4D4B43]"
          htmlFor={`stone-${index}`}
          key={stone}
        >
          <input
            checked={selectedStone === stone}
            className="size-4 accent-[#173C2D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C49A4A]"
            id={`stone-${index}`}
            name="stone"
            onChange={() => onSelectStone(stone)}
            type="radio"
          />
          {stone === "Tous" ? "Toutes les pierres" : stone}
        </label>
      ))}
    </fieldset>
  );
}

export default function ProductsPage() {
  const [sort, setSort] = useState<SortOption>("featured");
  const [selectedStone, setSelectedStone] = useState("Tous");

  const visibleProducts = useMemo(() => {
    const filtered = products.filter(
      (product) => selectedStone === "Tous" || product.stone === selectedStone,
    );
    if (sort === "ascending") {
      return [...filtered].sort((a, b) => a.name.localeCompare(b.name, "fr"));
    }
    if (sort === "descending") {
      return [...filtered].sort((a, b) => b.name.localeCompare(a.name, "fr"));
    }
    return filtered;
  }, [selectedStone, sort]);

  return (
    <main className="min-h-screen bg-[#F5F0E6] text-[#242720]">
      <section aria-labelledby="products-title" className="px-5 pb-8 sm:px-8 sm:pb-10 lg:px-[5.5vw]">
        <nav
          aria-label="Fil d’Ariane"
          className="-mx-5 mb-0 border-b border-[#D7D1C5] px-5 py-3 font-serif text-sm text-[#777567] sm:-mx-8 sm:px-8 lg:-mx-[5.5vw] lg:px-[5.5vw]"
        >
          <Link className="transition-colors hover:text-[#173C2D]" href="/">
            Accueil
          </Link>
          <span aria-hidden="true" className="mx-2 text-[#C49A4A]">›</span>
          <span aria-current="page">La collection H-Lux</span>
        </nav>

        <div className="-mx-5 grid overflow-hidden bg-[#EAE3D6] sm:-mx-8 lg:-mx-[5.5vw] lg:min-h-[450px] lg:grid-cols-2">
          <div className="relative aspect-[1.1] min-h-[280px] overflow-hidden sm:aspect-[1.5] lg:aspect-auto lg:min-h-[450px]">
            <Image
              alt="Pendentif H-Lux doré présenté dans un écrin"
              className="object-cover object-center"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              src="/images/products/ChatGPT%20Image%20Oct%2023,%202026,%2009_23_09%20PM.png"
            />
          </div>
          <div className="flex min-h-[250px] flex-col items-center justify-center px-6 py-10 text-center sm:px-10 sm:py-14 lg:px-[10%]">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8C7043] sm:text-xs">
              Les bijoux H-Lux
            </p>
            <h1
              className="max-w-[600px] font-display text-[clamp(2.1rem,5vw,4.5rem)] leading-[0.98] tracking-[-0.04em] text-[#173C2D]"
              id="products-title"
            >
              Une pièce pour chaque histoire.
            </h1>
            <p className="mt-5 max-w-md font-serif text-sm leading-6 text-[#686459] sm:text-base sm:leading-7">
              Des bijoux inspirés du Maroc, choisis pour accompagner les jours
              précieux comme les plus simples.
            </p>
            <span aria-hidden="true" className="mt-7 h-px w-12 bg-[#C49A4A]" />
          </div>
        </div>
      </section>

      <section aria-label="Parcourir les bijoux H-Lux" className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-[5.5vw]">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end lg:hidden">
            <label className="flex flex-col gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#777567]">
              Pierre
              <select
                className="h-11 rounded-none border border-[#CFC3AD] bg-transparent px-3 text-sm font-normal normal-case tracking-normal text-[#242720] focus-visible:outline-2 focus-visible:outline-[#173C2D]"
                onChange={(event) => setSelectedStone(event.target.value)}
                value={selectedStone}
              >
                {["Tous", ...products.map((product) => product.stone)].map((stone) => (
                  <option key={stone} value={stone}>{stone === "Tous" ? "Toutes les pierres" : stone}</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#777567]">
              Trier par
              <select
                className="h-11 rounded-none border border-[#CFC3AD] bg-transparent px-3 text-sm font-normal normal-case tracking-normal text-[#242720] focus-visible:outline-2 focus-visible:outline-[#173C2D]"
                onChange={(event) => setSort(event.target.value as SortOption)}
                value={sort}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid gap-8 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-10 xl:gap-14">
            <aside aria-label="Filtres des bijoux" className="hidden lg:block">
              <fieldset className="border-t border-[#D7D1C5] py-5">
                <legend className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#242720]">
                  Trier par
                </legend>
                <div className="space-y-4">
                  {sortOptions.map((option, index) => (
                    <label className="flex cursor-pointer items-center gap-3 text-sm text-[#4D4B43]" htmlFor={`sort-${index}`} key={option.value}>
                      <input
                        checked={sort === option.value}
                        className="size-4 accent-[#173C2D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C49A4A]"
                        id={`sort-${index}`}
                        name="sort"
                        onChange={() => setSort(option.value)}
                        type="radio"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </fieldset>
              <details className="group border-t border-[#D7D1C5] py-5" open>
                <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-[#242720] [&::-webkit-details-marker]:hidden">
                  Catégorie
                  <span aria-hidden="true" className="transition-transform group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-5 flex items-center gap-3 text-sm text-[#4D4B43]">
                  <span className="size-4 rounded-full border-[5px] border-[#173C2D]" aria-hidden="true" />
                  Colliers <span className="text-[#8A877E]">({products.length})</span>
                </p>
              </details>
              <details className="group border-t border-[#D7D1C5] py-5" open>
                <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-[#242720] [&::-webkit-details-marker]:hidden">
                  Pierre
                  <span aria-hidden="true" className="transition-transform group-open:rotate-180">⌄</span>
                </summary>
                <FilterOptions onSelectStone={setSelectedStone} selectedStone={selectedStone} />
              </details>
            </aside>

            <div>
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-[#D7D1C5] pb-4">
                <p aria-live="polite" className="font-serif text-sm text-[#686459]">
                  {visibleProducts.length} bijoux
                </p>
                <Link className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#173C2D] hover:text-[#8C7043] sm:inline-flex" href="/#categories">
                  Nos univers <span aria-hidden="true">↗</span>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-10 xl:grid-cols-4 xl:gap-x-7">
                {visibleProducts.map((product, index) => (
                  <article className="group min-w-0" key={product.name}>
                    <div className="relative aspect-[0.86] overflow-hidden bg-[#EAE3D6] sm:aspect-square">
                      <Image
                        alt={product.alt}
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
                        fill
                        sizes="(max-width: 639px) 47vw, (max-width: 1279px) 30vw, 23vw"
                        src={product.image}
                      />
                      {index < 2 && (
                        <span className="absolute left-2 top-2 bg-[#F5F0E6]/90 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#173C2D] sm:left-3 sm:top-3 sm:text-[9px]">
                          Sélection H-Lux
                        </span>
                      )}
                    </div>
                    <div className="mt-3 sm:mt-4">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#8C7043] sm:text-[10px]">
                        Collier · {product.stone}
                      </p>
                      <h2 className="mt-1 font-serif text-sm text-[#292B25] sm:text-base">
                        {product.name}
                      </h2>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
