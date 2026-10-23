import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "L’émeraude est encore plus lumineuse en vrai. C’est une pièce que je garderai précieusement pendant des années.",
    name: "Amira",
    location: "Casablanca",
    initials: "A",
  },
  {
    quote:
      "Chaque détail est pensé avec soin. C’est le bijou que je porte chaque matin.",
    name: "Lina",
    location: "Paris",
    initials: "L",
  },
  {
    quote:
      "Un magnifique cadeau, emballé avec tant de soin. Toute l’expérience était spéciale.",
    name: "Sofia",
    location: "London",
    initials: "S",
  },
  {
    quote:
      "Élégant sans être précieux. J’aime qu’il s’intègre si naturellement à mon quotidien.",
    name: "Nadia",
    location: "Rabat",
    initials: "N",
  },
  {
    quote:
      "L’or capte magnifiquement la lumière. C’est exactement la touche discrète que je recherchais.",
    name: "Maya",
    location: "Montreal",
    initials: "M",
  },
];

export default function ReviewsSection() {
  return (
    <section
      aria-labelledby="reviews-title"
      className="overflow-hidden border-y border-[#D7D1C5] bg-[#F5F0E6] py-14 text-[#173C2D] sm:py-18"
    >
      <div className="mx-auto mb-9 max-w-3xl px-5 text-center sm:mb-12">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8C7043] sm:text-xs">
          La communauté H-Lux
        </p>
        <h2
          className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight tracking-[-0.04em] text-[#173C2D]"
          id="reviews-title"
        >
          Ce que nos clientes en pensent
        </h2>
        <p className="mt-4 font-serif text-[15px] leading-relaxed text-[#6D665B] sm:text-[17px]">
          Quelques mots sur les bijoux qu’elles aiment et gardent près d’elles.
        </p>
      </div>

      <div className="reviews-marquee space-y-4 sm:space-y-5">
        {["left", "right"].map((direction) => (
          <div
            className={`reviews-marquee__track reviews-marquee__track--${direction}`}
            key={direction}
          >
            {[0, 1].map((copy) => (
              <div
                aria-hidden={copy === 1}
                className="reviews-marquee__group"
                key={copy}
              >
                {reviews.map((review, index) => (
                  <article
                    className={`reviews-card reviews-card--${index % 4}`}
                    key={`${copy}-${review.name}`}
                  >
                    <div
                      aria-label="5 étoiles sur 5"
                      className="flex gap-1 text-[#A98442]"
                      role="img"
                    >
                      {Array.from({ length: 5 }, (_, star) => (
                        <Star
                          aria-hidden="true"
                          className="size-3.5 fill-current"
                          key={star}
                          strokeWidth={1.2}
                        />
                      ))}
                    </div>
                    <p className="mt-5 min-h-[92px] font-serif text-[17px] italic leading-relaxed text-[#302F29] sm:text-[19px]">
                      “{review.quote}”
                    </p>
                    <div className="mt-5 flex items-center gap-3 border-t border-[#D7D1C5]/80 pt-4">
                      <span
                        aria-hidden="true"
                        className="grid size-12 shrink-0 place-items-center rounded-full border border-[#BBA982] bg-[#F5F0E6] font-serif text-[17px] text-[#77613D]"
                      >
                        {review.initials}
                      </span>
                      <div>
                        <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-[#252720]">
                          {review.name}
                        </p>
                        <p className="mt-1 font-serif text-[13px] text-[#746D60]">
                          {review.location}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
