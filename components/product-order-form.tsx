"use client";

import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import { z } from "zod";

const orderSchema = z.object({
  name: z.string().trim().min(2, "Indiquez votre nom.").max(80, "Le nom est trop long."),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9\s().-]{8,20}$/, "Indiquez un numéro de téléphone valide."),
  address: z.string().trim().min(5, "Indiquez votre adresse complète.").max(240, "L’adresse est trop longue."),
});

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

const fieldClassName =
  "mt-2 min-h-12 w-full rounded-sm border border-[#D8D0C1] bg-white px-4 py-3 text-sm text-[#292B25] outline-none transition-colors placeholder:text-[#999487] focus:border-[#173C2D] focus:ring-2 focus:ring-[#173C2D]/10";

export default function ProductOrderForm({ productName }: { productName: string }) {
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [notice, setNotice] = useState("");

  const form = useForm({
    defaultValues: { name: "", phone: "", address: "" },
    validators: { onSubmit: orderSchema },
    onSubmit: async () => {
      setNotice(
        "Vos informations sont valides. L’envoi des commandes n’est pas encore connecté.",
      );
    },
  });

  return (
    <form
      className="mt-8 border-t border-[#D7D1C5] pt-6"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        setAttemptedSubmit(true);
        setNotice("");
        void form.handleSubmit();
      }}
    >
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#242720]">Commander ce collier</p>
          <p className="mt-1 text-xs text-[#777567]">{productName}</p>
        </div>
        <p className="shrink-0 font-display text-2xl text-[#173C2D]">70 Dh</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <form.Field name="name">
          {(field) => {
            const error = attemptedSubmit ? errorText(field.state.meta.errors) : "";
            return (
              <div>
                <label className="text-xs font-semibold text-[#373A32]" htmlFor={field.name}>Nom complet</label>
                <input
                  autoComplete="name"
                  className={`${fieldClassName} ${error ? "border-[#A44435] focus:border-[#A44435] focus:ring-[#A44435]/10" : ""}`}
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

        <form.Field name="phone">
          {(field) => {
            const error = attemptedSubmit ? errorText(field.state.meta.errors) : "";
            return (
              <div>
                <label className="text-xs font-semibold text-[#373A32]" htmlFor={field.name}>Téléphone</label>
                <input
                  autoComplete="tel"
                  className={`${fieldClassName} ${error ? "border-[#A44435] focus:border-[#A44435] focus:ring-[#A44435]/10" : ""}`}
                  id={field.name}
                  inputMode="tel"
                  name={field.name}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  placeholder="06 00 00 00 00"
                  type="tel"
                  value={field.state.value}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? `${field.name}-error` : undefined}
                />
                {error && <p className="mt-1.5 text-xs text-[#A44435]" id={`${field.name}-error`}>{error}</p>}
              </div>
            );
          }}
        </form.Field>

        <form.Field name="address">
          {(field) => {
            const error = attemptedSubmit ? errorText(field.state.meta.errors) : "";
            return (
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-[#373A32]" htmlFor={field.name}>Adresse de livraison</label>
                <textarea
                  autoComplete="street-address"
                  className={`${fieldClassName} min-h-24 resize-y ${error ? "border-[#A44435] focus:border-[#A44435] focus:ring-[#A44435]/10" : ""}`}
                  id={field.name}
                  name={field.name}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  placeholder="Rue, ville, code postal"
                  value={field.state.value}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? `${field.name}-error` : undefined}
                />
                {error && <p className="mt-1.5 text-xs text-[#A44435]" id={`${field.name}-error`}>{error}</p>}
              </div>
            );
          }}
        </form.Field>
      </div>

      <button
        className="mt-5 inline-flex min-h-14 w-full items-center justify-between bg-[#173C2D] px-5 text-left text-[10px] font-semibold uppercase tracking-[0.15em] text-[#F5F0E6] transition-colors hover:bg-[#315B45] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C49A4A] sm:px-7 sm:text-xs"
        type="submit"
      >
        Envoyer ma demande · 70 Dh
        <span aria-hidden="true">→</span>
      </button>
      {notice && <p aria-live="polite" className="mt-3 text-sm leading-6 text-[#173C2D]">{notice}</p>}
    </form>
  );
}
