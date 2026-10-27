import { describe, expect, it } from "vitest";
import { bookingReceiptText, receiptDetails, type ReceiptBooking } from "@/features/detailpro/booking-receipt";

const booking: ReceiptBooking = { id: "booking-123", dateTime: "2026-10-28T11:00:00Z", status: "agendado", location: "Unidade Centro", service: "Lavagem completa", price: 120, total: 120 };

describe("Booking receipt data", () => {
  it("uses Brasília time independently of the device time zone", () => {
    expect(receiptDetails(booking).time).toBe("08:00");
    expect(receiptDetails({ ...booking, dateTime: "2026-10-28T01:00:00Z" }).date).toBe("27/10/2026");
  });
  it("records the saved booking identity and customer in the download", () => {
    const receipt = bookingReceiptText(booking, "cliente@example.com");
    expect(receipt).toContain(booking.id);
    expect(receipt).toContain("cliente@example.com");
    expect(receipt).toContain(booking.service);
    expect(receipt).toContain(booking.location);
  });
  it("uses the persisted total rather than a service estimate", () => {
    expect(receiptDetails({ ...booking, price: 120, total: 150 }).amount).toMatch(/150,00/);
  });
  it("does not represent cancelled bookings as confirmed", () => {
    expect(receiptDetails({ ...booking, status: "cancelado" }).status).toBe("Cancelado");
  });
});