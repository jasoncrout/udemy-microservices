FROM node:18-alpine

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]

EXPOSE 4002 4002