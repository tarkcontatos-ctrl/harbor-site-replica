import { createFileRoute } from "@tanstack/react-router";
import { SignIn1 } from "@/components/ui/modern-stunning-sign-in";

export const Route = createFileRoute("/login-equipe")({
  head: () => ({ meta: [
    { title: "Entrar na equipe — FB Estética Automotiva" },
    { name: "description", content: "Acesso autorizado à agenda dos funcionários e ao financeiro da FB." },
    { property: "og:title", content: "Entrar na equipe — FB Estética Automotiva" },
    { property: "og:description", content: "Acesso autorizado à agenda e ao financeiro da FB." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: () => <SignIn1 team />,
});