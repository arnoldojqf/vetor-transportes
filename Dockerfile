FROM node:11.13.0

# RUN mkdir -p /usr/src/app

# WORKDIR /usr/src/app

WORKDIR /usr/src/vetorfe

# ENV PATH /usr/src/app/node_modules/.bin:$PATH

# COPY package.json /usr/src/app/package.json

#RUN npm install --unsafe-perm --versbose

RUN npm run build

COPY . /usr/src/vetorfe

EXPOSE 80

CMD ["npm", "run", "start:prod"]