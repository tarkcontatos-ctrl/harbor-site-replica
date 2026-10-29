import { ArrowUpRight, MapPin, Instagram, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY, COMPANY_MAP_LINK } from "./company";

export function LocationSection() {
  return <section id="localizacao" className="border-t border-border bg-background text-foreground">
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
      <p className="mb-3 flex items-center gap-2 text-xs uppercase text-primary"><MapPin className="size-4 shrink-0" /> Localização</p>
      <div className="mb-6 grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <div className="min-w-0"><h2 className="mb-3 text-2xl font-semibold">Onde encontrar a FB</h2><p className="max-w-xl text-sm leading-relaxed text-soft-foreground">{COMPANY.address}<br />{COMPANY.city}</p></div>
        <Button asChild variant="outline" className="h-11 w-full sm:w-auto"><a href={COMPANY_MAP_LINK} target="_blank" rel="noreferrer">Abrir no Google Maps <ArrowUpRight /></a></Button>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6 text-sm"><a href={COMPANY.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 min-h-11 hover:text-primary"><Instagram className="size-4" />{COMPANY.instagram}</a><a href={COMPANY.whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 min-h-11 hover:text-primary"><Phone className="size-4" />WhatsApp · {COMPANY.whatsapp}</a></div>
      <iframe title="Google Maps — FB em José Bonifácio" src={`https://maps.google.com/maps?q=${encodeURIComponent(COMPANY.fullAddress)}&z=17&output=embed`} loading="lazy" className="h-72 w-full rounded-lg border border-border sm:h-96" referrerPolicy="no-referrer" allowFullScreen />
    </div>
  </section>;
}