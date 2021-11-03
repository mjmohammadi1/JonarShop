const database = require("./src/db/database");
const express = require('express');
const app = express()
const {userRouter,authRouter,productRouter,cartRouter,orderRouter, stripeRouter} = require('./src/routes');
const {apiErrorHandler} = require('./src/utils')
const {SERVER_PORT, API_VERSION} = process.env;

app.use(express.json())
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/users',userRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/cart', cartRouter)
app.use('/api/v1/orders', orderRouter)
app.use('/api/v1/checkout', stripeRouter)

app.use(apiErrorHandler);
app.listen(SERVER_PORT, ()=>{
	console.log('Server listening ...')
})


