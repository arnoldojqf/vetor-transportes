FROM node:11.13.0

WORKDIR '/usr/src/vetorfe'

COPY package*.json ./

RUN npm install
# If you are building your code for production
#RUN npm ci --only=production

RUN npm run build

COPY . .

EXPOSE 80

CMD ["npm", "run", "start:prod"]