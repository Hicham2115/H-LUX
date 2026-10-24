const shopLinks = [
  { href: "#categories", label: "Toutes les pièces" },
  { href: "#categories", label: "Boucles d’oreilles" },
  { href: "#categories", label: "Bagues & bracelets" },
  { href: "#nouveautes", label: "Nouveautés" },
];

const guideLinks = [
  { href: "#faq", label: "Questions fréquentes" },
  { href: "#notre-histoire", label: "Notre histoire" },
  { href: "#reviews-title", label: "Avis clients" },
];

export default function SiteFooter() {
  return (
    <footer className="overflow-hidden bg-[#10261F] px-3 pt-4 text-[#F5F0E6] sm:px-6 sm:pt-8 lg:px-[4.5vw]" aria-label="Pied de page">
      <div className="mx-auto max-w-[1440px] rounded-[24px] border border-[#D5B17D]/25 px-5 py-8 sm:rounded-[32px] sm:px-8 sm:py-12 lg:px-16 lg:py-16">
        <div className="grid grid-cols-2 gap-x-5 gap-y-8 pb-8 sm:gap-x-10 sm:gap-y-12 sm:pb-12 lg:grid-cols-[minmax(0,1.2fr)_0.8fr_0.9fr_minmax(250px,1.25fr)] lg:gap-12 lg:pb-14">
          <div className="col-span-2 lg:col-span-1">
            <a className="inline-flex flex-col font-display text-[2.15rem] leading-[0.9] tracking-[0.13em] text-[#F5F0E6] no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D5B17D]" href="#top">
              H-LUX
              <span className="mt-3 font-sans text-[0.55rem] tracking-[0.34em] text-[#D5B17D]">ACCESSORIES</span>
            </a>
            <p className="mt-6 max-w-md text-[0.98rem] leading-[1.8] text-[#F5F0E6]/70">
              Des bijoux choisis avec soin, inspirés par la beauté et le
              savoir-faire marocains.
            </p>
            <span className="mt-6 inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#D5B17D]">L’élégance, en héritage.</span>
          </div>

          <nav className="flex flex-col items-start" aria-label="Boutique">
            <h2 className="mb-5 text-[0.95rem] font-semibold text-[#F5F0E6]">Boutique</h2>
            {shopLinks.map((link) => (
              <a className="mb-4 text-[0.92rem] text-[#F5F0E6]/75 no-underline transition-colors hover:text-[#D5B17D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D5B17D] motion-reduce:transition-none" href={link.href} key={link.label}>{link.label}</a>
            ))}
          </nav>

          <nav className="flex flex-col items-start" aria-label="À votre écoute">
            <h2 className="mb-5 text-[0.95rem] font-semibold text-[#F5F0E6]">À votre écoute</h2>
            {guideLinks.map((link) => (
              <a className="mb-4 text-[0.92rem] text-[#F5F0E6]/75 no-underline transition-colors hover:text-[#D5B17D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D5B17D] motion-reduce:transition-none" href={link.href} key={link.label}>{link.label}</a>
            ))}
          </nav>

          <div className="col-span-2 flex flex-col items-start lg:col-span-1">
            <h2 className="mb-4 text-[0.95rem] font-semibold text-[#F5F0E6]">Un mot de vous, un mot de nous</h2>
            <p className="max-w-md text-[0.98rem] leading-[1.8] text-[#F5F0E6]/70">Une question sur une pièce ? Retrouvez les réponses dans notre espace conseil.</p>
            <a className="mt-6 flex min-h-[3.7rem] w-full items-center justify-between rounded-full border border-[#D5B17D]/40 py-1 pl-5 pr-2 text-[0.92rem] text-[#F5F0E6] no-underline transition-colors hover:border-[#D5B17D] hover:bg-[#D5B17D]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D5B17D] motion-reduce:transition-none" href="#faq">
              <span>Voir les réponses</span>
              <span className="grid size-[2.65rem] place-items-center rounded-full bg-[#D5B17D] text-xl text-[#10261F]" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-[#D5B17D]/25 pt-5 text-xs text-[#F5F0E6]/60 sm:flex-row sm:justify-between sm:gap-4">
          <span>© {new Date().getFullYear()} H-Lux Accessories. Tous droits réservés.</span>
          <span>Imaginé avec soin · Inspiré du Maroc</span>
        </div>
      </div>

      <div className="mx-auto -mb-[0.2em] mt-[-0.05em] max-w-[1440px] whitespace-nowrap text-center font-display text-[30vw] leading-[0.88] tracking-[-0.065em] text-[#F5F0E6]/[0.04] sm:text-[27vw] xl:text-[25rem]" aria-hidden="true">H-LUX</div>
      <p className="mx-auto m-0 pb-5 text-center text-[0.82rem] text-[#F5F0E6]/60">Bijoux & accessoires choisis avec caractère</p>
    </footer>
  );
}
