import { Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { bookingReceiptText, receiptDetails, type ReceiptBooking } from "./booking-receipt";

export function BookingConfirmation({ booking, email, onClose }: { booking: ReceiptBooking | undefined; email: string; onClose: () => void }) {
  if (!booking) return null;
  const details = receiptDetails(booking);
  const save = () => {
    const url = URL.createObjectURL(new Blob(["\uFEFF", bookingReceiptText(booking, email)], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `DetailPro-agendamento-${booking.id}.txt`;
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <Dialog open onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-md max-h-[90dvh] overflow-y-auto rounded-lg">
        <DialogHeader className="items-center text-center sm:text-center">
          <span className="size-12 grid place-items-center rounded-full bg-primary/15 text-primary"><Check className="size-6" /></span>
          <DialogTitle className="pt-2 tracking-normal">{booking.status === "agendado" ? "Agendamento confirmado!" : "Comprovante de agendamento"}</DialogTitle>
          <DialogDescription>DetailPro · {details.status}</DialogDescription>
        </DialogHeader>
        <dl className="divide-y divide-border text-sm">
          {[["Serviço", booking.service], ["Data", `${details.date} às ${details.time}`], ["Local", booking.location], ["Valor", details.amount], ["Cliente", email], ["Código", booking.id]].map(([label, value]) => (
            <div key={label} className="py-2.5 grid grid-cols-[4rem_minmax(0,1fr)] gap-3">
              <dt className="text-muted-foreground">{label}</dt><dd className="break-words font-medium">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="text-xs text-muted-foreground">Horário de Brasília. Este comprovante não comprova pagamento.</p>
        <Button type="button" onClick={save} className="min-h-11 whitespace-normal"><Download className="size-4" /> Salvar comprovante</Button>
        <Button type="button" variant="outline" onClick={onClose} className="min-h-11">Voltar aos agendamentos</Button>
      </DialogContent>
    </Dialog>
  );
}