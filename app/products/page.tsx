import type { Metadata } from "next";
import Header from "@/layout/header";
import SiteFooter from "@/components/site-footer";
import ProductsPage from "@/components/products-page";

export const metadata: Metadata = {
  title: "Nos bijoux | H-Lux Accessories",
  description:
    "Explorez les bijoux H-Lux inspirés du Maroc : colliers et pendentifs aux pierres colorées.",
};

export default function ProductsRoute() {
  return (
    <>
      <Header />
      <ProductsPage />
      <SiteFooter />
    </>
  );
}
