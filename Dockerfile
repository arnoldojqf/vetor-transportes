FROM node:12.22.12

ARG MAX_OLD_SPACE_SIZE=325
ARG MEMORY=500m
ARG MEMORY_SWAP=2g
ENV NODE_OPTIONS=--max-old-space-size=${MAX_OLD_SPACE_SIZE} --memory=${MEMORY} --memory-swap=${MEMORY_SWAP}

#RUN mkdir -p /usr/src/app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_ENV production
#COPY package*.json ./

COPY package.json ./
#COPY package-lock.json ./
COPY ./ ./

USER node

RUN npm install --unsafe-perm --include=dev
#RUN npm install react-scripts@1.1.1 -g --silent

RUN npm run build

COPY . ./

EXPOSE 80

CMD ["npm", "run", "start:prod"]



#FROM node:11.13.0
#WORKDIR '/app'
#COPY package.json .
#RUN npm install
#COPY . .
#RUN npm run build


#FROM node:9.4
# Create app directory
#WORKDIR /usr/src/app
# Expose port for service
#EXPOSE 5000
# Install and configure `serve`.
#RUN npm install -g serve
# Copy source code to image
#COPY . .
# Install dependencies
#RUN npm install
# Build app and start server from script
#CMD ["/usr/src/app/run"]