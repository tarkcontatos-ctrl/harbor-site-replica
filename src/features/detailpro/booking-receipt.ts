export type ReceiptBooking = {
  id: string;
  dateTime: string;
  status: string;
  location: string;
  service: string;
  price: number;
  total?: number;
};

export function receiptDetails(booking: ReceiptBooking) {
  const date = new Date(booking.dateTime);
  const options = { timeZone: "America/Sao_Paulo" };
  return {
    date: date.toLocaleDateString("pt-BR", { ...options, day: "2-digit", month: "2-digit", year: "numeric" }),
    time: date.toLocaleTimeString("pt-BR", { ...options, hour: "2-digit", minute: "2-digit", hourCycle: "h23" }),
    amount: (booking.total ?? booking.price).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
    status: ({ agendado: "Confirmado", cancelado: "Cancelado", concluido: "Concluído" } as Record<string, string>)[booking.status] ?? booking.status,
  };
}

export function bookingReceiptText(booking: ReceiptBooking, email: string) {
  const details = receiptDetails(booking);
  return [
    "FB Estética Automotiva — Comprovante de agendamento",
    `Código: ${booking.id}`,
    `Situação: ${details.status}`,
    `Cliente: ${email}`,
    `Serviço: ${booking.service}`,
    `Data: ${details.date}`,
    `Horário: ${details.time} (Brasília)`,
    `Local: ${booking.location}`,
    `Valor: ${details.amount}`,
    "",
    "Este comprovante registra o agendamento, não comprova pagamento.",
    "Consulte a situação atual em Meus agendamentos no site FB Estética Automotiva.",
  ].join("\n");
}