FROM node:12-alpine
RUN apk add --no-cache python2 g++ make
WORKDIR /web-shop
COPY . .
RUN npm install --production
CMD ["node", "src/main.ts"]