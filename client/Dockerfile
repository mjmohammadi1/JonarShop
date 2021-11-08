FROM node:14 as build-stage

WORKDIR /client
COPY package.json .
RUN npm install
COPY . .

ARG REACT_APP_HOST_URL
ENV REACT_APP_HOST_URL=$REACT_APP_HOST_URL

ARG REACT_APP_STRIPE_KEY
ENV REACT_APP_STRIPE_KEY=$REACT_APP_STRIPE_KEY

RUN npm run build

FROM nginx:1.17.0-alpine

COPY --from=build-stage /client /usr/share/nginx/html
EXPOSE 3000

CMD nginx -g 'daemon off;'