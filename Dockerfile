# Build stage
FROM oven/bun:1 as build

WORKDIR /app

# Copy package and lock files
COPY package.json bun.lock ./

# Install dependencies
RUN bun install

# Copy all files
COPY . .

# Build the project
RUN bun run build

# Production stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 inside the container
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
