"use client";

import { useForm } from "@tanstack/react-form";
import { Combobox } from "@base-ui/react/combobox";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const orderSchema = z.object({
  name: z.string().trim().min(2, "Indiquez votre nom.").max(80, "Le nom est trop long."),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9\s().-]{8,20}$/, "Indiquez un numéro de téléphone valide."),
  area: z.string().min(1, "Choisissez votre quartier."),
  address: z.string().trim().min(5, "Indiquez votre adresse complète.").max(240, "L’adresse est trop longue."),
});

const casablancaAreas = [
  "Aïn Chock",
  "Aïn Diab",
  "Aïn Sebaâ",
  "Al Fida",
  "Anfa",
  "Bachkou",
  "Beauséjour",
  "Belvédère",
  "Ben M'Sick",
  "Bernoussi",
  "Bourgogne",
  "Californie",
  "Casa Finance City",
  "Centre-ville",
  "CIL",
  "Derb Ghallef",
  "Derb Sultan",
  "El Hank",
  "Essoukhour Assawda",
  "Ferme Bretonne",
  "Franceville",
  "Gauthier",
  "Gironde",
  "Hay Hassani",
  "Hay Mohammadi",
  "Hermitage",
  "Hôpitaux",
  "Lissasfa",
  "Maârif",
  "Maârif Extension",
  "Médina",
  "Mers Sultan",
  "Moulay Rachid",
  "Oasis",
  "Oulfa",
  "Palmier",
  "Polo",
  "Racine",
  "Roches Noires",
  "Sbata",
  "Sidi Belyout",
  "Sidi Maârouf",
  "Sidi Moumen",
  "Sidi Othmane",
  "Triangle d'Or",
  "Val Fleuri",
  "Yacoub El Mansour",
];

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
  const [selectedArea, setSelectedArea] = useState("");
  const freeDeliveryAreas = ["Hay Hassani", "Médina", "Maârif"];
  const deliveryFee = freeDeliveryAreas.includes(selectedArea) ? 0 : 30;
  const total = 70 + deliveryFee;

  const form = useForm({
    defaultValues: { name: "", phone: "", area: "", address: "" },
    validators: { onSubmit: orderSchema },
    onSubmit: async () => undefined,
  });

  return (
    <form
      className="mt-8 pt-6"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        setAttemptedSubmit(true);
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

        <form.Field name="area">
          {(field) => {
            const error = attemptedSubmit ? errorText(field.state.meta.errors) : "";
            return (
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-[#373A32]" htmlFor={field.name} id={`${field.name}-label`}>Quartier à Casablanca</label>
                <Combobox.Root
                  items={casablancaAreas}
                  name={field.name}
                  value={field.state.value}
                  onValueChange={(value) => {
                    const area = value ?? "";
                    field.handleChange(area);
                    setSelectedArea(area);
                  }}
                  required
                >
                  <Combobox.InputGroup className="relative mt-2">
                    <Combobox.Input
                      aria-labelledby={`${field.name}-label`}
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? `${field.name}-error` : undefined}
                      autoComplete="off"
                      className={`${fieldClassName} mt-0 pr-11 ${error ? "border-[#A44435] focus:border-[#A44435] focus:ring-[#A44435]/10" : ""}`}
                      id={field.name}
                      onBlur={field.handleBlur}
                      placeholder="Choisissez ou recherchez votre quartier"
                    />
                    <Combobox.Trigger
                      aria-label="Afficher les quartiers"
                      className="absolute inset-y-2 right-2 grid w-9 place-items-center text-[#777567] outline-none focus-visible:text-[#173C2D]"
                    >
                      <ChevronDown aria-hidden="true" className="size-4" />
                    </Combobox.Trigger>
                  </Combobox.InputGroup>
                  <Combobox.Portal>
                    <Combobox.Positioner sideOffset={4} className="z-50 outline-none">
                      <Combobox.Popup className="max-h-64 w-[var(--anchor-width)] overflow-hidden rounded-sm border border-[#D8D0C1] bg-white p-1 shadow-lg outline-none">
                        <Combobox.Empty>
                          <p className="px-3 py-2.5 text-sm text-[#777567]">Aucun quartier trouvé.</p>
                        </Combobox.Empty>
                        <Combobox.List
                          className="max-h-64 touch-pan-y overscroll-contain overflow-y-auto"
                          onWheel={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            event.currentTarget.scrollTop += event.deltaY;
                          }}
                        >
                          {(area: string) => (
                            <Combobox.Item
                              key={area}
                              value={area}
                              className="cursor-pointer rounded-sm px-3 py-2.5 text-sm text-[#292B25] outline-none data-[highlighted]:bg-[#F1EBDD] data-[selected]:font-semibold"
                            >
                              {area}
                            </Combobox.Item>
                          )}
                        </Combobox.List>
                      </Combobox.Popup>
                    </Combobox.Positioner>
                  </Combobox.Portal>
                </Combobox.Root>
                {error && <p className="mt-1.5 text-xs text-[#A44435]" id={`${field.name}-error`}>{error}</p>}
                <p aria-live="polite" className="mt-2 text-xs text-[#777567]">
                  Livraison : {deliveryFee === 0 ? "offerte" : `${deliveryFee} Dh`} · Total : {total} Dh
                </p>
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
        onClick={() => {
          const result = orderSchema.safeParse(form.state.values);
          if (!result.success) return;

          const { name, phone, area, address } = result.data;
          const message = [
            "Bonjour, je souhaite commander :",
            `Produit : ${productName}`,
            `Nom : ${name}`,
            `Téléphone : ${phone}`,
            `Quartier : ${area}`,
            `Adresse : ${address}`,
            "Prix : 70 Dh",
            `Livraison : ${deliveryFee === 0 ? "offerte" : `${deliveryFee} Dh`}`,
            `Total : ${total} Dh`,
            "Paiement : espèces à la livraison",
          ].join("\n");

          window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
        }}
        type="submit"
      >
        Commander · WhatsApp · {total} Dh
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
