FROM node:latest
WORKDIR /node
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
VOLUME [ "/node/node_modules" ]
CMD ["npm", "run", "dev"]