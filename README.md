# AI Coding Assistant

AI Coding Assistant is a local-first code review workspace built with React,
CodeMirror, Express, LangChain, and Ollama. Paste JavaScript into the editor and
the backend sends it to a local model for structured, Markdown-formatted review
feedback.

## Features

- Split-screen editor and Markdown review panel.
- Starter JavaScript snippet for immediate demos.
- Configurable frontend API URL for local previews and deployments.
- Express review API with input validation, health check, and model timeout.
- Vitest and Supertest coverage for the API, client helper, and core UI states.
- Zero-vulnerability dependency baseline at the time of this update.

## Tech Stack

- React 18 and Vite
- Tailwind CSS
- CodeMirror
- Express
- LangChain Ollama integration
- Vitest, Testing Library, and Supertest

## Local Setup

Install dependencies:

```bash
npm install
```

Start Ollama and pull a review-capable model:

```bash
ollama pull llama3.2
```

Start the backend:

```bash
npm run server
```

Start the frontend in another terminal:

```bash
npm run dev
```

Open the Vite URL and generate a review from the starter snippet or your own
code.

## Configuration

Frontend:

```bash
VITE_API_BASE_URL=http://localhost:3000
```

Backend:

```bash
PORT=3000
OLLAMA_MODEL=llama3.2
OLLAMA_BASE_URL=http://localhost:11434
REVIEW_TIMEOUT_MS=30000
```

`OLLAMA_BASE_URL` is optional when Ollama runs on its default local endpoint.

## Quality Checks

Run the same checks used for this hardening pass:

```bash
npm test
npm run lint
npm run build
npm audit --audit-level=high
node --check server/index.js
node --check server/app.js
node --check server/review.js
```
