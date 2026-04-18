FROM node:22-alpine
WORKDIR /app

COPY server/package.json ./
RUN npm install --omit=dev

COPY server/src ./src

EXPOSE 3000
USER node
CMD ["node", "src/index.js"]
