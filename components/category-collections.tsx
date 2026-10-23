import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Bagues",
    image: "/images/categories/bagues.png",
    position: "object-center",
  },
  {
    name: "Colliers",
    image: "/images/categories/colliers.png",
    position: "object-center",
  },
  {
    name: "Bracelets",
    image: "/images/categories/bracelets.png",
    position: "object-center",
  },
  {
    name: "Boucles d’oreilles",
    image: "/images/categories/boucles.png",
    position: "object-center",
  },
];

export default function CategoryCollections() {
  return (
    <section
      aria-labelledby="categories-title"
      className="bg-[#F5F0E6] px-5 py-14 sm:px-8 sm:py-16 lg:px-[5.5vw] lg:py-20"
      id="categories"
    >
      <div className="mx-auto max-w-[1440px]">
        <header className="mb-8 text-center sm:mb-10 lg:mb-12">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#777567] sm:text-xs">
            Shopper par catégorie
          </p>
          <h2
            className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-tight tracking-[-0.04em] text-[#173C2D]"
            id="categories-title"
          >
            Nos univers
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-3 flex w-36 items-center gap-2 text-[#C49A4A]"
          >
            <span className="h-px flex-1 bg-[#C49A4A]/70" />
            <span className="size-2 rotate-45 bg-[#C49A4A]" />
            <span className="h-px flex-1 bg-[#C49A4A]/70" />
          </div>
        </header>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-4 xl:gap-6">
          {categories.map((category) => (
            <Link
              aria-label={`Découvrir les ${category.name.toLowerCase()}`}
              className="group min-w-0 bg-[#F8F5EE] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#66745A]"
              href="#nouveautes"
              key={category.name}
            >
              <div className="relative aspect-[1.16] overflow-hidden bg-[#EAE3D6] sm:aspect-[1.25]">
                <Image
                  alt=""
                  className={`object-cover ${category.position} transition-transform duration-500 group-hover:scale-[1.04]`}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  src={category.image}
                />
              </div>
              <div className="flex min-h-[86px] items-center px-3 py-3 sm:min-h-[100px] sm:px-5 sm:py-4">
                <span>
                  <span className="block font-serif text-base leading-tight text-[#292B25] sm:text-xl">
                    {category.name}
                  </span>
                  <span className="mt-2 inline-flex items-center gap-2 border-b border-[#777567]/50 pb-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#777567] transition-colors group-hover:border-[#173C2D] group-hover:text-[#173C2D] sm:text-[10px]">
                    Découvrir
                    <ArrowRight aria-hidden="true" className="size-3.5" />
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
