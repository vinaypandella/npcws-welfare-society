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
- Frontend: React 18 + Vite
- Routing: react-router-dom v6 (HashRouter — required for GitHub Pages)
- Icons: lucide-react
- Styling: Pure CSS with CSS variables — no Tailwind or Bootstrap
- Deploy: GitHub Pages via GitHub Actions (builds dist/)
- Future: Supabase (backend), Razorpay (payments), MSG91 (SMS)

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
1. HashRouter ONLY — never BrowserRouter (breaks on GitHub Pages)
2. Gold (#c8962a) is DECORATIVE ONLY — use --gold-text (#7a4e00) for text
3. Linen White (#f5f3ee) is the dominant background on ALL pages
4. Mobile-first — all layouts must work on 375px+
5. No external CSS frameworks — pure CSS variables only
6. Never hardcode colors — always use CSS variables

## App Structure
src/
  components/layout/  → Navbar, Footer
  components/ui/      → Button, Card, Badge (reusable)
  pages/              → Home, About, Membership, Schemes, News, Gallery, Contact
  data/               → schemes.js, news.js (content data)
  App.jsx             → HashRouter + all routes
  index.css           → Global styles + CSS variables

## Pages & Routes
/ → Home
/about → About NPCWS
/membership → Membership tiers + join form
/schemes → Housing, Health, Education schemes
/news → News & announcements
/gallery → Photo gallery
/contact → Contact form

## Module Roadmap
Phase 1 (Now):   Static portal — all 7 pages ← WE ARE HERE
Phase 2 (Next):  Member registration, UPI/Razorpay payments, PDF certificates
Phase 3 (Later): Admin dashboard, SMS reminders, member approval workflow
Phase 4 (Future): AI agents — doc verification, query resolution, eligibility

## Deploy Process
Push to main → GitHub Actions runs npm ci && npm run build → deploys dist/ to GitHub Pages

## Common Tasks for Claude Code
- "Set up the React + Vite project from scratch"
- "Build the Home page with hero, stats, and services sections"
- "Create the Navbar with mobile menu using our navy color palette"
- "Add the Schemes page with Housing, Health, and Education scheme cards"
- "Fix the mobile layout on the Membership page"
- "Commit and push these changes to GitHub"
