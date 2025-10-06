# Multi-stage build for okoronkwo-francis-ifeanyi-|-portfolio
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install deps first (better cache)
COPY package*.json ./
RUN npm ci || npm install

# Copy source and build
COPY . .
RUN npm run build

# Runtime stage: serve static files via Nginx
FROM nginx:alpine
# Copy custom nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html
# ✅ Copy Google Search Console verification file
COPY googlea01b76514aabe550.html /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
