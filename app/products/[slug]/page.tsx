import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SiteFooter from "@/components/site-footer";
import ProductGallery from "@/components/product-gallery";
import ProductOrderForm from "@/components/product-order-form";
import { getProduct, products } from "@/lib/products";
import Header from "@/layout/header";
import { notFound } from "next/navigation";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) return { title: "Bijou introuvable | H-Lux Accessories" };

  return {
    title: `${product.name} | H-Lux Accessories`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  const relatedProducts = products.filter((item) => item.slug !== product.slug).slice(0, 4);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F5F0E6] text-[#242720]">
        <div className="px-5 sm:px-8 lg:px-[5.5vw]">
          <nav
            aria-label="Fil d’Ariane"
            className="border-b border-[#D7D1C5] py-3 font-serif text-sm text-[#777567]"
          >
            <Link className="transition-colors hover:text-[#173C2D]" href="/">Accueil</Link>
            <span aria-hidden="true" className="mx-2 text-[#C49A4A]">›</span>
            <Link className="transition-colors hover:text-[#173C2D]" href="/products">La collection H-Lux</Link>
            <span aria-hidden="true" className="mx-2 text-[#C49A4A]">›</span>
            <span aria-current="page">{product.name}</span>
          </nav>

          <section className="mx-auto grid max-w-[1440px] gap-8 py-7 sm:py-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-14">
            <ProductGallery images={product.images} productName={product.name} />

            <div className="flex items-center lg:py-10">
              <div className="w-full">
                <p className="mb-5 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#8C7043] sm:text-[10px]">
                  <span aria-hidden="true" className="h-px w-8 bg-[#C49A4A]" />
                  Collier · {product.stone}
                </p>
                <h1 className="font-display text-[clamp(2.6rem,5vw,5rem)] leading-[0.98] tracking-[-0.045em] text-[#173C2D]">
                  {product.name}
                </h1>
                <p className="mt-6 max-w-[480px] font-serif text-base leading-7 text-[#686459] sm:text-lg sm:leading-8">
                  {product.description}
                </p>

                <div className="mt-8 border-y border-[#D7D1C5] py-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#242720]">Une pièce à votre image</p>
                  <p className="mt-2 max-w-[470px] text-sm leading-6 text-[#686459]">
                    Un bijou choisi pour sa couleur et son caractère, à porter seul ou à associer à vos pièces préférées.
                  </p>
                </div>

                <div className="mt-7 flex flex-col gap-3 text-sm text-[#4D4B43] sm:flex-row sm:gap-8">
                  <p><span className="font-semibold text-[#173C2D]">Livraison offerte</span> dès 500 MAD</p>
                  <p><span className="font-semibold text-[#173C2D]">Retours sous 14 jours</span></p>
                </div>

                <ProductOrderForm productName={product.name} />
                <Link
                  className="mt-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#777567] transition-colors hover:text-[#173C2D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C49A4A]"
                  href="/products"
                >
                  <ArrowLeft aria-hidden="true" className="size-4" />
                  Retour à la collection
                </Link>
              </div>
            </div>
          </section>
        </div>

        <section aria-labelledby="related-products-title" className="border-t border-[#D7D1C5] bg-[#EEE8DC] px-5 py-12 sm:px-8 sm:py-16 lg:px-[5.5vw]">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-7 flex items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8C7043] sm:text-[10px]">À découvrir aussi</p>
                <h2 className="font-display text-3xl tracking-[-0.03em] text-[#173C2D] sm:text-4xl" id="related-products-title">D’autres pièces H-Lux</h2>
              </div>
              <Link className="hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#173C2D] transition-colors hover:text-[#8C7043] sm:inline-flex" href="/products">
                Toute la collection <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
              {relatedProducts.map((item) => (
                <Link className="group min-w-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#66745A]" href={`/products/${item.slug}`} key={item.slug}>
                  <div className="relative aspect-square overflow-hidden bg-[#E4DED2]">
                    <Image alt={item.images[0].alt} className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" fill sizes="(max-width: 639px) 48vw, 24vw" src={item.images[0].src} />
                  </div>
                  <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#8C7043]">Collier · {item.stone}</p>
                  <p className="mt-1 font-serif text-sm text-[#292B25] sm:text-base">{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
