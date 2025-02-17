FROM node:18-slim AS builder

RUN useradd -m appuser

WORKDIR /app

COPY package*.json tsconfig.json ./

RUN npm install --omit=dev

COPY . .

RUN npx tsc

FROM node:18-slim

RUN useradd -m appuser

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

USER appuser

EXPOSE 8000

CMD ["node", "index.js"]