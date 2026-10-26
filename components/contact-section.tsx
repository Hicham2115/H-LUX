"use client";

import { useForm } from "@tanstack/react-form";
import { ArrowRight, Clock3, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Indiquez votre nom.").max(80, "Le nom est trop long."),
  email: z.string().trim().email("Indiquez une adresse e-mail valide.").max(254, "L’adresse e-mail est trop longue."),
  subject: z.string().trim().min(3, "Précisez l’objet de votre demande.").max(120, "L’objet est trop long."),
  message: z.string().trim().min(10, "Votre message doit contenir au moins 10 caractères.").max(1500, "Votre message ne peut pas dépasser 1 500 caractères."),
});

const fieldStyles =
  "mt-2 min-h-12 w-full rounded-sm border border-[#D8D0C1] bg-white px-4 py-3 text-sm text-[#292B25] outline-none transition-colors placeholder:text-[#999487] focus:border-[#173C2D] focus:ring-2 focus:ring-[#173C2D]/10";

function errorText(errors: unknown[]) {
  return errors
    .map((error) => {
      if (typeof error === "string") return error;
      if (error instanceof Error) return error.message;
      if (error && typeof error === "object" && "message" in error) {
        return typeof error.message === "string" ? error.message : "";
      }
      return "";
    })
    .filter(Boolean)
    .join(" ");
}

export default function ContactSection() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [notice, setNotice] = useState("");

  const form = useForm({
    defaultValues: { name: "", email: "", subject: "", message: "" },
    validators: { onSubmit: contactSchema },
    onSubmit: async () => {
      setHasSubmitted(true);
      setNotice(
        "Votre message est prêt. L’envoi sera activé dès que notre messagerie sera connectée.",
      );
    },
    onSubmitInvalid: () => {
      setHasSubmitted(true);
      window.requestAnimationFrame(() => {
        const firstInvalidField = document.querySelector<HTMLElement>(
          '#contact-form [aria-invalid="true"]',
        );
        firstInvalidField?.focus();
        firstInvalidField?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    },
  });

  return (
    <section
      aria-labelledby="contact-title"
      className="bg-[#EAE3D6] px-5 py-14 sm:px-8 sm:py-18 lg:px-[5.5vw] lg:py-24"
      id="contact"
    >
      <div className="mx-auto grid max-w-[1320px] overflow-hidden rounded-[4px] border border-[#173C2D]/10 bg-[#FBF8F1] shadow-[0_24px_70px_rgba(23,60,45,0.09)] lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative flex flex-col justify-between overflow-hidden bg-[#173C2D] px-6 py-9 text-[#F5F0E6] sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          <span aria-hidden="true" className="absolute -right-14 -top-16 size-64 rotate-45 border border-[#D9B35F]/20" />
          <div className="relative">
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#E4C875] sm:text-xs">
              <span aria-hidden="true" className="h-px w-8 bg-[#D9B35F]" />
              À votre écoute
            </p>
            <h2
              className="max-w-[470px] font-display text-[clamp(2.5rem,4.8vw,4.3rem)] leading-[0.98] tracking-[-0.04em]"
              id="contact-title"
            >
              Parlons de votre prochain bijou.
            </h2>
            <p className="mt-6 max-w-[390px] text-sm leading-7 text-[#F5F0E6]/75 sm:text-base">
              Une question, un conseil ou une attention particulière ? Écrivez-nous, nous serons ravis de vous lire.
            </p>
          </div>

          <div className="relative mt-10 border-t border-[#F5F0E6]/20 pt-6">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center border border-[#D9B35F]/45 text-[#E4C875]">
                <MessageCircle aria-hidden="true" className="size-5" />
              </span>
              <div>
                <p className="font-serif text-lg">Besoin d’une réponse rapide ?</p>
                <p className="mt-1 text-sm leading-6 text-[#F5F0E6]/70">
                  Consultez nos informations sur la livraison, les retours et les commandes.
                </p>
                <Link
                  className="mt-4 inline-flex min-h-10 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#E4C875] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E4C875] sm:text-xs"
                  href="#faq"
                >
                  Voir les réponses
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </div>
            <p className="mt-8 flex items-center gap-2 text-xs text-[#F5F0E6]/55">
              <Clock3 aria-hidden="true" className="size-4" />
              Nous vous répondrons dès que possible.
            </p>
          </div>
        </div>

        <div className="px-5 py-8 sm:px-9 sm:py-10 lg:px-12 lg:py-14">
          <div className="mb-7 border-b border-[#D8D0C1] pb-5 sm:mb-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8C7043]">Écrivez-nous</p>
            <p className="mt-2 text-sm leading-6 text-[#777567]">
              Remplissez les champs ci-dessous et dites-nous comment nous pouvons vous aider.
            </p>
          </div>

          <form
            id="contact-form"
            noValidate
            onSubmit={(event) => {
              event.preventDefault();
              event.stopPropagation();
              setNotice("");
              void form.handleSubmit();
            }}
          >
            <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
              <form.Field
                name="name"
                validators={{
                  onChange: ({ value }) => {
                    if (!hasSubmitted) return undefined;
                    const result = contactSchema.shape.name.safeParse(value);
                    return result.success ? undefined : result.error.issues[0]?.message;
                  },
                }}
              >
                {(field) => {
                  const error = errorText(field.state.meta.errors);
                  return (
                    <div>
                      <label className="text-xs font-semibold text-[#373A32]" htmlFor={field.name}>Nom complet</label>
                      <input
                        autoComplete="name"
                        className={`${fieldStyles} ${error ? "border-[#A44435] focus:border-[#A44435] focus:ring-[#A44435]/10" : ""}`}
                        id={field.name}
                        name={field.name}
                        onBlur={field.handleBlur}
                        onChange={(event) => field.handleChange(event.target.value)}
                        placeholder="Votre nom"
                        value={field.state.value}
                        aria-invalid={Boolean(error)}
                        aria-describedby={error ? `${field.name}-error` : undefined}
                      />
                      {error && <p className="mt-1.5 text-xs text-[#A44435]" id={`${field.name}-error`}>{error}</p>}
                    </div>
                  );
                }}
              </form.Field>

              <form.Field
                name="email"
                validators={{
                  onChange: ({ value }) => {
                    if (!hasSubmitted) return undefined;
                    const result = contactSchema.shape.email.safeParse(value);
                    return result.success ? undefined : result.error.issues[0]?.message;
                  },
                }}
              >
                {(field) => {
                  const error = errorText(field.state.meta.errors);
                  return (
                    <div>
                      <label className="text-xs font-semibold text-[#373A32]" htmlFor={field.name}>Adresse e-mail</label>
                      <input
                        autoComplete="email"
                        className={`${fieldStyles} ${error ? "border-[#A44435] focus:border-[#A44435] focus:ring-[#A44435]/10" : ""}`}
                        id={field.name}
                        name={field.name}
                        onBlur={field.handleBlur}
                        onChange={(event) => field.handleChange(event.target.value)}
                        placeholder="vous@exemple.com"
                        type="email"
                        value={field.state.value}
                        aria-invalid={Boolean(error)}
                        aria-describedby={error ? `${field.name}-error` : undefined}
                      />
                      {error && <p className="mt-1.5 text-xs text-[#A44435]" id={`${field.name}-error`}>{error}</p>}
                    </div>
                  );
                }}
              </form.Field>

              <form.Field
                name="subject"
                validators={{
                  onChange: ({ value }) => {
                    if (!hasSubmitted) return undefined;
                    const result = contactSchema.shape.subject.safeParse(value);
                    return result.success ? undefined : result.error.issues[0]?.message;
                  },
                }}
              >
                {(field) => {
                  const error = errorText(field.state.meta.errors);
                  return (
                    <div className="sm:col-span-2">
                      <label className="text-xs font-semibold text-[#373A32]" htmlFor={field.name}>Objet</label>
                      <input
                        autoComplete="off"
                        className={`${fieldStyles} ${error ? "border-[#A44435] focus:border-[#A44435] focus:ring-[#A44435]/10" : ""}`}
                        id={field.name}
                        name={field.name}
                        onBlur={field.handleBlur}
                        onChange={(event) => field.handleChange(event.target.value)}
                        placeholder="Comment pouvons-nous vous aider ?"
                        value={field.state.value}
                        aria-invalid={Boolean(error)}
                        aria-describedby={error ? `${field.name}-error` : undefined}
                      />
                      {error && <p className="mt-1.5 text-xs text-[#A44435]" id={`${field.name}-error`}>{error}</p>}
                    </div>
                  );
                }}
              </form.Field>

              <form.Field
                name="message"
                validators={{
                  onChange: ({ value }) => {
                    if (!hasSubmitted) return undefined;
                    const result = contactSchema.shape.message.safeParse(value);
                    return result.success ? undefined : result.error.issues[0]?.message;
                  },
                }}
              >
                {(field) => {
                  const error = errorText(field.state.meta.errors);
                  return (
                    <div className="sm:col-span-2">
                      <label className="text-xs font-semibold text-[#373A32]" htmlFor={field.name}>Votre message</label>
                      <textarea
                        className={`${fieldStyles} min-h-36 resize-none ${error ? "border-[#A44435] focus:border-[#A44435] focus:ring-[#A44435]/10" : ""}`}
                        id={field.name}
                        maxLength={1500}
                        name={field.name}
                        onBlur={field.handleBlur}
                        onChange={(event) => field.handleChange(event.target.value)}
                        placeholder="Racontez-nous…"
                        value={field.state.value}
                        aria-invalid={Boolean(error)}
                        aria-describedby={error ? `${field.name}-error` : undefined}
                      />
                      <div className="mt-1.5 flex justify-between gap-4">
                        {error ? <p className="text-xs text-[#A44435]" id={`${field.name}-error`}>{error}</p> : <span />}
                        <span className="shrink-0 text-xs text-[#8A877E]">{field.state.value.length}/1 500</span>
                      </div>
                    </div>
                  );
                }}
              </form.Field>
            </div>

            <div className="mt-6 flex flex-col items-start gap-4 border-t border-[#D8D0C1] pt-5 sm:mt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[300px] text-xs leading-5 text-[#777567]">
                L’envoi du formulaire sera activé après connexion de notre messagerie.
              </p>
              <button
                className="h-lux-cta group inline-flex min-h-12 w-full items-center justify-between gap-8 border border-[#173C2D] bg-[#173C2D] px-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#F5F0E6] hover:border-[#173C2D] hover:bg-transparent hover:text-[#173C2D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C49A4A] sm:w-auto sm:px-6 sm:text-xs"
                type="submit"
              >
                Préparer mon message
                <ArrowRight aria-hidden="true" className="size-4" />
              </button>
            </div>
            {notice && (
              <p aria-live="polite" className="mt-4 border-l-2 border-[#C49A4A] bg-[#F1EBDD] px-4 py-3 text-sm leading-6 text-[#373A32]" role="status">
                {notice}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
