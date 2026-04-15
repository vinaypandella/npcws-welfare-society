# NPCWS Welfare Society Portal
## Project Memory for Claude Code

## Client
Nagarampalem Police Children Welfare Society (NPCWS)
Location: Guntur, Andhra Pradesh, India
Built by: Aksha Digital Foundation (pilot B2B project)

## Live URLs
- Repo: https://github.com/aksha-digital-foundation/npcws-welfare-society
- Live: https://aksha-digital-foundation.github.io/npcws-welfare-society

## Tech Stack
- Frontend: React 19 + Vite (in `client/` workspace)
- Routing: react-router-dom v7 (HashRouter — required for GitHub Pages, switch to BrowserRouter on GKE)
- Icons: lucide-react
- Styling: Pure CSS with CSS variables — no Tailwind or Bootstrap
- Linting: ESLint 9 (flat config)
- Deploy (Phase 1): GitHub Pages via GitHub Actions
- Deploy (Phase 2+): GKE Autopilot on GCP India (asia-south1)
- Database (Phase 2+): Cloud SQL PostgreSQL 15
- Payments (Phase 2+): Razorpay
- SMS (Phase 3+): MSG91

## Project Structure (Monorepo — npm workspaces)
```
npcws-welfare-society/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/layout/  → Navbar, Footer
│   │   ├── components/ui/      → Button, Card, Badge (reusable)
│   │   ├── pages/              → Home, About, Membership, Schemes, News, Gallery, Contact
│   │   ├── data/               → schemes.js, news.js (content data)
│   │   ├── App.jsx             → HashRouter + all routes
│   │   └── index.css           → Global styles + CSS variables
│   ├── index.html
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── package.json
├── server/              # Express API (Phase 2 — placeholder)
├── db/                  # Database migrations (Phase 2 — placeholder)
├── k8s/                 # Kubernetes manifests (Phase 2 — placeholder)
├── docker/              # Dockerfiles (Phase 2 — placeholder)
├── .github/workflows/
│   ├── ci.yml           # Lint + build on PRs
│   └── deploy.yml       # GitHub Pages deploy on push to main
├── package.json         # Root npm workspaces config
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
1. HashRouter ONLY (Phase 1) — never BrowserRouter until deployed on nginx/GKE
2. Gold (#c8962a) is DECORATIVE ONLY — use --gold-text (#7a4e00) for text
3. Linen White (#f5f3ee) is the dominant background on ALL pages
4. Mobile-first — all layouts must work on 375px+
5. No external CSS frameworks — pure CSS variables only
6. Never hardcode colors — always use CSS variables
7. All commands run from repo root using workspace flags

## Pages & Routes
/ → Home (COMPLETE)
/about → About NPCWS (placeholder)
/membership → Membership tiers + join form (placeholder)
/schemes → Housing, Health, Education schemes (placeholder)
/news → News & announcements (placeholder)
/gallery → Photo gallery (placeholder)
/contact → Contact form (placeholder)

## Developer Workflow

### Before Every Commit
```bash
npm run check    # runs lint + build from root
```

### Preview & Visual Verify (Claude Code)
1. `preview_start` name="dev" → Vite on :5173
2. `preview_screenshot` → verify each page visually
3. `preview_resize` preset="mobile" → check 375px layout
4. `preview_console_logs` → check for runtime errors

### Publishing (on user instruction ONLY)
1. Run `npm run check` — MUST pass
2. Preview and screenshot key pages
3. Commit with descriptive message
4. Push to `main` → GitHub Actions deploys automatically

### Common Commands
```bash
npm run dev        # Start Vite dev server (client)
npm run build      # Production build (client)
npm run lint       # ESLint check (client)
npm run check      # Lint + build (full verification)
npm run preview    # Preview production build (client)
```

## Module Roadmap
Phase 1 (Now):   Static portal — all 7 pages ← WE ARE HERE
Phase 2 (Next):  GKE + Cloud SQL, member registration, Razorpay payments, PDF certificates
Phase 3 (Later): Admin dashboard, SMS reminders, member approval workflow
Phase 4 (Future): AI agents — doc verification, query resolution, eligibility

## GCP Architecture (Phase 2+)
- Region: asia-south1 (Mumbai, India)
- Compute: GKE Autopilot
- Database: Cloud SQL PostgreSQL 15 (private IP)
- Frontend: nginx container serving React build
- Backend: Express API container + Cloud SQL Proxy sidecar
- Ingress: GKE Gateway with Google-managed TLS
- CI/CD: GitHub Actions → Artifact Registry → GKE
- Auth: Workload Identity Federation (no JSON key files)

## Deploy Process
Phase 1: Push to main → GitHub Actions → lint → build → deploy to GitHub Pages
Phase 2+: Push to main → GitHub Actions → lint → build → Docker → Artifact Registry → GKE
