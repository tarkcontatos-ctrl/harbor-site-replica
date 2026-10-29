export const COMPANY = {
  name: "FB Centro de Estética Automotiva",
  address: "Rua José Antônio Pinto, 205",
  city: "José Bonifácio – SP",
  fullAddress: "Rua José Antônio Pinto, 205, José Bonifácio – SP",
  instagram: "@fb_detail017",
  instagramUrl: "https://instagram.com/fb_detail017",
  whatsapp: "(16) 99298-7679",
  whatsappUrl: "https://wa.me/5516992987679",
} as const;
export const COMPANY_MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.fullAddress)}`;