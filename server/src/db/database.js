const mongoose = require('mongoose');
const { ApiError } = require('../utils');

const { MONGO_DB_URL } = process.env;

const database = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return connection;
  } catch (err) {
    ApiError.internal(err);
  }
};
module.exports = database();
