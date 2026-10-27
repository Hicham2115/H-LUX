import { z } from "zod";

const orderSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().regex(/^\+?[0-9\s().-]{8,20}$/),
  area: z.string().trim().min(1).max(80),
  address: z.string().trim().min(5).max(240),
  productName: z.string().trim().min(1).max(120),
});

const freeDeliveryAreas = new Set(["Hay Hassani", "Médina", "Maârif"]);

export async function POST(request: Request) {
  const endpoint = process.env.ORDER_APPS_SCRIPT_URL;
  const secret = process.env.ORDER_APPS_SCRIPT_SECRET;

  if (!endpoint || !secret) {
    return Response.json({ error: "Le service de commande n’est pas configuré." }, { status: 503 });
  }

  let input: unknown;
  try {
    input = await request.json();
  } catch {
    return Response.json({ error: "La demande est invalide." }, { status: 400 });
  }

  const parsed = orderSchema.safeParse(input);
  if (!parsed.success) {
    return Response.json({ error: "Vérifiez les informations de commande." }, { status: 400 });
  }

  const deliveryFee = freeDeliveryAreas.has(parsed.data.area) ? 0 : 30;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...parsed.data,
        secret,
        productPrice: 70,
        deliveryFee,
        total: 70 + deliveryFee,
      }),
      signal: AbortSignal.timeout(15000),
      cache: "no-store",
    });

    const result: unknown = await response.json();
    if (!response.ok || !result || typeof result !== "object" || !("ok" in result) || result.ok !== true) {
      return Response.json({ error: "La commande n’a pas pu être enregistrée." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch {
    console.error("Order Apps Script request failed");
    return Response.json({ error: "Impossible de joindre le service de commande." }, { status: 502 });
  }
}
