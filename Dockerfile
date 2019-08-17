# Get base image
FROM node:alpine

WORKDIR /usr/app
# install dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# add init command

CMD ["npm", "start"]
