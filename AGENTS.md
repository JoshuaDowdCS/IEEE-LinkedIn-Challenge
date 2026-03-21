# AGENTS.md

## Stack
- Frontend: React + Vite + Tailwind
- Backend: FastAPI (Python 3.12)
- DB: SQLite (dev)

## Project Goal
- Deliver reliable, data-driven features that surface real-world opportunities while keeping schedules, budgets, and logistics accurate for whoever is using the product.

## General Agent Directives
- Keep functionality end-to-end, even if polish remains.
- Favor existing libraries rather than reinventing shared pieces.
- Avoid deleting working code unless you coordinate on that decision.
- When data matters, re-validate it from live sources before building around it.

## Dev Commands
- `npm run dev` (from /frontend) — start frontend
- `uvicorn main:app --reload` (from /backend) — start backend

## File Conventions
- All new API routes go in /backend/routers/
- All new React pages go in /frontend/src/pages/
- Shared types/schemas go in /backend/schemas.py
- Agent workflows and prompt instructions go in /.agents/workflows/

## Folder Structure & Root Hygiene
- **Maintain a Clean Root**: Move historical/scratch files (feedback reports, one-off scripts) to `docs/` or `scripts/` early.
- **Workflow Integrity**: When moving key files, update any referring automation or `.agents/workflows/*.md` files.
- **Historical Data**: Store previous iteration reports in `docs/archive` rather than the root.
- **Scratch Scripts**: Group one-off verification and utility scripts into `scripts/` or `backend/scripts/`.

## Testing & Network Access
- Always run the actual tests/scripts that cover your change; a passing automation is required before marking the task done.
- If the tooling needs network access, run the real flow instead of relying on mocks.
- Prefer the existing automation (scrapers, smoke tests, etc.); don’t recommend manual steps when there is already a script.

- When consuming domain data, verify it through the live pipeline (scrapers, APIs) rather than preconceptions.

## Data Quality & Pipeline
- **Refresh Before Building**: Refresh data via live pipelines before relying on it for dashboards, scoring, or pricing.
- **Re-sync After Changes**: After modifying any parsing logic, re-run the sync pipeline so the DB reflects clean data. Stale rows persist indefinitely otherwise.
- **Zero-Value Exceptions**: Always bypass global minimums or "safety" fallbacks for local or trivial cases. Applying a generic fallback to a local event is a visible logic error.
- **Clean Scraping**: Avoid "greedy" regex fallbacks on raw HTML. Instead: strip script/style blocks, isolate semantic sections, prioritize structured attributes, and filter out decorative elements. Unbounded fallbacks capture CSS/JS artifacts.
- **Content Sanitization**: Unescape HTML entities and strip common artifacts to prevent the UI from looking broken.

## Coverage & Defaults
- Ensure core calculations have adequate coverage across the dataset.
- **Explicit Defaults**: Prefer explicit defaults from the backend when the UI needs them, avoiding unsupported states.
- **Deterministic Variance**: Use a deterministic seed (e.g. city name length) for generating "estimated" or fallback data to ensure the UI numbers are consistent on every load, preserving user trust.
- **Absolute vs Relative Scoring**: Prefer absolute scoring bounds over relative bounds so scores remain consistent regardless of result context.

## Developer & Agent Alignment
- **Explicit Conventions**: Ensure `AGENTS.md` and `README.md` are consistent about script locations.
- **Schema Integrity**: When adding new metadata to an API response, update the backend serialization schema (e.g., Pydantic). Validation frameworks will strip undefined fields, leading to frontend bugs.

## UX & Heuristic Reliability
- **Input UX Gold Standard**: Use `onFocus={(e) => e.target.select()}` combined with a clear (✕) reset button.
- **Placeholder Over Pre-fill**: Inputs should start empty with grayed-out placeholders, not actual pre-filled values which mislead users.
- **Search Filter Stability**: Keep the search/filter area sticky and provide a 'Quick Reset' button.
- **Loading State Feedback**: Use clear, descriptive spinners (e.g., "Analyzing routes...") for long backend queries.
- **Date Picker Reliability**: Apply explicit `min/max` bounds standardizing standard `type="date"` inputs rather than using hacky text-to-date flips that cause layout jumps.
- **"Near Miss" Transparency**: Surface near-miss options (e.g., "$20 over budget") instead of filtering out entirely, turning dead ends into actionable choices.
- **Feasibility & Badges**: Users prioritize feasibility. Use badges like "Quick Trip" rather than raw scores. Distinguish "FLIGHT" vs "TRAIN/BUS" with high-contrast UI tags based on regional flags rather than purely on duration.
- **Cost Transparency**: Break down estimates via non-intrusive tooltip hovers (built with standard CSS instead of complex arbitrary Tailwind overrides if possible).
- **Hidden Concept Fees**: Never silently inject fees if an option explicitly says "free."
- **Boundary-Aware Checks**: Use specific word boundaries (`endswith`, preceding spaces) rather than generic substring matching to avoid overlapping dataset false positives.
- **Mathematical Transparency**: UI descriptive text (e.g., "Scores weighted 45/55") must mathematically match the exact backend calculation.
- **Stateful Shareability**: URL queries are the source of truth. Ensure *every* form variable is captured in the reactivity tracking to prevent stale shares.
- **Exact Match Primacy**: If a user search matches exactly, it must result in max score or absolute success state.

## UI Testing & Agent Orchestration
- **Smoke Tests**: After significant frontend changes, run the automated UX smoke test. High severity issues must be fixed before proceeding.
- **Label-Driven Testing**: Link labels to inputs via `htmlFor` and `id` to enable Playwright's accessible locators.
- **Reviewer-Implementer Cycles**: Use a Reviewer subagent and an Implementer coding agent in iterative loops for UI Polish constraint issues.
- **Subagent Exhaustion & Rate Limits**: If a subagent hits resource limits, halt and report it rather than inventing fake reviews via code-based audit alone. Check for `RESOURCE_EXHAUSTED` before queuing a review cycle to avoid endless retry loops.