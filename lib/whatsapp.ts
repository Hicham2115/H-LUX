const businessWhatsAppNumber = "212684758824";

export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${businessWhatsAppNumber}?text=${encodeURIComponent(message)}`;
}
