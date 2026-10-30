import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/features/detailpro/pages";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — FB Estética Automotiva" },
      { name: "description", content: "Endereço no mapa, telefone, e-mail, redes sociais e formulário de contato da FB Estética Automotiva." },
      { property: "og:title", content: "Contato — FB Estética Automotiva" },
      { property: "og:description", content: "Endereço no mapa, telefone, e-mail, redes sociais e formulário de contato da FB Estética Automotiva." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPage,
});
