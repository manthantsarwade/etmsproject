# Stage 1: Build the React app
FROM node:18-alpine AS builder  
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build  # Or your build command (e.g., yarn build)

# Stage 2: Serve the built app with Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html  
COPY nginx.conf /etc/nginx/conf.d/default.conf 
EXPOSE 80 