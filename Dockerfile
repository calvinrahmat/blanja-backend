FROM node as build-stage

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

CMD ["node", "server.js"]