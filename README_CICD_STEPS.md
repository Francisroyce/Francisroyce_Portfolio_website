# CI/CD Setup for `okoronkwo-francis-ifeanyi-|-portfolio` (Vite + Docker + GitHub Actions)

This adds:
- `Dockerfile` for production build with Nginx SPA routing.
- `.dockerignore` to keep images lean.
- `nginx.conf` for client-side routing.
- GitHub Actions:
  - `CI - Build & Push Docker Image`: builds and pushes to DockerHub on every push to `main`.
  - `CD - Deploy to VPS via SSH (Optional)`: pulls and runs the image on your server.

## 1) Create DockerHub repo & GitHub secrets
In GitHub → **Settings → Secrets and variables → Actions**, add:
- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN` (DockerHub → Security → New Access Token)

(Optional for deploy):
- `SERVER_HOST`, `SERVER_USER`, `SERVER_SSH_KEY` (private key), `SERVER_PORT` (22)
- `DOCKER_IMAGE_NAME` (default: `portfolio`), `CONTAINER_NAME` (default: `portfolio`)

## 2) Commit these files and push to `main`
GitHub Actions will build and push the image tagged `latest` and the commit SHA.

## 3) Test locally
```bash
docker build -t okoronkwo-francis-ifeanyi-|-portfolio:dev .
docker run -d -p 8080:80 --name okoronkwo-francis-ifeanyi-|-portfolio okoronkwo-francis-ifeanyi-|-portfolio:dev
# Open http://localhost:8080
```

## 4) Deploy (optional)
Run the **CD - Deploy to VPS via SSH** workflow manually from the Actions tab
(or leave it to trigger on pushes to `main`).
