// Conteúdo do site Logos Next (posicionamento v2 — engenharia de automação e IA).
// Todos os textos das páginas ficam aqui para facilitar revisão e manutenção.

export type IconName =
  | "seguros"
  | "contabilidade"
  | "imobiliarias"
  | "chat"
  | "calendar"
  | "document";

export const CONTACT = {
  email: "comercial@logosnext.com.br",
  whatsappDisplay: "(21) 97586-1809 · Comercial",
  whatsappUrl: "https://wa.me/5521975861809",
  linkedin: "https://www.linkedin.com/company/logos-next/",
  instagram: "https://www.instagram.com/logosnext.ai/",
};

export const SECTORS = ["Seguros", "Contabilidade", "Imobiliária", "Outro"] as const;
export type Sector = (typeof SECTORS)[number];

export interface ValueItem {
  title: string;
  description: string;
}

export interface FeatureCard {
  icon: IconName;
  title: string;
  description: string;
  items: string[];
  /** Último item, em destaque, indicando que há outras possibilidades além das listadas. */
  more?: string;
  link: { label: string; href: string };
}

export interface PageContent {
  slug: string;
  meta: { title: string; description: string };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    secondaryCta: { label: string; href: string };
    chips: [string, string, string, string];
  };
  band: string[];
  /** `more`: card final em destaque, indicando que há outras rotinas além das listadas. */
  problems: { eyebrow: string; title: string; items: ValueItem[]; more?: ValueItem };
  features: { eyebrow: string; title: string; cards: FeatureCard[] };
  pillars: { eyebrow: string; title: string; items: ValueItem[]; note: string };
  about: { eyebrow: string; title: string; lead: string; text: string; note: string };
  contact: { description: string; defaultSector?: Sector };
}

const STEPS: ValueItem[] = [
  {
    title: "Diagnóstico gratuito",
    description:
      "Conversamos sobre a rotina da sua empresa, mapeamos os processos e estimamos quanto tempo a automação pode economizar.",
  },
  {
    title: "Projeto com escopo fechado",
    description:
      "Definimos juntos o que será automatizado e entregamos as automações e integrações com escopo e preço combinados desde o início. Prefere começar pequeno? Começamos por uma prova de conceito.",
  },
  {
    title: "Operação e evolução",
    description:
      "Um plano mensal mantém tudo funcionando, mede os resultados e adiciona novas automações conforme sua empresa cresce.",
  },
];

export const HOW_IT_WORKS = {
  eyebrow: "Como funciona",
  title: "Do diagnóstico ao resultado, em três etapas.",
  steps: STEPS,
};

export const HOME: PageContent = {
  slug: "",
  meta: {
    title: "Logos Next | Engenharia de automação e IA",
    description:
      "Automatizamos e integramos a operação de pequenas e médias empresas com IA, sem trocar os sistemas que você já usa. Diagnóstico gratuito.",
  },
  hero: {
    badge: "Engenharia de automação e IA",
    titleLine1: "Sua operação funcionando sozinha.",
    titleLine2: "Sua equipe livre para o que importa.",
    description:
      "Automatizamos tarefas repetitivas e integramos os sistemas, o WhatsApp e as planilhas que sua empresa já usa — com engenharia de software e IA aplicada.",
    secondaryCta: { label: "Ver como funciona", href: "#como-funciona" },
    chips: [
      "Atendimento no WhatsApp",
      "Integração de sistemas",
      "Documentos com IA",
      "Rotinas automáticas",
    ],
  },
  band: ["Seguros", "Contabilidade", "Imobiliárias", "Atendimento remoto em todo o Brasil"],
  problems: {
    eyebrow: "O que resolvemos",
    title: "Se sua equipe faz isso todo dia, dá para automatizar.",
    items: [
      {
        title: "Digitar a mesma informação em vários sistemas",
        description: "Conectamos seus sistemas para que o dado entre uma vez só.",
      },
      {
        title: "Responder as mesmas perguntas no WhatsApp",
        description:
          "Atendimento e triagem automáticos, passando para a pessoa certa quando necessário.",
      },
      {
        title: "Cobrar e organizar documentos",
        description: "Pedidos, lembretes e arquivos organizados automaticamente.",
      },
      {
        title: "Controlar prazos em planilhas",
        description: "Avisos e rotinas automáticas para nada ficar para trás.",
      },
    ],
  },
  features: {
    eyebrow: "Setores que atendemos",
    title: "Conhecemos a rotina de quem atendemos.",
    cards: [
      {
        icon: "seguros",
        title: "Seguros",
        description: "Corretoras e corretores de seguros, consórcio, crédito e previdência.",
        items: [
          "Apólices e propostas lidas com IA, com os dados lançados direto no sistema de gestão",
          "Comparativo das cotações montado e enviado ao cliente automaticamente",
          "Carteira monitorada: renovação preparada e segurado avisado antes do vencimento",
        ],
        more: "E outras automações sob medida para a sua corretora",
        link: { label: "Conhecer", href: "/seguros" },
      },
      {
        icon: "contabilidade",
        title: "Contabilidade",
        description: "Escritórios contábeis que vivem cobrando documentos e cumprindo prazos.",
        items: [
          "Extratos bancários lidos e lançamentos sugeridos para conciliação",
          "Notas e documentos classificados com IA por cliente e competência",
          "Painel de obrigações por cliente, com cobrança automática do que falta",
        ],
        more: "E outras automações sob medida para o seu escritório",
        link: { label: "Conhecer", href: "/contabilidade" },
      },
      {
        icon: "imobiliarias",
        title: "Imobiliárias",
        description:
          "Imobiliárias e administradoras de imóveis com muito atendimento e documentação.",
        items: [
          "Documentos de locação analisados com IA, com pendências apontadas por inquilino",
          "Contatos dos portais qualificados e registrados no CRM com perfil e orçamento",
          "Reajustes, vencimentos e renovações de contrato calculados e avisados sozinhos",
        ],
        more: "E outras automações sob medida para a sua imobiliária",
        link: { label: "Conhecer", href: "/imobiliarias" },
      },
    ],
  },
  pillars: {
    eyebrow: "Por que a Logos Next",
    title: "Engenharia de automação e IA, do jeito certo.",
    items: [
      {
        title: "Visão de negócio",
        description: "Primeiro entendemos sua rotina e seus objetivos; depois escolhemos a tecnologia certa.",
      },
      {
        title: "Qualidade de engenharia",
        description:
          "Automações estáveis, monitoradas e documentadas, construídas com padrão de engenharia de software.",
      },
      {
        title: "Integração com o que você já usa",
        description: "Conectamos os sistemas existentes, sem migrações e sem interromper a operação.",
      },
      {
        title: "Resultados mensuráveis",
        description: "Você acompanha as horas economizadas e o retrabalho eliminado com indicadores claros.",
      },
    ],
    note: "Segurança e LGPD: seus dados e os dos seus clientes tratados com cuidado — contrato de tratamento de dados, acesso controlado e transparência sobre onde cada informação fica.",
  },
  about: {
    eyebrow: "Sobre",
    title: "Sobre a Logos Next",
    lead: "A Logos Next é uma empresa de engenharia de automação e IA.",
    text: "Unimos estratégia, arquitetura de sistemas e inteligência artificial para transformar desafios operacionais em eficiência mensurável — integrando o que sua empresa já usa.",
    note: "Nosso propósito é simples: reduzir o esforço manual e aumentar a performance por meio de soluções inteligentes, sustentáveis e sob medida para cada negócio.",
  },
  contact: {
    description:
      "Conte qual processo mais toma tempo da sua equipe. Respondemos com uma proposta de diagnóstico gratuito.",
  },
};

const SEGUROS: PageContent = {
  slug: "seguros",
  meta: {
    title: "Logos Next | Automação e IA para corretoras de seguros",
    description:
      "Automatize atendimento no WhatsApp, renovações e documentos da sua corretora com IA, integrado ao sistema que você já usa.",
  },
  hero: {
    badge: "Seguros · Engenharia de automação e IA",
    titleLine1: "A IA que trabalha",
    titleLine2: "para o corretor.",
    description:
      "Atendimento, cotações, renovações e documentos funcionando sozinhos — integrados ao sistema que sua corretora já usa. Mais tempo para vender e cuidar do cliente.",
    secondaryCta: { label: "Ver o que automatizamos", href: "#automacoes" },
    chips: ["Atendimento no WhatsApp", "Renovações em dia", "Apólices lidas com IA", "Cotação organizada"],
  },
  band: ["Corretoras de seguros", "Consórcio", "Crédito", "Previdência"],
  problems: {
    eyebrow: "A rotina do corretor",
    title: "Quanto tempo sua corretora perde com isso?",
    items: [
      {
        title: "Cotações montadas à mão, seguradora por seguradora",
        description:
          "Dados do cliente redigitados em vários portais e o comparativo das propostas montado manualmente.",
      },
      {
        title: "Renovações que escapam da carteira",
        description:
          "Sem acompanhamento automático da vigência, a renovação vira corrida contra o prazo — e o cliente vai para a concorrência.",
      },
      {
        title: "Apólices e comissões sem conferência",
        description:
          "Documentos espalhados entre e-mail e pastas, e comissões conferidas na mão contra os extratos das seguradoras.",
      },
    ],
    more: {
      title: "E outras rotinas que travam a sua corretora",
      description:
        "Segunda via, status de sinistro, atendimento repetitivo no WhatsApp: se a equipe repete, dá para automatizar.",
    },
  },
  features: {
    eyebrow: "O que automatizamos",
    title: "Automação feita para a rotina da corretora.",
    cards: [
      {
        icon: "chat",
        title: "Atendimento e cotação",
        description: "O cliente é atendido na hora e envia tudo o que o corretor precisa para cotar.",
        items: [
          "Triagem e respostas frequentes no WhatsApp",
          "Coleta organizada de dados e documentos",
          "Encaminhamento para o corretor certo",
          "Segunda via e status automáticos",
        ],
        link: { label: "Falar com um especialista", href: "#contato" },
      },
      {
        icon: "calendar",
        title: "Renovações e carteira",
        description: "Nenhuma renovação esquecida e a carteira sempre à vista.",
        items: [
          "Lembretes para a corretora com antecedência",
          "Avisos automáticos para o segurado",
          "Relatório de renovações do mês",
          "Visão de carteira e comissões",
        ],
        link: { label: "Falar com um especialista", href: "#contato" },
      },
      {
        icon: "document",
        title: "Documentos com IA",
        description: "Apólices, propostas e documentos lidos e organizados automaticamente.",
        items: [
          "Leitura de apólices e propostas",
          "Organização por cliente e apólice",
          "Histórico do cliente em um só lugar",
          "Tratamento de dados conforme a LGPD",
        ],
        link: { label: "Falar com um especialista", href: "#contato" },
      },
    ],
  },
  pillars: {
    eyebrow: "Integração",
    title: "Sem trocar o sistema da sua corretora.",
    items: [
      {
        title: "Sistema de gestão",
        description: "Trabalhamos em volta do sistema que sua corretora já usa no dia a dia.",
      },
      {
        title: "Cotação múltipla",
        description: "Dados chegam organizados para a plataforma de cotação que você usa.",
      },
      {
        title: "WhatsApp e e-mail",
        description: "Os canais onde seus clientes já estão, com atendimento automático.",
      },
      {
        title: "Planilhas",
        description: "Controles paralelos viram relatórios atualizados sozinhos.",
      },
    ],
    note: "Transparência: a Logos Next é uma empresa de tecnologia. A intermediação e a venda dos seguros continuam sendo da sua corretora. As integrações com cada ferramenta são avaliadas no diagnóstico.",
  },
  about: {
    eyebrow: "Para quem",
    title: "Feito para corretores.",
    lead: "Corretoras e corretores de seguros, e também corretores de consórcio, crédito e previdência.",
    text: "Se a sua rotina tem atendimento no WhatsApp, renovações, documentos e controle de carteira, a Logos Next ajuda a automatizar — com engenharia de software e IA aplicada.",
    note: "Atendimento remoto para corretoras de todo o Brasil, com conversa direta com quem constrói as automações.",
  },
  contact: {
    description:
      "Descubra quantas horas por mês sua corretora pode recuperar. O diagnóstico é gratuito.",
    defaultSector: "Seguros",
  },
};

const CONTABILIDADE: PageContent = {
  slug: "contabilidade",
  meta: {
    title: "Logos Next | Automação e IA para escritórios de contabilidade",
    description:
      "Cobrança e recebimento de documentos, organização de arquivos e avisos de prazo automatizados, integrados ao sistema contábil que você já usa.",
  },
  hero: {
    badge: "Contabilidade · Engenharia de automação e IA",
    titleLine1: "Seu escritório cobrando",
    titleLine2: "documentos sozinho.",
    description:
      "Automatizamos a cobrança e o recebimento de documentos, a organização de arquivos e os avisos de prazo — integrados ao sistema contábil que você já usa.",
    secondaryCta: { label: "Ver o que automatizamos", href: "#automacoes" },
    chips: ["Atendimento no WhatsApp", "Prazos em dia", "Arquivos organizados", "Cobrança automática"],
  },
  band: ["Escritórios contábeis", "BPO financeiro", "Departamento pessoal", "Fiscal e tributário"],
  problems: {
    eyebrow: "A rotina do escritório",
    title: "Quanto tempo seu escritório perde com isso?",
    items: [
      {
        title: "Cobrar documentos cliente por cliente",
        description:
          "Mensagens e e-mails repetidos todo mês para receber notas, extratos e comprovantes.",
      },
      {
        title: "Arquivos chegando por todos os canais",
        description: "WhatsApp, e-mail e pastas — tudo precisa ser baixado e organizado à mão.",
      },
      {
        title: "Prazos controlados em planilhas",
        description: "Sem avisos automáticos, o fechamento vira corrida no fim do mês.",
      },
      {
        title: "Dúvidas repetidas no WhatsApp",
        description: "As mesmas perguntas sobre guias, prazos e impostos, respondidas uma a uma.",
      },
    ],
  },
  features: {
    eyebrow: "O que automatizamos",
    title: "Automação feita para a rotina do escritório contábil.",
    cards: [
      {
        icon: "chat",
        title: "Cobrança de documentos",
        description:
          "Lembretes automáticos até o cliente enviar tudo o que o fechamento precisa.",
        items: [
          "Lembretes por WhatsApp e e-mail",
          "Checklist de documentos por cliente",
          "Aviso do que ainda falta enviar",
          "Relatório de pendências do mês",
        ],
        link: { label: "Falar com um especialista", href: "#contato" },
      },
      {
        icon: "calendar",
        title: "Prazos e obrigações",
        description: "Calendário de obrigações com avisos para a equipe e para o cliente.",
        items: [
          "Avisos de vencimento com antecedência",
          "Envio automático de guias ao cliente",
          "Painel de obrigações do mês",
          "Histórico por cliente",
        ],
        link: { label: "Falar com um especialista", href: "#contato" },
      },
      {
        icon: "document",
        title: "Arquivos com IA",
        description: "Documentos recebidos lidos, classificados e salvos na pasta certa.",
        items: [
          "Leitura de notas e extratos",
          "Organização por cliente e competência",
          "Atendimento de dúvidas frequentes",
          "Tratamento de dados conforme a LGPD",
        ],
        link: { label: "Falar com um especialista", href: "#contato" },
      },
    ],
  },
  pillars: {
    eyebrow: "Integração",
    title: "Sem trocar o sistema do seu escritório.",
    items: [
      {
        title: "Sistema contábil",
        description: "Trabalhamos em volta do sistema contábil que seu escritório já usa.",
      },
      {
        title: "Portais e bancos",
        description: "Arquivos e extratos chegam organizados para o lançamento.",
      },
      {
        title: "WhatsApp e e-mail",
        description: "Os canais onde seus clientes já estão, com atendimento automático.",
      },
      {
        title: "Planilhas",
        description: "Controles paralelos viram relatórios atualizados sozinhos.",
      },
    ],
    note: "As integrações com cada sistema e portal são avaliadas no diagnóstico. Dados de clientes tratados conforme a LGPD, com contrato de tratamento de dados.",
  },
  about: {
    eyebrow: "Para quem",
    title: "Feito para escritórios contábeis.",
    lead: "Escritórios de contabilidade, BPO financeiro e departamento pessoal.",
    text: "Se a sua rotina tem cobrança de documentos, prazos e atendimento no WhatsApp, a Logos Next ajuda a automatizar — com engenharia de software e IA aplicada.",
    note: "Atendimento remoto para escritórios de todo o Brasil, com conversa direta com quem constrói as automações.",
  },
  contact: {
    description:
      "Descubra quantas horas por mês seu escritório pode recuperar. O diagnóstico é gratuito.",
    defaultSector: "Contabilidade",
  },
};

const IMOBILIARIAS: PageContent = {
  slug: "imobiliarias",
  meta: {
    title: "Logos Next | Automação e IA para imobiliárias",
    description:
      "Recepção e qualificação de contatos, agendamento de visitas e documentação de locação automatizados, integrados ao CRM que você já usa.",
  },
  hero: {
    badge: "Imobiliárias · Engenharia de automação e IA",
    titleLine1: "Mais visitas agendadas,",
    titleLine2: "menos tempo no WhatsApp.",
    description:
      "Automatizamos a recepção e a qualificação de contatos, o agendamento de visitas e a documentação de locação — integrados ao CRM que você já usa.",
    secondaryCta: { label: "Ver o que automatizamos", href: "#automacoes" },
    chips: ["Atendimento no WhatsApp", "Visitas agendadas", "Documentos de locação", "Contatos qualificados"],
  },
  band: ["Imobiliárias", "Administradoras de imóveis", "Locação", "Venda"],
  problems: {
    eyebrow: "A rotina da imobiliária",
    title: "Quanto tempo sua imobiliária perde com isso?",
    items: [
      {
        title: "Contatos sem resposta fora do horário",
        description: "Interessados esperando no WhatsApp — e indo para a concorrência.",
      },
      {
        title: "Agendar visitas por mensagem",
        description: "Idas e vindas para combinar dia, horário e imóvel com cada interessado.",
      },
      {
        title: "Documentação de locação incompleta",
        description: "Documentos cobrados um a um, atrasando a análise e o contrato.",
      },
      {
        title: "Cobranças e vencimentos manuais",
        description:
          "Avisos de aluguel, reajuste e renovação de contrato controlados em planilhas.",
      },
    ],
  },
  features: {
    eyebrow: "O que automatizamos",
    title: "Automação feita para a rotina da imobiliária.",
    cards: [
      {
        icon: "chat",
        title: "Atendimento e qualificação",
        description: "Todo interessado é atendido na hora e chega qualificado ao corretor.",
        items: [
          "Respostas sobre imóveis no WhatsApp",
          "Perfil, orçamento e região do interessado",
          "Encaminhamento para o corretor certo",
          "Registro automático no CRM",
        ],
        link: { label: "Falar com um especialista", href: "#contato" },
      },
      {
        icon: "calendar",
        title: "Visitas e agenda",
        description: "Visitas marcadas sem troca de mensagens e com confirmação automática.",
        items: [
          "Agendamento de visitas pelo WhatsApp",
          "Confirmação e lembrete para o cliente",
          "Agenda organizada por corretor",
          "Retorno após a visita",
        ],
        link: { label: "Falar com um especialista", href: "#contato" },
      },
      {
        icon: "document",
        title: "Locação e cobrança",
        description: "Documentos de locação e avisos de contrato funcionando sozinhos.",
        items: [
          "Checklist de documentos de locação",
          "Leitura de documentos com IA",
          "Avisos de cobrança e reajuste",
          "Aviso de renovação de contrato",
        ],
        link: { label: "Falar com um especialista", href: "#contato" },
      },
    ],
  },
  pillars: {
    eyebrow: "Integração",
    title: "Sem trocar o sistema da sua imobiliária.",
    items: [
      {
        title: "CRM imobiliário",
        description: "Trabalhamos em volta do CRM que sua imobiliária já usa.",
      },
      {
        title: "Portais de anúncios",
        description: "Contatos vindos dos portais recebem atendimento imediato.",
      },
      {
        title: "WhatsApp e e-mail",
        description: "Os canais onde seus clientes já estão, com atendimento automático.",
      },
      {
        title: "Planilhas",
        description: "Controles paralelos viram relatórios atualizados sozinhos.",
      },
    ],
    note: "As integrações com cada CRM e portal são avaliadas no diagnóstico. Dados de clientes tratados conforme a LGPD, com contrato de tratamento de dados.",
  },
  about: {
    eyebrow: "Para quem",
    title: "Feito para imobiliárias.",
    lead: "Imobiliárias e administradoras de imóveis, de locação e de venda.",
    text: "Se a sua rotina tem atendimento no WhatsApp, visitas, documentos de locação e cobranças, a Logos Next ajuda a automatizar — com engenharia de software e IA aplicada.",
    note: "Atendimento remoto para imobiliárias de todo o Brasil, com conversa direta com quem constrói as automações.",
  },
  contact: {
    description:
      "Descubra quantas horas por mês sua imobiliária pode recuperar. O diagnóstico é gratuito.",
    defaultSector: "Imobiliária",
  },
};

export const SECTOR_PAGES: Record<string, PageContent> = {
  seguros: SEGUROS,
  contabilidade: CONTABILIDADE,
  imobiliarias: IMOBILIARIAS,
};

export const NAV_SECTORS = [
  { label: "Seguros", href: "/seguros" },
  { label: "Contabilidade", href: "/contabilidade" },
  { label: "Imobiliárias", href: "/imobiliarias" },
];
