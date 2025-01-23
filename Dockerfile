FROM node:20-alpine as builder

ENV NODE_ENV production

WORKDIR /home/node

# Temporarily switch to root user
USER root
# Install @nestjs/cli globally
RUN npm install -g @nestjs/cli
# Switch back to node user
USER node

COPY package*.json ./
RUN npm ci

COPY --chown=node:node . .
RUN npx npm run build \
    && npm prune --omit=dev

# ---

FROM node:20-alpine

ENV NODE_ENV production

USER node
WORKDIR /home/node

COPY --from=builder --chown=node:node /home/node/package*.json ./
COPY --from=builder --chown=node:node /home/node/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/dist/ ./dist/

EXPOSE 8080

CMD ["node", "dist/main.js"]
