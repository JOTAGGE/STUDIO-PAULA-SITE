import { StudioInfo } from "../types";

export const studioInfo: StudioInfo = {
  name: "Studio Paula Lima",
  shortName: "Paula Lima",
  tagline: "Beleza em cada detalhe",
  badge: "Nail Designer & Beauty Studio",
  city: "Recife — PE",
  neighborhood: "Cidade Universitária",
  address: "Av. Prof. Artur de Sá, Cidade Universitária",
  fullAddress: "Av. Prof. Artur de Sá, Cidade Universitária, Recife — PE, 50740-020",
  phone: "(81) 97332-6052",
  phoneRaw: "5581973326052",
  whatsappUrl: "https://wa.me/5581973326052",
  instagram: "@studiopaulalima",
  instagramUrl: "https://instagram.com",
  googleMapsUrl: "https://maps.app.goo.gl/mxDDjuVRTM1krRGx7",
  googleRating: 5.0,
  googleReviewsCount: "Avaliação Máxima",
  hours: [
    { days: "Terça a Sexta", time: "08:00 às 19:00" },
    { days: "Sábado", time: "08:00 às 18:00" },
    { days: "Domingo e Segunda", time: "Fechado (Atendimento Exclusivo sob consulta)" },
  ],
  quickHours: "Terça a Sábado · 08h às 19h",
  paymentMethods: ["Pix", "Cartão de Crédito", "Cartão de Débito", "Dinheiro"],
  amenities: [
    "Ambiente climatizado e aconchegante",
    "Biossegurança com materiais 100% esterilizados em autoclave",
    "Wi-Fi de alta velocidade e café cortesia",
    "Atendimento pontual e individualizado",
    "Produtos de padrão premium internacional"
  ]
};

export const generateWhatsAppLink = (customMessage: string = ""): string => {
  const defaultText = "Olá, Paula! Vim pelo site do Studio Paula Lima e gostaria de informações sobre agendamento.";
  const message = customMessage || defaultText;
  return `https://wa.me/${studioInfo.phoneRaw}?text=${encodeURIComponent(message)}`;
};
