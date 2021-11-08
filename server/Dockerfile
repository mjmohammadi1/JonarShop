
FROM node:14 as build-stage

LABEL version="1.0"
LABEL description="Image for the Jonar Shop API"

WORKDIR /app

COPY ["package.json","package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install && npm cache clean --force

COPY . .

EXPOSE 5000
