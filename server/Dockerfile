FROM node:lts-alpine as common

WORKDIR /app

COPY package*.json ./

# RUN npm install nodemon
# fixing bug with nodemon that can't be installed and find in node_modules/bin from container, so forcing its installation with this command to make it work properly
RUN npm install

COPY . ./

RUN npm run build

FROM common as production
CMD npm run start

FROM common as development
CMD npm run start:watch & npx nodemon -w package.json --exec 'npm install'
