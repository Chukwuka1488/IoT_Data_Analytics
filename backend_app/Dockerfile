FROM node:14

WORKDIR /usr/src/app

# Copy only the package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

RUN npm install

# Copy only the necessary files and directories for building and running the app
# Here, I'm assuming you need your source files (like .ts files) and perhaps some configuration.
# Adjust according to your project's structure.
COPY src ./src
COPY config ./config
COPY tsconfig.json ./

RUN npm run build && ls ./dist

EXPOSE 3500

CMD ["node", "./dist/server.js"]