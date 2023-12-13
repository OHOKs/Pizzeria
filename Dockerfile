FROM node:alpine

WORKDIR /
COPY / /
WORKDIR /

RUN npm install

EXPOSE 8080
ENTRYPOINT ["npm", "run", "start"]