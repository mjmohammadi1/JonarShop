const mongoose = require('mongoose');

const {DB_USER, DB_PASSWORD, DB_HOST ,DB_PORT, DB_AUTH_SOURCE} = process.env;

const database = async()=>{
  return await mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/?authSource=${DB_AUTH_SOURCE}`);
};
module.exports = database();