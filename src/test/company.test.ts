import { describe, expect, it } from "vitest";
import { COMPANY, COMPANY_MAP_LINK } from "@/features/detailpro/company";

describe("Official company contacts", () => {
  it("uses the owner's address and city for the map", () => {
    expect(new URL(COMPANY_MAP_LINK).searchParams.get("query")).toBe("Rua José Antônio Pinto, 205, José Bonifácio – SP");
  });
  it("links the owner's Instagram profile", () => {
    expect(COMPANY.instagram).toBe("@fb_detail017");
    expect(COMPANY.instagramUrl).toBe("https://instagram.com/fb_detail017");
  });
  it("links the owner's WhatsApp number", () => {
    expect(COMPANY.whatsapp).toBe("(16) 99298-7679");
    expect(COMPANY.whatsappUrl).toBe("https://wa.me/5516992987679");
  });
});