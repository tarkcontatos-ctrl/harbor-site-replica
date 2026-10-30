import { createFileRoute } from "@tanstack/react-router";
import { ReviewsPage } from "@/features/detailpro/pages";

export const Route = createFileRoute("/avaliacoes")({
  head: () => ({
    meta: [
      { title: "Avaliações — FB Estética Automotiva" },
      { name: "description", content: "O que os clientes dizem sobre a FB Estética Automotiva." },
      { property: "og:title", content: "Avaliações — FB Estética Automotiva" },
      { property: "og:description", content: "O que os clientes dizem sobre a FB Estética Automotiva." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ReviewsPage,
});
