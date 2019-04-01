FROM node:8
WORKDIR /usr/src/count
COPY package*.json ./
RUN npm install -D
RUN npm install
COPY . .
RUN tsc index.ts
EXPOSE 80
CMD [ "npm", "start" ]
