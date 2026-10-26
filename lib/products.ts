export const products = [
  {
    slug: "collier-piece",
    name: "Collier Pièce",
    stone: "Médaillon",
    images: [
      { src: "/images/products/collier-piece/vue-principale.png", alt: "Collier Pièce doré présenté dans un écrin" },
      { src: "/images/products/collier-piece/detail.png", alt: "Gros plan du médaillon Collier Pièce sur soie claire" },
      { src: "/images/products/collier-piece/buste.png", alt: "Collier Pièce présenté sur un buste de bijouterie" },
    ],
    description:
      "Un médaillon au charme patrimonial, pensé comme une petite pièce d’histoire à porter chaque jour.",
  },
  {
    slug: "collier-emeraude",
    name: "Collier Émeraude",
    stone: "Émeraude",
    images: [
      { src: "/images/products/collier-emeraude/vue-principale.png", alt: "Collier Émeraude présenté dans un écrin" },
      { src: "/images/products/collier-emeraude/detail.png", alt: "Gros plan du pendentif vert du Collier Émeraude" },
      { src: "/images/products/collier-emeraude/buste.png", alt: "Collier Émeraude présenté sur un buste" },
    ],
    description:
      "Une pierre verte profonde et lumineuse apporte une touche de couleur à cette pièce délicate.",
  },
  {
    slug: "collier-saphir",
    name: "Collier Saphir",
    stone: "Saphir",
    images: [
      { src: "/images/products/collier-saphir/vue-principale.png", alt: "Collier Saphir bleu présenté dans un écrin" },
      { src: "/images/products/collier-saphir/detail.png", alt: "Gros plan du pendentif bleu du Collier Saphir" },
      { src: "/images/products/collier-saphir/buste.png", alt: "Collier Saphir présenté sur un buste" },
    ],
    description:
      "La nuance bleue du saphir évoque la lumière du soir et se porte facilement au quotidien.",
  },
  {
    slug: "collier-quartz-rose",
    name: "Collier Quartz Rose",
    stone: "Quartz rose",
    images: [
      { src: "/images/products/collier-quartz-rose/vue-principale.png", alt: "Collier Quartz Rose présenté dans un écrin" },
      { src: "/images/products/collier-quartz-rose/detail.png", alt: "Gros plan du pendentif rose du Collier Quartz Rose" },
      { src: "/images/products/collier-quartz-rose/buste.png", alt: "Collier Quartz Rose présenté sur un buste" },
    ],
    description:
      "Un quartz rose tout en douceur, serti dans une silhouette fine et facile à offrir.",
  },
  {
    slug: "collier-jade",
    name: "Collier Jade",
    stone: "Jade",
    images: [
      { src: "/images/products/collier-jade/vue-principale.png", alt: "Collier Jade présenté dans un écrin" },
      { src: "/images/products/collier-jade/detail.png", alt: "Gros plan du pendentif vert du Collier Jade" },
      { src: "/images/products/collier-jade/buste.png", alt: "Collier Jade présenté sur un buste" },
    ],
    description:
      "Le jade révèle un vert apaisant dans un pendentif intemporel aux lignes épurées.",
  },
  {
    slug: "collier-citrine",
    name: "Collier Citrine",
    stone: "Citrine",
    images: [
      { src: "/images/products/collier-citrine/vue-principale.png", alt: "Collier Citrine présenté dans un écrin" },
      { src: "/images/products/collier-citrine/detail.png", alt: "Gros plan du pendentif jaune du Collier Citrine" },
      { src: "/images/products/collier-citrine/buste.png", alt: "Collier Citrine présenté sur un buste" },
    ],
    description:
      "La citrine capte la lumière avec ses tons dorés et ensoleillés, pour une note chaleureuse.",
  },
  {
    slug: "collier-onyx",
    name: "Collier Onyx",
    stone: "Onyx",
    images: [
      { src: "/images/products/collier-onyx/vue-principale.png", alt: "Collier Onyx noir présenté dans un écrin" },
      { src: "/images/products/collier-onyx/detail.png", alt: "Gros plan du pendentif noir du Collier Onyx" },
      { src: "/images/products/collier-onyx/buste.png", alt: "Collier Onyx présenté sur un buste" },
    ],
    description:
      "L’onyx noir donne à ce collier une présence graphique, équilibrée par une monture dorée.",
  },
  {
    slug: "collier-grenat",
    name: "Collier Grenat",
    stone: "Grenat",
    images: [
      { src: "/images/products/collier-grenat/vue-principale.png", alt: "Collier Grenat rouge présenté dans un écrin" },
      { src: "/images/products/collier-grenat/detail.png", alt: "Gros plan du pendentif rouge du Collier Grenat" },
      { src: "/images/products/collier-grenat/buste.png", alt: "Collier Grenat présenté sur un buste" },
    ],
    description:
      "Une pierre grenat aux reflets rouges compose une pièce de caractère, élégante en toute saison.",
  },
  {
    slug: "medaillon-heritage",
    name: "Médaillon Héritage",
    stone: "Médaillon",
    images: [
      { src: "/images/products/medaillon-heritage/vue-principale.png", alt: "Médaillon Héritage doré présenté dans un écrin" },
      { src: "/images/products/medaillon-heritage/detail.png", alt: "Gros plan du relief du Médaillon Héritage" },
      { src: "/images/products/medaillon-heritage/buste.png", alt: "Médaillon Héritage présenté sur un buste vert" },
    ],
    description:
      "Inspiré des bijoux transmis de génération en génération, ce médaillon accompagne les jours précieux.",
  },
] as const;

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
