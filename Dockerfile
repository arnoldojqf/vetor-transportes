FROM node:11.13.0

WORKDIR '/app'

COPY package.json .

RUN npm run build

#RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "run", "start:prod"]