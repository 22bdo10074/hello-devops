# 🚀 Hello DevOps

A beginner-friendly containerized DevOps project demonstrating how to build, run, connect, and automate a multi-container web application using **Docker, Docker Compose, Nginx, Node.js, PostgreSQL, GitHub Actions, and Docker Hub**.

The project contains a frontend, backend API, and PostgreSQL database running as separate containers. Docker Compose manages the complete application stack, while GitHub Actions automates Docker image building and publishing to Docker Hub.

---

## 📌 Project Overview

This project was created to understand and demonstrate practical DevOps fundamentals:

- Containerization using Docker
- Multi-container application management using Docker Compose
- Frontend deployment using Nginx
- Backend API using Node.js
- PostgreSQL database integration
- Docker container networking
- PostgreSQL persistent storage
- Container healthchecks
- Restart policies
- Environment-based configuration
- Git and GitHub version control
- GitHub Actions CI/CD
- Docker Hub image publishing
- Docker image optimization
- Basic DevOps documentation and troubleshooting

---

# 🏗️ Architecture

```text
                         Developer
                             │
                             │ git push
                             ▼
                    ┌─────────────────┐
                    │ GitHub Repository│
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ GitHub Actions   │
                    │     CI/CD        │
                    └────────┬────────┘
                             │
                   ┌─────────┴─────────┐
                   ▼                   ▼
            Build Frontend      Build Backend
             Docker Image       Docker Image
                   │                   │
                   └─────────┬─────────┘
                             │
                             ▼
                       ┌───────────┐
                       │ Docker Hub │
                       └───────────┘


                    LOCAL APPLICATION
                            
                    Docker Compose
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
     ┌─────────┐      ┌─────────┐     ┌─────────────┐
     │ Nginx   │      │ Node.js │     │ PostgreSQL  │
     │Frontend │─────▶│ Backend │────▶│  Database   │
     │  :80    │      │  :3000  │     │    :5432    │
     └────┬────┘      └────┬────┘     └──────┬──────┘
          │                │                 │
          │                └────────┬────────┘
          │                         │
          └──── Docker Network ─────┘
                                    │
                                    ▼
                           Persistent Volume
```

---

# 🧩 Application Components

The application contains three main services.

| Service | Technology | Container Port | Host Port |
|---|---|---:|---:|
| Frontend | Nginx | 80 | 8081 |
| Backend | Node.js | 3000 | 3000 |
| Database | PostgreSQL 16 | 5432 | 5432 |

---

---

# 📁 Project Structure

```text
hello-devops/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── .dockerignore
├── .env
├── .env.example
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── index.html
├── style.css
└── README.md
```

---

# 🌐 Frontend

The frontend is a simple static HTML/CSS application.

Main files:

```text
index.html
style.css
```

The frontend is served using **Nginx** inside a Docker container.

The application displays:

```text
Hello DevOps

My First Docker Project

Created by Sandhya

Backend Status: Hello from DevOps Backend!
```

The frontend is available locally at:

```text
http://localhost:8081
```

---


## Why `nginx:alpine`?

The Alpine-based Nginx image is lightweight and suitable for serving static frontend files.

The Dockerfile also copies only the required frontend files rather than the entire project directory.

---
## Port Mapping

| Component | URL / Port |
|---|---|
| Frontend | http://localhost:8081 |
| Backend | http://localhost:3000 |
| PostgreSQL | localhost:5432 |


# 🔎 Useful Docker Commands

## List running containers

```bash
docker ps
```

## List all containers

```bash
docker ps -a
```

## View all Docker images

```bash
docker images
```

## List Docker volumes

```bash
docker volume ls
```

## List Docker networks

```bash
docker network ls
```

## View Compose configuration

```bash
docker compose config
```

## View application logs

```bash
docker compose logs
```

## View backend logs

```bash
docker compose logs backend
```

## View database logs

```bash
docker compose logs database
```

## Follow backend logs

```bash
docker compose logs -f backend
```

## Inspect backend container

```bash
docker inspect hello-devops-backend
```

## Inspect database container

```bash
docker inspect hello-devops-db
```

## Stop the application

```bash
docker compose down
```

## Start the application again

```bash
docker compose up -d
```

---

# 🧠 DevOps Concepts Demonstrated

## 1. Containerization

The application components run inside isolated Docker containers.

```text
Frontend → Container
Backend  → Container
Database → Container
```

---

## 2. Container Orchestration with Docker Compose

Docker Compose manages the complete multi-container application.

```text
docker compose up -d
```

starts the stack.

---

## 3. Service Discovery

Docker Compose provides internal DNS.

The backend can access PostgreSQL using:

```text
database:5432
```

---

## 4. Persistent Storage

A named Docker volume is used for PostgreSQL data.

---

## 5. Health Monitoring

Docker healthchecks verify service readiness.

---

## 6. Reliability

Restart policies allow containers to restart automatically when appropriate.

---

## 7. CI/CD

GitHub Actions automatically builds Docker images and publishes them to Docker Hub.

---

## 8. Container Registry

Docker Hub is used to store the application images.

---

## 9. Configuration Management

Environment variables separate configuration from application code.

---

## 10. Image Optimization

Nginx Alpine, selective file copying, and `.dockerignore` help optimize the frontend image.

---

# 🔄 Complete Development Workflow

The complete workflow is:

```text
1. Developer writes code
          │
          ▼
2. Test application locally
          │
          ▼
3. Build Docker images
          │
          ▼
4. Run services using Docker Compose
          │
          ▼
5. Verify frontend
          │
          ▼
6. Verify backend
          │
          ▼
7. Verify PostgreSQL connection
          │
          ▼
8. Commit changes to Git
          │
          ▼
9. Push code to GitHub
          │
          ▼
10. GitHub Actions starts
          │
          ▼
11. Build frontend image
          │
          ▼
12. Build backend image
          │
          ▼
13. Authenticate with Docker Hub
          │
          ▼
14. Push images to Docker Hub
```

---

# 🧪 Local Application Test Flow

```text
Browser
   │
   │ http://localhost:8081
   ▼
Nginx Frontend
   │
   │ Backend request
   ▼
Node.js Backend
   │
   │ database:5432
   ▼
PostgreSQL
   │
   ▼
Persistent Volume
```

Successful backend response:

```json
{
  "message": "Hello from DevOps Backend!",
  "status": "success",
  "database": "connected"
}
```

---

# 🐳 Docker Hub Image Flow

```text
GitHub
   │
   ▼
GitHub Actions
   │
   ├── Build Web Image
   │
   ├── Build Backend Image
   │
   ▼
Docker Hub
   │
   ├── hello-devops-web:latest
   │
   └── hello-devops-backend:latest
```

---


# 🚧 Future Improvements

The current project focuses on Docker and basic CI/CD fundamentals.

Possible future enhancements include:

- Kubernetes deployment
- Amazon ECR
- Amazon EKS
- Terraform infrastructure
- AWS VPC
- AWS IAM
- Terraform modules
- Terraform remote state
- Development environment
- Staging environment
- Production environment
- GitHub Actions deployment to AWS/EKS
- Advanced monitoring and logging

These are **future improvements and are not part of the current implementation**.

---

# 📊 Current Project Scope

### Completed

```text
Docker
    ↓
Docker Compose
    ↓
Nginx Frontend
    +
Node.js Backend
    +
PostgreSQL
    ↓
Docker Networking
    ↓
Persistent Storage
    ↓
Healthchecks
    ↓
Restart Policies
    ↓
Environment Configuration
    ↓
GitHub
    ↓
GitHub Actions
    ↓
Docker Hub
```

# 🎯 Project Goal

The main goal of this project is to demonstrate a practical beginner-level DevOps workflow:

```text
Develop
   ↓
Containerize
   ↓
Connect Services
   ↓
Persist Database
   ↓
Test
   ↓
Version Control
   ↓
Automate Build
   ↓
Publish Docker Images
```

---


# ⭐ Final Summary

This project demonstrates a complete beginner-friendly DevOps workflow using Docker and GitHub Actions.

The application consists of a containerized Nginx frontend, Node.js backend, and PostgreSQL database. Docker Compose is used to manage the services, networking, healthchecks, restart policies, and persistent database storage.

GitHub Actions automates the Docker image build and publishing process, while Docker Hub is used as the container registry.

The project provides practical experience with containerization, networking, persistence, environment configuration, CI/CD, container registries, and basic DevOps automation.
# Hello DevOps 🚀

> A complete containerized DevOps project demonstrating Docker,
> Docker Compose, PostgreSQL, GitHub Actions CI/CD, Docker Hub,
> healthchecks, persistent storage, networking, and environment
> configuration.



