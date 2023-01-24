FROM node:16.16.0

WORKDIR /app

ENV NODE_OPTIONS=--max-old-space-size=1536
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

COPY ./ ./

RUN npm ci --unsafe-perm

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
