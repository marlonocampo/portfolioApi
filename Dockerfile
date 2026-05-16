FROM node:22-alpine AS builder

WORKDIR /app

# enable pnpm
RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

# only JS compiled
FROM node:22-alpine AS runner
WORKDIR /app
# enable pnpm
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile
COPY --from=builder /app/dist ./dist
#expose port
EXPOSE 5000
CMD ["node", "dist/src/server.js"]
