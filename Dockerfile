FROM node:12.19.0-alpine3.12

WORKDIR /opt/presentaciones

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV production

CMD ["npm", "start"]
# https://jonnev.se/building-node-images-for-docker-on-raspberry-pi-zero/
