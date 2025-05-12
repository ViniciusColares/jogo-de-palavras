export type Challenge = {
  id: number
  word: string
  tip: string
  category: "Cotidiano" | "Esporte" | "Ciência"
}

export const WORDS: Challenge[] = [
  // 🏠 Cotidiano
  { id: 1, word: "CAFÉ", tip: "Bebida que muitos tomam pela manhã", category: "Cotidiano"  },
  { id: 2, word: "CHAVE", tip: "Objeto usado para abrir portas", category: "Cotidiano"  },
  { id: 3, word: "TRAVESSEIRO", tip: "Usado para apoiar a cabeça ao dormir", category: "Cotidiano"  },
  { id: 4, word: "ESCOVA", tip: "Usada nos dentes ou nos cabelos", category: "Cotidiano"  },
  { id: 5, word: "SOFA", tip: "Lugar confortável para assistir TV", category: "Cotidiano"  },
  { id: 6, word: "GELADEIRA", tip: "Mantém os alimentos frios", category: "Cotidiano"  },
  { id: 7, word: "CELULAR", tip: "Usado para mensagens, fotos e redes sociais", category: "Cotidiano"  },
  { id: 8, word: "BOLSA", tip: "Acessório para carregar objetos pessoais", category: "Cotidiano"  },
  { id: 9, word: "CHUVEIRO", tip: "Equipamento para tomar banho", category: "Cotidiano"  },

  // 🏅 Esporte
  { id: 10, word: "FUTEBOL", tip: "Esporte mais popular no Brasil", category: "Esporte" },
  { id: 11, word: "BASQUETE", tip: "Esporte com bola e cestas elevadas", category: "Esporte" },
  { id: 12, word: "CORRIDA", tip: "Atividade física de velocidade", category: "Esporte" },
  { id: 13, word: "NATAÇÃO", tip: "Modalidade praticada em piscinas", category: "Esporte" },
  { id: 14, word: "JUDO", tip: "Arte marcial de agarrões e quedas", category: "Esporte" },
  { id: 15, word: "GOL", tip: "Principal objetivo do jogo de futebol", category: "Esporte" },
  { id: 16, word: "BOXE", tip: "Esporte de combate com luvas", category: "Esporte" },
  { id: 17, word: "CICLISMO", tip: "Esporte praticado com bicicleta", category: "Esporte" },

  // 🧪 Ciência
  { id: 18, word: "ATOMO", tip: "Unidade fundamental da matéria", category: "Ciência" },
  { id: 19, word: "CELULA", tip: "Unidade básica dos seres vivos", category: "Ciência"},
  { id: 20, word: "GRAVIDADE", tip: "Nos mantém com os pés no chão", category: "Ciência"},
  { id: 21, word: "GENETICA", tip: "Estuda a hereditariedade", category: "Ciência"},
  { id: 22, word: "PLANETA", tip: "Corpo celeste que orbita uma estrela", category: "Ciência" },
  { id: 23, word: "ENERGIA", tip: "Essencial para movimento e calor", category: "Ciência"},
  { id: 24, word: "NEURONIO", tip: "Célula do sistema nervoso", category: "Ciência"},
  { id: 25, word: "EVOLUCAO", tip: "Processo de mudança nas espécies", category: "Ciência"},
]
