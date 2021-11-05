const ajvInstance = require('./ajv-instance');

const register = {
  type: 'object',
  properties: {
    username: { type: 'string' },
    password: { type: 'string' },
    email: { type: 'string', format: 'email' },
    isAdmin: { type: 'string' },
    img: { type: 'string' },
  },
  required: ['username', 'password', 'email'],
  additionalProperties: true,
};

const login = {
  type: 'object',
  properties: {
    username: { type: 'string' },
    password: { type: 'string' },
  },
  required: ['username', 'password'],
  additionalProperties: false,
};

const userUpdate = {
  type: 'object',
  properties: {
    password: { type: 'string' },
  },
  required: ['password'],
  additionalProperties: false,
};

const product = {
  type: 'object',
  properties: {
    title: { type: 'string' },
    desc: { type: 'string' },
    img: { type: 'string' },
    categories: { type: 'array', items: { type: 'string' }, uniqueItems: true },
    size: { type: 'array', items: { type: 'string' }, uniqueItems: true },
    color: { type: 'array', items: { type: 'string' }, uniqueItems: true },
    price: { type: 'string' },
    inStock: { type: 'boolean' },
  },
  required: ['title', 'desc', 'img', 'categories', 'size', 'color', 'price'],
  additionalProperties: false,
};

const order = {
  type: 'object',
  properties: {
    userId: { type: 'string' },
    products: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          productId: { type: 'string' },
          quantity: { type: 'integer' },
        },
      },
      uniqueItems: true,
    },
    amount: { type: 'number' },
    address: { type: 'string' },
  },
  required: ['userId', 'products', 'amount', 'address'],
};

const registerSchema = ajvInstance.compile(register);
const loginSchema = ajvInstance.compile(login);
const userUpdateSchema = ajvInstance.compile(userUpdate);
const productSchema = ajvInstance.compile(product);
const orderSchema = ajvInstance.compile(order);

module.exports = {
  registerSchema,
  loginSchema,
  userUpdateSchema,
  productSchema,
  orderSchema,
};
