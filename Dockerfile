FROM node:lts-buster

WORKDIR /app

COPY package.json ./

RUN npm install || yarn install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
