const { products } = require('./product');
const { users } = require('./user');
const { orders } = require('./orders');

const mongoose = require('mongoose');
const { DB_NAME, DB_PORT } = process.env;

const database = async () => {
  const { connection } = mongoose.connect(`mongodb://mongodb:${DB_PORT}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return connection;
};
const runSeeds = async () => {
  try {
    await database();
  } catch (err) {
    console.log('err in connection to the database', err);
  }
  const usersLength = users.length;
  const productsLength = products.length;
  const ordersLength = orders.length;

  let done = 0;
  for (var i = 0; i < productsLength; i++) {
    products[i].save(function (err, result) {
      done++;
      if (done === usersLength + productsLength + ordersLength) {
        exit();
      }
    });
  }

  for (var i = 0; i < usersLength; i++) {
    users[i].save(function (err, result) {
      done++;
      if (done === usersLength + productsLength + ordersLength) {
        exit();
      }
    });
  }

  for (var i = 0; i < ordersLength; i++) {
    orders[i].save(function (err, result) {
      done++;
      if (done === usersLength + productsLength + ordersLength) {
        exit();
      }
    });
  }
};

runSeeds();

function exit() {
  mongoose.disconnect();
}
