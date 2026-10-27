import Image from "next/image";
import Link from "next/link";

const collections = [
  // {
  //   title: "Pour elle",
  //   description: "Des bijoux raffinés pour illuminer chaque instant.",
  //   image: "/images/collections/for-her.png",
  //   alt: "Modèle portant des bijoux dorés H-Lux",
  // },
  {
    title: "Pour lui",
    description: "Des accessoires au caractère affirmé et intemporel.",
    image: "/images/collections/for-him.png",
    alt: "Modèle portant des bijoux dorés H-Lux",
  },
];

export default function GenderCollections() {
  return (
    <section
      aria-label="Collections pour elle et pour lui"
      className={`grid grid-cols-1 gap-0 ${collections.length > 1 ? "lg:grid-cols-2" : "lg:grid-cols-1"}`}
    >
      {collections.map((collection) => (
        <article
          className="relative isolate flex min-h-[430px] items-center overflow-hidden bg-[#324337] px-7 py-12 sm:px-12 lg:min-h-[520px] lg:px-[3.5vw]"
          key={collection.title}
        >
          <Image
            alt={collection.alt}
            className="-z-20 object-cover object-[64%_center]"
            fill
            sizes={collections.length > 1 ? "(min-width: 1024px) 50vw, 100vw" : "100vw"}
            src={collection.image}
            unoptimized
          />
          <div
            aria-hidden="true"
            className="-z-10 absolute inset-0 bg-gradient-to-r from-[#17241C]/50 via-[#17241C]/20 to-transparent"
          />
          <div className="max-w-[340px] text-[#F5F0E6]">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#E1C77F] sm:text-xs">
              Collection H-Lux
            </p>
            <h2 className="font-serif text-[clamp(2.6rem,4vw,4.25rem)] leading-none tracking-[-0.04em]">
              {collection.title}
            </h2>
            <span
              aria-hidden="true"
              className="my-6 block h-px w-12 bg-[#F5F0E6]/85"
            />
            <p className="max-w-[270px] text-sm leading-6 text-[#F5F0E6]/90 sm:text-base sm:leading-7">
              {collection.description}
            </p>
            <Link
              className="h-lux-cta mt-8 inline-flex min-h-12 items-center border border-[#F5F0E6]/75 px-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F5F0E6] transition-colors hover:border-[#D9B35F] hover:bg-transparent hover:text-[#D9B35F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9B35F] sm:px-7 sm:text-xs"
              href="#nouveautes"
            >
              Voir la collection
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}
