FROM node:lts-alpine as common

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . ./

FROM common as development
CMD npm run start

FROM common as production
CMD npm run build