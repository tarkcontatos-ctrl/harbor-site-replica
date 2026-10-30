import { createFileRoute } from "@tanstack/react-router";
import { StaffDashboard } from "@/features/detailpro/staff-dashboard";

export const Route = createFileRoute("/financeiro")({
  head: () => ({
    meta: [
      { title: "Painel financeiro — FB Estética Automotiva" },
      { name: "description", content: "Livro-caixa e agendamentos da FB Estética Automotiva. Acesso restrito à equipe." },
      { property: "og:title", content: "Painel financeiro — FB Estética Automotiva" },
      { property: "og:description", content: "Livro-caixa e agendamentos da FB Estética Automotiva." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: FinanceiroPage,
});

function FinanceiroPage() {
  return <StaffDashboard view="finance" />;
}
