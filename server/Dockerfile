FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . ./

<<<<<<< HEAD
=======
# CMD npm run build && npm start
>>>>>>> 6c0455776c9b732870330095b36e3f7249cfc22d
CMD npm run start:watch & npx nodemon -w package.json --exec 'npm install'