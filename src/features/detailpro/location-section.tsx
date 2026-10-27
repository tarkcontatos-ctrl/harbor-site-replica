import { ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DEMO_ADDRESS = "Av. Antônio Firmino da Silva, 210 · Santa Maria, José Bonifácio – SP";
const query = "Av. Antônio Firmino da Silva, 210, Santa Maria, José Bonifácio - SP, Brasil";
const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export function LocationSection() {
  return <section id="localizacao" className="border-t border-border bg-background text-foreground">
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
      <p className="mb-3 flex items-center gap-2 text-xs uppercase text-primary"><MapPin className="size-4 shrink-0" /> Localização de exemplo</p>
      <div className="mb-6 grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <div className="min-w-0"><h2 className="mb-3 text-2xl font-semibold">Onde encontrar a DetailPro</h2><p className="max-w-xl text-sm leading-relaxed text-soft-foreground">{DEMO_ADDRESS}</p><p className="mt-2 text-xs leading-relaxed text-muted-foreground">Endereço ilustrativo. Não é a localização real da empresa.</p></div>
        <Button asChild variant="outline" className="h-11 w-full sm:w-auto"><a href={mapLink} target="_blank" rel="noreferrer">Ver endereço de exemplo <ArrowUpRight /></a></Button>
      </div>
      <iframe title="Google Maps — endereço de exemplo, não é a localização real da DetailPro" src={`https://maps.google.com/maps?q=${encodeURIComponent(query)}&near=-21.04748,-49.69653&z=17&output=embed`} loading="lazy" className="h-72 w-full rounded-lg border border-border sm:h-96" referrerPolicy="no-referrer" allowFullScreen />
    </div>
  </section>;
}