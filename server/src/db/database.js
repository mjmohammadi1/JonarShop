const mongoose = require('mongoose');
const { ApiError } = require('../utils');

const { DB_NAME, DB_PORT } = process.env;

const database = async () => {
  try {
    const { connection } = await mongoose.connect(`mongodb://mongodb:${DB_PORT}/${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return connection;
  } catch (err) {
    ApiError.internal(err);
  }
};
module.exports = database();
