FROM node:16-alpine

RUN apk --no-cache add curl

WORKDIR /app

COPY package*.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

RUN npm ci

COPY . .

RUN npm run build && rm -rf src

CMD ["node", "./dist/main.js"]
