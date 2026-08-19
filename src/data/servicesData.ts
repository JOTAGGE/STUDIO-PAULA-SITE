import { ServiceCategory, ServiceItem, CareInstruction } from "../types";

export const serviceCategories: ServiceCategory[] = [
  { id: "all", label: "Todos os Serviços" },
  { id: "alongamento", label: "Alongamentos & Extensão" },
  { id: "esmaltacao", label: "Esmaltação em Gel & Blindagem" },
  { id: "manicure", label: "Manicure & Spa dos Pés" },
  { id: "nailart", label: "Nail Art & Especiais" }
];

export const servicesData: ServiceItem[] = [
  {
    id: "alongamento-gel-tips",
    category: "alongamento",
    title: "Alongamento em Gel na Tip / Molde F1",
    subtitle: "Estrutura leve, acabamento natural e alta durabilidade",
    duration: "2h — 2h30",
    priceEstimate: "A partir de R$ 140",
    popular: true,
    tag: "Mais Pedido",
    description: "Alongamento esculpido com gel de alta performance que garante curvatura perfeita, resistência para a rotina diária e acabamento incrivelmente fino e natural.",
    benefits: [
      "Unhas com formato e comprimento impecáveis",
      "Resistência contra quebras e lascas",
      "Durabilidade média de 25 a 30 dias até a manutenção",
      "Inclui cutilagem russa e hidratação"
    ],
    recommendedFor: "Quem quer unhas longas, simétricas e com aspecto luxuoso."
  },
  {
    id: "manutencao-gel",
    category: "alongamento",
    title: "Manutenção de Alongamento em Gel",
    subtitle: "Renovação da estrutura, reposicionamento do ápice e novo design",
    duration: "1h45",
    priceEstimate: "A partir de R$ 110",
    popular: false,
    tag: "Essencial",
    description: "Higienização profunda, nivelamento do crescimento natural, reposição da estrutura de gel, nova cutilagem e acabamento com brilho espelhado.",
    benefits: [
      "Mantém a saúde da lâmina ungueal",
      "Evita infiltrações e descolamentos",
      "Pode trocar a cor e o formato se desejar"
    ],
    recommendedFor: "Clientes com alongamento entre 20 a 30 dias de crescimento."
  },
  {
    id: "blindagem-diamante",
    category: "esmaltacao",
    title: "Blindagem Diamante / Banho de Gel",
    subtitle: "Proteção e fortalecimento para unhas naturais",
    duration: "1h15",
    priceEstimate: "A partir de R$ 90",
    popular: true,
    tag: "Fortalecimento",
    description: "Camada de gel protetor aplicada diretamente sobre a unha natural sem aumentar o comprimento. Impede que a unha quebre ou descame, permitindo que ela cresça saudável.",
    benefits: [
      "Unhas naturais protegidas e rígidas",
      "Esmalte tradicional ou gel dura até 3x mais",
      "Sem aspecto artificial grosso",
      "Ideal para quem quer deixar a unha crescer"
    ],
    recommendedFor: "Unhas fracas, quebradiças ou que descamam com facilidade."
  },
  {
    id: "esmaltacao-gel",
    category: "esmaltacao",
    title: "Esmaltação em Gel com Cutilagem",
    subtitle: "Brilho espelhado e secagem instantânea na cabine UV/LED",
    duration: "1h",
    priceEstimate: "A partir de R$ 75",
    popular: true,
    tag: "Praticidade",
    description: "Cutilagem refinada seguida da aplicação de esmalte em gel premium. Sai do studio 100% seca, sem risco de borrar, e permanece intacta por semanas.",
    benefits: [
      "Zero tempo de espera: sai com as mãos secas",
      "Brilho vítreo que não opaca",
      "Não descasca com tarefas cotidianas",
      "Duração de 15 a 21 dias"
    ],
    recommendedFor: "Mulheres dinâmicas que buscam unhas perfeitas o mês todo."
  },
  {
    id: "nail-art-minimalista",
    category: "nailart",
    title: "Nail Art Minimalista & Francesinha Francesa",
    subtitle: "Design contemporâneo, traços finos, degradê baby boomer e metalizados",
    duration: "+ 30min",
    priceEstimate: "Adicional R$ 25 — R$ 50",
    popular: false,
    tag: "Editorial",
    description: "Criação artística personalizada com micro-traços, francesinha fina invertida, efeito chrome, degradê suave (baby boomer/baby color) ou aplicações discretas de folhas de ouro.",
    benefits: [
      "Toque autoral e exclusivo",
      "Elegância sutil e moderna",
      "Combina com eventos especiais ou uso diário"
    ],
    recommendedFor: "Quem aprecia sofisticação e pequenos detalhes artísticos."
  },
  {
    id: "manicure-pedicure-combo",
    category: "manicure",
    title: "Manicure Clássica & Spa Relaxante",
    subtitle: "Cuidado delicado, esfoliação botânica e hidratação profunda",
    duration: "1h",
    priceEstimate: "A partir de R$ 60",
    popular: false,
    tag: "Clássico",
    description: "Cutilagem minuciosa e higiênica, alinhamento da lâmina, esfoliação com ativos naturais, massagem nas mãos e esmaltação tradicional impecável.",
    benefits: [
      "Sensação imediata de maciez e renovação",
      "Cutículas tratadas sem agressão",
      "Ampla cartela de cores clássicas e tendências"
    ],
    recommendedFor: "Manutenção semanal e momento de autocuidado relaxante."
  },
  {
    id: "spa-pes-plástica",
    category: "manicure",
    title: "Spa dos Pés & Plástica dos Pés",
    subtitle: "Renovação celular, remoção de calosidades e pele aveludada",
    duration: "1h",
    priceEstimate: "A partir de R$ 85",
    popular: false,
    tag: "Bem-estar",
    description: "Tratamento estético e terapêutico para os pés com imersão relaxante, esfoliação intensiva, remoção suave de asperezas, hidratação oclusiva e massagem podal.",
    benefits: [
      "Pés ultra macios e livres de ressecamento",
      "Alívio de tensões e cansaço diário",
      "Cuidado completo da cutícula e esmaltação"
    ],
    recommendedFor: "Pés ressecados, calosidades ou quem passa muito tempo em pé."
  },
  {
    id: "remocao-segura",
    category: "alongamento",
    title: "Remoção Segura de Gel / Acrílico",
    subtitle: "Retirada química/mecânica preservando a saúde da unha natural",
    duration: "45min",
    priceEstimate: "A partir de R$ 50",
    popular: false,
    tag: "Saúde Ungueal",
    description: "Procedimento profissional para retirar alongamento ou esmalte em gel sem lixar em excesso a lâmina natural, seguido de nutrição com óleos essenciais.",
    benefits: [
      "Evita danos graves à queratina da unha",
      "Preserva a espessura e força original",
      "Finalização com sérum reconstrutor"
    ],
    recommendedFor: "Quem deseja fazer uma pausa nos procedimentos químicos com segurança."
  }
];

export const careInstructions: CareInstruction[] = [
  {
    step: "01",
    title: "Não use as unhas como ferramentas",
    desc: "Evite abrir latas, raspar etiquetas ou digitar pressionando diretamente a ponta da unha artificial."
  },
  {
    step: "02",
    title: "Hidrate as cutículas diariamente",
    desc: "O uso de óleo específico para cutículas mantém a flexibilidade do gel e a saúde da matriz ungueal."
  },
  {
    step: "03",
    title: "Use luvas para produtos químicos",
    desc: "Detergentes fortes, água sanitária e acetona pura podem ressecar o gel e diminuir o brilho."
  },
  {
    step: "04",
    title: "Respeite o prazo de manutenção",
    desc: "O intervalo de 20 a 28 dias é ideal para manter o centro de gravidade (ápice) seguro e evitar alavancamento."
  }
];
