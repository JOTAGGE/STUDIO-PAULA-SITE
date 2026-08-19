import { GalleryCategory, GalleryItem } from "../types";

export const galleryCategories: GalleryCategory[] = [
  { id: "all", label: "Todos os Trabalhos" },
  { id: "alongamento", label: "Alongamento em Gel" },
  { id: "nailart", label: "Nail Art & Francesinha" },
  { id: "esmaltacao", label: "Esmaltação & Clássicas" },
  { id: "studio", label: "Studio & Paula Lima" }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "/images/unha1.png",
    title: "Alongamento em Gel com Acabamento Natural",
    category: "alongamento",
    categoryLabel: "Alongamento em Gel",
    description: "Estrutura fina com ápice perfeito e cuticulagem russa polida, valorizando o formato e o brilho.",
    tags: ["Gel Moldado", "Natural Nails", "Nude Chic"],
    featured: true
  },
  {
    id: 2,
    image: "/images/unha2.png",
    title: "Francesinha Editorial & Traços Delicados",
    category: "nailart",
    categoryLabel: "Nail Art Minimalista",
    description: "Design clássico repaginado com pontas precisas e efeito leitoso sofisticado.",
    tags: ["Francesinha", "Fine Line", "Elegance"],
    featured: true
  },
  {
    id: 3,
    image: "/images/unha3.png",
    title: "Esmaltação em Gel de Alta Pigmentação",
    category: "esmaltacao",
    categoryLabel: "Esmaltação em Gel",
    description: "Brilho vítreo espelhado com acabamento impecável rente à cutícula sem encostar.",
    tags: ["Gel Polish", "Glossy", "Durabilidade"],
    featured: true
  },
  {
    id: 4,
    image: "/images/paulinha1.png",
    title: "Paula Lima — Especialista em Estética Ungueal",
    category: "studio",
    categoryLabel: "Studio & Profissional",
    description: "Atendimento individual e exclusivo focado na saúde e beleza das mãos em Recife.",
    tags: ["Paula Lima", "Nail Designer", "Recife/PE"],
    featured: false
  },
  {
    id: 5,
    image: "/images/paulinha2.png",
    title: "Espaço Paula Lima — Cidade Universitária",
    category: "studio",
    categoryLabel: "Studio & Profissional",
    description: "Ambiente reservado e tranquilo projetado para uma experiência de pausa e autocuidado.",
    tags: ["Ambiente", "Biossegurança", "Aconchego"],
    featured: false
  }
];
