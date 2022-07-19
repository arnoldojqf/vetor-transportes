FROM node:11.13.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install --unsafe-perm
#RUN npm install react-scripts@1.1.1 -g --silent
COPY . /usr/src/app
RUN npm run build

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