FROM node:17-alpine

# Create app directory
WORKDIR /usr/src/api

# uncomment this is if need to install the dependency while build and up api watch
# prevent the reinstallation of node modules at every changes in the source code
# If any issues with the dependency try with switching to yarn
#COPY package.json .
#COPY package-lock.json* ./
#RUN npm install
#VOLUME /usr/src/api/node_modules

# Bundle app source
COPY . .

EXPOSE 3000

# uncomment this is if need to up with api watch
#CMD ["npm", "run", "watch"]

# Invoke to container: docker exec -it node-typescript /bin/sh
# Start api     : npm run start
# Watch api     : npm run watch
