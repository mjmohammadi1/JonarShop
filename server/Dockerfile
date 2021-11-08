
FROM node:14 as build-stage

LABEL version="1.0"
LABEL description="Image for the Jonar Shop API"

WORKDIR /app

COPY ["package.json","package-lock.json*", "./"]

RUN npm install --only=production && npm cache clean --force

COPY . .

EXPOSE 5000
