# Fidele Seguros — Landing Page Premium

Landing page de alta performance para captação de leads qualificados de planos de saúde empresariais. Desenvolvida com foco em CRO, UX premium e engenharia frontend moderna.

---

## Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| Next.js | 16 (App Router) | Framework principal |
| TypeScript | 5 | Tipagem estática |
| TailwindCSS | 4 | Estilização |
| Framer Motion | 12 | Microinterações e animações |
| GSAP | 3 | Hero animations, parallax |
| Shadcn UI | latest | Componentes UI base |
| Lucide React | latest | Ícones |
| React Icons | 5 | Ícones complementares |
| React Hook Form | 7 | Gerenciamento de formulário |
| Zod | 4 | Validação de schema |
| Radix UI | latest | Componentes acessíveis |

---

## Instalação

```bash
git clone https://github.com/joaopaulocostasantos/lp-fidele-seguros.git
cd lp-fidele-seguros
npm install
```

## Configuração

```bash
cp .env.example .env.local
# Edite .env.local com seus valores
```

## Rodar localmente

```bash
npm run dev
# Acesse http://localhost:3000
```

## Build de produção

```bash
npm run build
npm start
```

---

## Variáveis de Ambiente

| Variável | Descrição | Obrigatório |
|---|---|---|
| `NEXT_PUBLIC_WEBHOOK_URL` | URL do webhook (N8N, HubSpot, etc.) | Sim |
| `NEXT_PUBLIC_META_PIXEL_ID` | ID do Meta Pixel (Facebook Ads) | Não |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | ID do Google Ads / GA4 | Não |
| `NEXT_PUBLIC_SITE_URL` | URL base do site | Não |

---

## Estrutura de Pastas

```
src/
├── app/
│   ├── globals.css          # Estilos globais e variáveis CSS
│   ├── layout.tsx           # Layout root com metadata SEO e JSON-LD
│   ├── page.tsx             # Página principal (landing page)
│   ├── not-found.tsx        # Página 404 premium
│   └── obrigado/
│       └── page.tsx         # Página de confirmação pós-lead
│
├── components/
│   ├── ui/                  # Componentes base (Button, Input, Select, etc.)
│   ├── layout/
│   │   ├── Header.tsx       # Navbar com scroll behavior
│   │   └── Footer.tsx       # Rodapé com contatos e links
│   ├── sections/
│   │   ├── Hero.tsx         # Hero section com GSAP + Framer Motion
│   │   ├── Problems.tsx     # Seção de dores do mercado
│   │   ├── Solution.tsx     # Solução Fidele + comparativo
│   │   ├── Partners.tsx     # Operadoras parceiras
│   │   ├── Benefits.tsx     # Benefícios corporativos com métricas
│   │   ├── SocialProof.tsx  # Depoimentos e prova social
│   │   ├── Process.tsx      # Processo consultivo em etapas
│   │   ├── LeadForm.tsx     # Formulário de captação otimizado
│   │   └── ThankYouContent.tsx # Conteúdo da página de obrigado
│   └── shared/
│       ├── AnimatedCounter.tsx  # Contador animado
│       ├── GlowCard.tsx         # Card reutilizável com glow effect
│       └── StickyCtaMobile.tsx  # CTA sticky para mobile
│
├── hooks/
│   └── useUtm.ts            # Captura automática de UTMs da URL
│
├── services/
│   └── webhook.ts           # Envio para webhook com retry automático
│
├── utils/
│   └── analytics.ts         # Eventos Meta Pixel + Google Ads
│
├── lib/
│   └── utils.ts             # cn(), formatPhone(), formatCNPJ()
│
└── types/
    └── index.ts             # Types TypeScript globais
```

---

## Deploy na Vercel

```bash
npm i -g vercel
vercel --prod
```

Configure as variáveis em **Settings → Environment Variables** no dashboard.

---

## Integrações

### Webhook (Lead Delivery)

Payload enviado automaticamente a cada lead:

```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "hasCnpj": "string",
  "companySize": "string",
  "cnpjType": "string",
  "currentOperator": "string",
  "mainPain": "string",
  "utms": { "utm_source": "...", "utm_medium": "...", "utm_campaign": "..." },
  "timestamp": "ISO 8601",
  "page_url": "string"
}
```

### Eventos de Conversão

| Evento | Quando dispara |
|---|---|
| `PageView` | Carregamento da página |
| `FormStart` | Usuário foca no primeiro campo |
| `Lead` | Formulário enviado |
| `FormSubmit` | Redirecionado para /obrigado |
| `QualifiedLead` | Lead com CNPJ ativo e 5+ vidas |

---

© 2024 Fidele Corretora de Seguros. Todos os direitos reservados.
