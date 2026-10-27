import Hero from "@/components/hero";
import CategoryCollections from "@/components/category-collections";
import FeaturedCollection from "@/components/featured-collection";
import GenderCollections from "@/components/gender-collections";
import BrandPromise from "@/components/brand-promise";
import Faq from "@/components/faq";
import ReviewsSection from "@/components/reviews-section";
import Header from "@/layout/header";
import SiteFooter from "@/components/site-footer";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedCollection />
        <GenderCollections />
        <CategoryCollections />
        <BrandPromise />
        <ReviewsSection />
        {/* <Faq /> */}
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
