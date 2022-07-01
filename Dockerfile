FROM node:17-alpine

# Create app directory
WORKDIR /usr/src/api

# Bundle app source
COPY . .

EXPOSE 3000

#CMD ["npm", "run", "watch"]
#CMD ["sh", "-c", "npm run build && npm run watch"]

# Invoke to container: docker exec -it node-typescript /bin/sh
# build           : npm run build
# watch           : npm run watch
# Start the api   : npm run start
