FROM node:10.15.0-alpine

WORKDIR /opt/presentaciones

COPY package*.json ./

RUN npm install --only=production

COPY . .

ENV NODE_ENV production

EXPOSE 5454
CMD ["npm", "start"]

