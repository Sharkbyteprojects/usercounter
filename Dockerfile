FROM node:8
WORKDIR /usr/src/count
COPY package*.json ./
RUN npm install -D
RUN npm install
COPY . .
EXPOSE 80
CMD [ "tsc", "index.ts"]
CMD [ "npm", "start" ]
