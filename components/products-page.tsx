"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { products } from "@/lib/products";

const sortOptions = [
  { value: "featured", label: "Recommandés" },
  { value: "ascending", label: "Nom : A à Z" },
  { value: "descending", label: "Nom : Z à A" },
] as const;

type SortOption = (typeof sortOptions)[number]["value"];
const categories = ["Tous", "Collier", "Montre"] as const;

function FilterOptions({
  selectedStone,
  onSelectStone,
}: {
  selectedStone: string;
  onSelectStone: (stone: string) => void;
}) {
  const stones = ["Tous", ...new Set(products.filter((product) => product.category === "Collier").map((product) => product.stone))];

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
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>("Tous");
  const [selectedStone, setSelectedStone] = useState("Tous");

  const visibleProducts = useMemo(() => {
    const filtered = products.filter(
      (product) =>
        (selectedCategory === "Tous" || product.category === selectedCategory) &&
        (selectedStone === "Tous" || product.stone === selectedStone),
    );
    if (sort === "ascending") {
      return [...filtered].sort((a, b) => a.name.localeCompare(b.name, "fr"));
    }
    if (sort === "descending") {
      return [...filtered].sort((a, b) => b.name.localeCompare(a.name, "fr"));
    }
    return filtered;
  }, [selectedCategory, selectedStone, sort]);

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

        <div className="-mx-5 grid overflow-hidden bg-[#EAE3D6] sm:-mx-8 lg:-mx-[5.5vw] lg:min-h-[560px] lg:grid-cols-2">
          <div className="relative aspect-[1.1] min-h-[280px] overflow-hidden sm:aspect-[1.5] lg:aspect-auto lg:min-h-[560px]">
            <Image
              alt={products[0].images[0].alt}
              className="object-cover object-center"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              src={products[0].images[0].src}
            />
          </div>
          <div className="flex min-h-[300px] items-center bg-[#F5F0E6] px-6 py-12 sm:px-10 sm:py-16 lg:min-h-[560px] lg:px-[10%] lg:py-20">
            <div className="mx-auto w-full max-w-[560px]">
              <p className="mb-5 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#8C7043] sm:text-[10px]">
                <span aria-hidden="true" className="h-px w-8 bg-[#C49A4A]" />
                Collection H-Lux · Maroc
              </p>
              <h1
                className="max-w-[540px] font-display text-[clamp(2.6rem,5.2vw,5rem)] leading-[0.98] tracking-[-0.045em] text-[#173C2D]"
                id="products-title"
              >
                L’élégance marocaine, au quotidien.
              </h1>
              <p className="mt-6 max-w-[440px] font-serif text-sm leading-6 text-[#686459] sm:text-base sm:leading-7">
                Des bijoux et des montres choisis pour accompagner vos moments du quotidien comme les plus précieux.
              </p>
              <Link
                className="mt-8 inline-flex min-h-12 items-center gap-8 border border-[#173C2D] px-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#173C2D] transition-colors hover:bg-[#173C2D] hover:text-[#F5F0E6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C49A4A] sm:min-h-14 sm:px-7 sm:text-xs"
                href="#collection-grid"
              >
                Explorer les bijoux
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Parcourir les bijoux H-Lux" className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-[5.5vw]">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end lg:hidden">
            <label className="flex flex-col gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#777567]">
              Catégorie
              <select
                className="h-11 rounded-none border border-[#CFC3AD] bg-transparent px-3 text-sm font-normal normal-case tracking-normal text-[#242720] focus-visible:outline-2 focus-visible:outline-[#173C2D]"
                onChange={(event) => {
                  setSelectedCategory(event.target.value as (typeof categories)[number]);
                  setSelectedStone("Tous");
                }}
                value={selectedCategory}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category === "Tous" ? "Toutes les catégories" : category === "Collier" ? "Colliers" : "Montres"}</option>
                ))}
              </select>
            </label>
            {(selectedCategory === "Tous" || selectedCategory === "Collier") && <label className="flex flex-col gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#777567]">
              Pierre
              <select className="h-11 rounded-none border border-[#CFC3AD] bg-transparent px-3 text-sm font-normal normal-case tracking-normal text-[#242720] focus-visible:outline-2 focus-visible:outline-[#173C2D]" onChange={(event) => setSelectedStone(event.target.value)} value={selectedStone}>
                {["Tous", ...new Set(products.filter((product) => product.category === "Collier").map((product) => product.stone))].map((stone) => <option key={stone} value={stone}>{stone === "Tous" ? "Toutes les pierres" : stone}</option>)}
              </select>
            </label>}
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
                <div className="mt-5 space-y-4">
                  {categories.map((category, index) => (
                    <label className="flex cursor-pointer items-center gap-3 text-sm text-[#4D4B43]" htmlFor={`category-${index}`} key={category}>
                      <input checked={selectedCategory === category} className="size-4 accent-[#173C2D]" id={`category-${index}`} name="category" onChange={() => { setSelectedCategory(category); setSelectedStone("Tous"); }} type="radio" />
                      {category === "Tous" ? "Toutes les catégories" : category === "Collier" ? "Colliers" : "Montres"}
                      {category !== "Tous" && <span className="text-[#8A877E]">({products.filter((product) => product.category === category).length})</span>}
                    </label>
                  ))}
                </div>
              </details>
              {selectedCategory !== "Montre" && <details className="group border-t border-[#D7D1C5] py-5" open>
                <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-[#242720] [&::-webkit-details-marker]:hidden">
                  Pierre
                  <span aria-hidden="true" className="transition-transform group-open:rotate-180">⌄</span>
                </summary>
                <FilterOptions onSelectStone={setSelectedStone} selectedStone={selectedStone} />
              </details>}
            </aside>

            <div id="collection-grid">
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
                  <article className="group min-w-0" key={product.slug}>
                    <Link
                      aria-label={`Découvrir ${product.name}`}
                      className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#66745A]"
                      href={`/products/${product.slug}`}
                    >
                    <div className="relative aspect-[0.86] overflow-hidden bg-[#EAE3D6] sm:aspect-square">
                      <Image
                        alt={product.images[0].alt}
                        className="object-cover"
                        fill
                        sizes="(max-width: 639px) 47vw, (max-width: 1279px) 30vw, 23vw"
                        src={product.images[0].src}
                      />
                      {index < 2 && (
                        <span className="absolute left-2 top-2 bg-[#F5F0E6]/90 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#173C2D] sm:left-3 sm:top-3 sm:text-[9px]">
                          Sélection H-Lux
                        </span>
                      )}
                    </div>
                    <div className="mt-3 sm:mt-4">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#8C7043] sm:text-[10px]">
                        {product.category}{product.category === "Collier" ? ` · ${product.stone}` : ""}
                      </p>
                      <h2 className="mt-1 font-serif text-sm text-[#292B25] sm:text-base">
                        {product.name}
                      </h2>
                      <p className="mt-1 text-sm text-[#173C2D]">{product.price} Dh</p>
                    </div>
                    </Link>
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
