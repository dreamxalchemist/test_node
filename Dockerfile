FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY sum.js .
COPY sum.test.js .
COPY server.js .

EXPOSE 80
CMD [ "node", "server.js" ]