"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

const questions = [
  {
    question: "Où sont imaginés les bijoux H-Lux ?",
    answer:
      "Chaque pièce prend racine au Maroc. Nos créations s’inspirent de son patrimoine et sont façonnées avec soin par des artisans passionnés.",
  },
  {
    question: "La livraison est-elle offerte ?",
    answer:
      "Oui, la livraison est gratuite dès 500 MAD d’achat. Le montant de votre commande s’affiche avant sa validation.",
  },
  {
    question: "Puis-je retourner ma commande ?",
    answer:
      "Les retours sont possibles sous 14 jours. Vous pouvez consulter les conditions de retour avant de finaliser votre commande.",
  },
  {
    question: "Mon bijou peut-il être offert ?",
    answer:
      "Oui. Les commandes sont préparées avec attention et peuvent être présentées dans un emballage cadeau élégant.",
  },
  {
    question: "Le paiement en ligne est-il sécurisé ?",
    answer:
      "Oui, le paiement est effectué via un parcours sécurisé au moment de la commande.",
  },
];

function QuestionMark({
  isOpen,
  className = "",
}: {
  isOpen: boolean;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`flex size-8 shrink-0 items-center justify-center text-current/70 transition-colors ${isOpen ? "text-[#D9B35F]" : ""} ${className}`}
    >
      <Plus
        className={`size-4 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
      />
    </span>
  );
}

export default function Faq() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="faq-title"
      className="bg-[#173C2D] px-5 py-12 text-[#F5F0E6] sm:px-8 sm:py-14 lg:px-[7vw] lg:py-16"
      id="faq"
    >
      <div className="mx-auto max-w-[1050px]">
        <header className="mb-7 grid gap-3 sm:mb-9 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-10">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D9B35F] sm:text-xs">
              Aide & informations
            </p>
            <h2
              className="mt-2 font-display text-[clamp(2.25rem,4vw,3.4rem)] leading-[1.02] tracking-[-0.025em]"
              id="faq-title"
            >
              Questions fréquentes
            </h2>
          </div>
          <p className="max-w-[390px] text-sm leading-6 text-[#F5F0E6]/75 sm:text-[15px] sm:leading-7 lg:justify-self-end">
            Réponses sur nos créations, la livraison, les retours et le paiement.
          </p>
        </header>

        <div className="border-t border-[#F5F0E6]/25">
          {questions.map(({ question, answer }, index) => (
            <div className="border-b border-[#F5F0E6]/25" key={question}>
              <button
                aria-controls={`faq-answer-${index}`}
                aria-expanded={openQuestion === index}
                className="flex min-h-[68px] w-full cursor-pointer items-center gap-4 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#E4C875] sm:min-h-[76px] sm:gap-6 sm:py-5"
                onClick={() =>
                  setOpenQuestion(openQuestion === index ? null : index)
                }
                type="button"
              >
                <span className="flex-1 font-sans text-sm font-medium leading-snug text-[#F5F0E6] sm:text-base">
                  {question}
                </span>
                <QuestionMark
                  className="text-[#E4C875]/80"
                  isOpen={openQuestion === index}
                />
              </button>
              <div
                aria-hidden={openQuestion !== index}
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${openQuestion === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                id={`faq-answer-${index}`}
              >
                <div className="overflow-hidden">
                  <p className="pb-4 pr-10 text-sm leading-6 text-[#F5F0E6]/75 sm:pb-5 sm:pr-12 sm:text-[15px] sm:leading-7">
                    {answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
