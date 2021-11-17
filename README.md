# Jonar Shop

Jonar Shop is a web application that is built to ease the shopping process for the owner and the customers, using modern new technologies.

## Features

- Authentication and Authorization.
- Adding, Deleting, and Editing products.
- Search, Sort, and filter products.
- Handle payments using Stripe.
- Admin Dashboard to provide visibility over the revenue, orders, and customers of the shop compare it to the previous month, do analysis and show by tables and graphs.
- Upload to google firebase to preserve images of the products, and download to its central database.

## Tech

Jonar Shop uses a number of open source projects to work properly:

- Node Js - server side and API.
- React Js + Redux - UI and state management.
- MongoDB - to store and retrieve data.
- Docker - to ease deployment.
- Nginx - Reverse Proxy.
- Morgan - to log the requests and responses to the server.
- PM2 - to manage, monitor the processes of the application.
- Ajv - to validate schema of the body of upcoming requests to the server.
- Stripe - to handle payments.
- Google Firestore - to store images of the products.

## Practices

- Used Factory Function Design Pattern with Dependency Injection to maximize the modularity and testability of the code.
- The Flow of the code in the application is : Router => MiddleWare => Controller => Service => DAO.
- Error Handling is happening at the Controller level only, this is done to reduce the complexity and extra code to handle the error at lower levels.
- Used A Global Error Handling approach to improve the efficiency of the development and reduce the risk of human errors when returning errors from the server.
- Used Ajv as middleware and let the Controller, Service, and DAO work on their responsibilities only.
- Used PM2 to manage and monitor the processes that this application has. It restarts the app, sends notification emails when an issue happens, and provides a dashboard to see the metrics.
- Used Builder pattern with docker to generate builds for different environments and phases. I specially put effort to generate optimized builds on the Client and Admin apps.
- Used Seeds to prepopulate the database with sample data which is useful to test the app.
- Used Google Firestore to store the images of the products that the admin is adding to the store. this helps to preserve the images in the long run.
- Implemented Role-Based authentication and authorization using bycrypt, and JWT.
- Used Makefile to shorten the commands typed in the terminal.

## Installation

Jonar Shop requires 3 .env files in the main directory of the server, client, and admin to run.

In the ./server, create a .env file with the following structure and your values:

```
DB_HOST=value
DB_PORT=value
DB_NAME=value
SERVER_PORT=value
API_VERSION=value
JWT_SECRET=value
STRIPE_KEY=value
MONGO_DB_URL=value
```

In the ./client, create a .env file with the following structure and your values:

```
REACT_APP_STRIPE_KEY=value
REACT_APP_HOST_URL=value
```

In the ./admin, create a .env file with the following structure and your values:

```
REACT_APP_HOST_URL=value
```

Install the dependencies and start the app :

```
cd server
make build
```

to stop the application and remove the containers :

```
cd server
make down
```

PM2 is needed to run the app in production mode, so make sure to install it globally before running the production mode by running : `npm i pm2 -g`

to run the admin panel in production :

```
cd server
make admin-prod
```

to run the client in production :

```
cd server
make client-prod
```

to monitor the running processes:

```
cd server
make client-prod
```

to monitor the logs in the terminal :

```
pm2 monitor
```

to see the dashboard prodiving information about the processes :

```
pm2 plus
```

to stop all the running processes :

```
pm2 stop all
```

to delete all the running processes :

```
pm2 delete all
```

In the server directory :

## To run the server:

- `npm i`
- `npm run start`

## To run the client:

- `npm i`
- `npm run start`

## To run the admin panel:

- `npm i`
- `npm run start`
