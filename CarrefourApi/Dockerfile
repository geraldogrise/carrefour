FROM node:16.3.0-alpine AS base

WORKDIR /app
FROM base AS builder

COPY package*.json ./
COPY babel.config*.js ./
COPY tsconfig*.json ./
COPY babel.config*.js ./
COPY ./src ./src 
COPY ./swagger ./swagger
RUN npm install
RUN npm run build
RUN ls -al
USER node
CMD ["node", "./dist/server.js"]