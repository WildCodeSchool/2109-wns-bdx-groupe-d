FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . ./
RUN npm install
RUN npm install nodemon
# fixing bug with nodemon that can't be installed and find in node_modules/bin from container, so forcing its installation with this command to make it work properly


CMD npm run start start:watch & npx nodemon -w package.json --exec 'npm install'
