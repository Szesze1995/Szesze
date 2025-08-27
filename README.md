# Szesze Monorepo

This monorepo hosts the early skeleton of the community platform described in the design document.

## Getting started

1. Copy `.env.example` to `.env` and adjust if necessary.
2. Start all services:

```sh
npm run dev
```

This runs `docker compose up -d --build`.

Services:
- Web: http://localhost:5173
- API: http://localhost:3000

To stop everything:
```sh
npm run stop
```

View logs:
```sh
npm run logs
```

Run database migrations:
```sh
npm run db:migrate
```

## Testing

- `curl http://localhost:3000/health` should return `OK`.
- Visit http://localhost:5173 to see the placeholder web app.
