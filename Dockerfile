FROM node:11.13.0

ENV HOME=/usr/src

COPY package.json $HOME/vetorfe/

WORKDIR $HOME/vetorfe

RUN npm install --unsafe-perm
# If you are building your code for production
#RUN npm ci --only=production

COPY . $HOME/vetorfe

RUN npm run build

EXPOSE 80

CMD ["npm", "run", "start:prod"]