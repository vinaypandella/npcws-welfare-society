# NPCWS Welfare Society Portal
## Project Memory for Claude Code

## Client
Nagarampalem Police Children Welfare Society (NPCWS)
Location: Guntur, Andhra Pradesh, India
Built by: Aksha Digital Foundation (pilot B2B project)

## Live URLs
- Repo: https://github.com/aksha-digital-foundation/npcws-welfare-society
- Live (Phase 1): https://aksha-digital-foundation.github.io/npcws-welfare-society

## Tech Stack
- Frontend: React 19 + Vite (in `client/` workspace)
- Backend: Express 4 + Node 22 (in `server/` workspace)
- Database: PostgreSQL 15 (Cloud SQL on GCP, local via Docker)
- Routing: react-router-dom v7 (HashRouter for GitHub Pages, BrowserRouter on GKE)
- Icons: lucide-react
- Styling: Pure CSS with CSS variables — no Tailwind or Bootstrap
- Linting: ESLint 9 (flat config)
- Containerization: Docker (nginx for client, Node for server)
- Orchestration: Kubernetes (GKE Autopilot)
- CI/CD: GitHub Actions → Artifact Registry → GKE
- Payments (Phase 2+): Razorpay
- SMS (Phase 3+): MSG91

## Project Structure (Monorepo — npm workspaces)
```
npcws-welfare-society/
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/layout/  → Navbar, Footer
│   │   ├── components/ui/      → Button, Card, Badge (reusable)
│   │   ├── pages/              → Home, About, Membership, Schemes, News, Gallery, Contact
│   │   ├── data/               → schemes.js, news.js, gallery.js (content data)
│   │   ├── App.jsx             → HashRouter + all routes
│   │   └── index.css           → Global styles + CSS variables
│   ├── index.html
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── package.json
├── server/                  # Express API
│   ├── src/
│   │   ├── index.js            → Express app entry
│   │   ├── config/
│   │   │   ├── db.js           → PostgreSQL connection pool
│   │   │   └── env.js          → Environment config
│   │   ├── middleware/
│   │   │   └── errorHandler.js → Centralized error handling
│   │   └── routes/
│   │       ├── health.js       → /api/healthz, /api/readyz
│   │       ├── members.js      → CRUD for members
│   │       ├── schemes.js      → List/get schemes
│   │       └── payments.js     → Payment records + Razorpay webhook
│   └── package.json
├── db/
│   ├── migrations/             → Versioned SQL (001_create_members, etc.)
│   └── seeds/                  → Initial data (schemes)
├── docker/
│   ├── client.Dockerfile       → Multi-stage: build React → serve with nginx
│   ├── server.Dockerfile       → Node 22 Alpine
│   └── nginx.conf              → SPA fallback + /api proxy
├── k8s/
│   ├── base/                   → Deployments, services, gateway, httproute
│   └── overlays/
│       ├── staging/            → 1 replica each
│       └── production/         → 2 replicas each
├── .github/workflows/
│   ├── ci.yml                  → Lint + build on PRs
│   ├── deploy.yml              → GitHub Pages deploy (Phase 1)
│   └── deploy-gke.yml          → Build → Artifact Registry → GKE (Phase 2+)
├── docker-compose.yml          → Local dev: PostgreSQL + server + client
├── package.json                → Root npm workspaces config
└── CLAUDE.md
```

## Brand Colors
- --navy:         #0d1f3c  (nav, headings, hero panels)
- --gold:         #c8962a  (decorative only — borders, icons)
- --gold-text:    #7a4e00  (gold AS TEXT on light bg — WCAG AA)
- --saffron-text: #7a3800  (saffron text on light bg — WCAG AAA)
- --cream:        #f5f3ee  (PRIMARY background — Linen White)
- --warm-white:   #ede9e0  (card/section backgrounds)
- --text:         #1a1612  (primary body text)
- --muted:        #6e6458  (secondary text)

## Critical Rules
1. HashRouter ONLY (Phase 1) — switch to BrowserRouter when deployed on nginx/GKE
2. Gold (#c8962a) is DECORATIVE ONLY — use --gold-text (#7a4e00) for text
3. Linen White (#f5f3ee) is the dominant background on ALL pages
4. Mobile-first — all layouts must work on 375px+
5. No external CSS frameworks — pure CSS variables only
6. Never hardcode colors — always use CSS variables
7. All commands run from repo root using workspace flags
8. Server routes are prefixed with /api/

## API Endpoints
```
GET  /api/healthz              → Liveness check
GET  /api/readyz               → Readiness check (DB connected)
GET  /api/members              → List members
GET  /api/members/:id          → Get member
POST /api/members              → Register member
GET  /api/schemes              → List schemes
GET  /api/schemes/:id          → Get scheme
GET  /api/payments/member/:id  → List payments for member
POST /api/payments             → Create payment record
POST /api/payments/webhook     → Razorpay webhook
```

## Database Tables
- **members**: id, full_name, phone, email, aadhaar_last4, membership_tier, status, timestamps
- **schemes**: id, name, category (housing/health/education), description, eligibility, active, timestamps
- **payments**: id, member_id (FK), amount, currency, purpose, status, razorpay_order_id, razorpay_payment_id, timestamps

## Pages & Routes
/ → Home (COMPLETE)
/about → About NPCWS
/membership → Membership tiers + join form
/schemes → Housing, Health, Education schemes
/news → News & announcements
/gallery → Photo gallery
/contact → Contact form

## Developer Workflow

### Local Development
```bash
npm run dev            # Start Vite dev server (client only, :5173)
npm run dev:server     # Start Express with --watch (needs DB)
npm run docker:up      # Start PostgreSQL + server + client via Docker
npm run docker:down    # Stop all containers
npm run db:migrate     # Run SQL migrations against Docker DB
npm run db:seed        # Seed initial data into Docker DB
```

### Before Every Commit
```bash
npm run check    # runs lint + build from root
```

### Publishing (on user instruction ONLY)
1. Run `npm run check` — MUST pass
2. Commit with descriptive message
3. Push to `main` → GitHub Actions deploys automatically

## Module Roadmap
Phase 1 (Now):   Static portal — all 7 pages + backend scaffolding ← WE ARE HERE
Phase 2 (Next):  GKE + Cloud SQL, member registration, Razorpay payments, PDF certificates
Phase 3 (Later): Admin dashboard, SMS reminders, member approval workflow
Phase 4 (Future): AI agents — doc verification, query resolution, eligibility

## GCP Architecture (Phase 2+)
- Region: asia-south1 (Mumbai, India)
- Compute: GKE Autopilot
- Database: Cloud SQL PostgreSQL 15 (private IP)
- Frontend: nginx container serving React build, proxies /api to server
- Backend: Express API container + Cloud SQL Proxy sidecar
- Ingress: GKE Gateway with Google-managed TLS
- CI/CD: GitHub Actions → Artifact Registry → GKE (deploy-gke.yml)
- Auth: Workload Identity Federation (no JSON key files)

## Deploy Process
Phase 1: Push to main → GitHub Actions → lint → build → deploy to GitHub Pages
Phase 2+: Push to main → GitHub Actions → lint → build → Docker → Artifact Registry → GKE
