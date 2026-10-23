import CossNavbar from "@/components/comp-577";

const services = [
  "Livraison gratuite dès 500 MAD",
  "Satisfait ou remboursé sous 14 jours",
  "Emballage cadeau élégant",
  "Paiement sécurisé",
];

export default function Header() {
  return (
    <header className="relative z-20">
      <div className="overflow-hidden bg-[#F5F0E6] text-[#173c2d]">
        <div className="h-lux-ticker flex w-max">
          {[0, 1].map((copy) => (
            <ul
              aria-hidden={copy === 1}
              className="flex w-max shrink-0 items-center gap-3 px-4 py-2 font-sans text-[9px] font-medium uppercase tracking-[0.15em] text-[#173c2d] sm:gap-5 sm:px-6 sm:text-[10px]"
              key={copy}
            >
              {services.map((label, index) => (
                <li className="flex shrink-0 items-center gap-5" key={label}>
                  {index > 0 && <span aria-hidden="true">|</span>}
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <CossNavbar />
    </header>
  );
}
