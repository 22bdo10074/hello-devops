# Hello DevOps 🚀

> A complete containerized DevOps project demonstrating Docker,
> Docker Compose, PostgreSQL, GitHub Actions CI/CD, Docker Hub,
> healthchecks, persistent storage, networking, and environment
> configuration.

## 🚀 Live Local Demo

| Service | URL |
|---|---|
| Frontend | http://localhost:8081 |
| Backend API | http://localhost:3000 |
| PostgreSQL | localhost:5432 |

## 🚀 Architecture

                 GitHub Repository
                        │
                        ▼
                GitHub Actions
                        │
              ┌─────────┴─────────┐
              ▼                   ▼
        Build Images         Docker Hub
              │                   │
              └─────────┬─────────┘
                        ▼
                 Docker Compose
                        │
          ┌─────────────┼─────────────┐
          ▼             ▼             ▼
       Nginx         Node.js      PostgreSQL
      Frontend       Backend        Database
       :8081          :3000           :5432
                         │
                         ▼
                  Healthcheck
                         │
                         ▼
                 Persistent Volume
