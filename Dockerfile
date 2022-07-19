FROM node:11.13.0

WORKDIR '/app'

COPY package.json .

RUN npm install

RUN npm run build

COPY . .

EXPOSE 80

CMD ["npm", "run", "start:prod"]