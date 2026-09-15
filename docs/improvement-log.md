# Repository Improvement Log

## 2026-09-15 IST

Repository: `atishayjain005/Ai-Coding-Assistant`

Problem: The project was a stale local-AI code review prototype with template
documentation, failing lint, no automated tests, hard-coded local API wiring,
high-severity dependency advisories, and a first-run UI that looked like an
error state before any review was requested.

Proposed improvement: Harden the app as a portfolio-ready local AI review
workspace by adding API and UI regression tests, extracting a reusable Express
app, making the frontend API URL configurable, upgrading vulnerable packages,
adding Ollama model timeout/configuration, improving first-run UX, and replacing
template docs with setup and verification instructions.

Reason: This repository directly supports a frontend-heavy full-stack portfolio:
React editor UI, Express API, local AI integration, test coverage, dependency
hygiene, and clear developer setup are all visible hiring signals.

Expected impact: Medium to high. The app is easier to run, safer to demo, more
deployable, and much easier to review in a PR.

Complexity: Medium.

Risk: Low to medium. The largest risk is the semver-major `@langchain/ollama`
upgrade; API and review-generation unit tests were added to cover the local
integration boundary without requiring a live model during CI.

Recommendation: Merge after PR review, then consider a free static frontend
deployment with clear local backend instructions.

Deployment requirement: No paid infrastructure. Frontend can be deployed as a
static Vite app after setting `VITE_API_BASE_URL`; backend still requires a host
with access to local or self-hosted Ollama.

Status: Review / Testing.
