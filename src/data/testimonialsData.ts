import { TestimonialItem, StudioStat } from "../types";

export const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    name: "Camila Albuquerque",
    role: "Cliente Fiel · Recife",
    avatar: "CA",
    rating: 5,
    date: "Há 2 semanas",
    verified: true,
    service: "Alongamento em Gel",
    comment: "A Paula é simplesmente impecável! Meu alongamento nunca ficou tão natural e fino. Já passei de 30 dias sem quebrar nenhuma unha. O studio é um charme, super calmo e higienizado."
  },
  {
    id: 2,
    name: "Mariana Vasconcelos",
    role: "Cliente · Cidade Universitária",
    avatar: "MV",
    rating: 5,
    date: "Há 1 mês",
    verified: true,
    service: "Blindagem Diamante",
    comment: "Minhas unhas viviam lascando e descamando. A blindagem da Paula salvou minhas mãos! O atendimento é acolhedor, pontual e o acabamento é de alto padrão."
  },
  {
    id: 3,
    name: "Beatriz Medeiros",
    role: "Cliente · Boa Viagem / Recife",
    avatar: "BM",
    rating: 5,
    date: "Há 3 semanas",
    verified: true,
    service: "Nail Art & Esmaltação Gel",
    comment: "Sensibilidade incrível para entender o que a gente quer. A nail art ficou delicada e elegante, exatamente a referência que mostrei. Recomendo de olhos fechados!"
  },
  {
    id: 4,
    name: "Juliana Barreto",
    role: "Cliente · Recife",
    avatar: "JB",
    rating: 5,
    date: "Há 1 mês",
    verified: true,
    service: "Manicure & Spa dos Pés",
    comment: "O momento no studio é uma verdadeira pausa no dia. Cutilagem suave sem tirar bife, produtos de primeira linha e um café delicioso. Nota 10!"
  }
];

export const studioStats: StudioStat[] = [
  { value: "5.0", label: "Nota Máxima no Google", sub: "100% de satisfação" },
  { value: "+1.200", label: "Procedimentos Realizados", sub: "Experiência comprovada" },
  { value: "28 dias", label: "Durabilidade Média", sub: "Resistência e acabamento" },
  { value: "100%", label: "Materiais Esterilizados", sub: "Autoclave hospitalar" }
];
