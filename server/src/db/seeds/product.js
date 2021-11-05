const { productSchema } = require('../../schemas');

const mongoose = require('mongoose');

const database = async () => {
  return await mongoose.connect(`mongodb://admin:pass@localhost:27017/?authSource=admin`);
};

const products = [
  new productSchema({
    title: '1 Red shirt',
    desc: 'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. ',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGiOu8cckjROembFUrAJWwvALpjJAHrPOYVUCziSbq-MBcOO-6zE2TKuGj9HYQbBYI-74&usqp=CAU',
    categories: ['sumemr', 'shirt', 'women', 'winter'],
    size: ['S', 'M', 'L'],
    color: ['red', 'blue', 'black'],
    price: '80',
  }),
  new productSchema({
    title: '2 Red shirt',
    desc: 'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. ',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGiOu8cckjROembFUrAJWwvALpjJAHrPOYVUCziSbq-MBcOO-6zE2TKuGj9HYQbBYI-74&usqp=CAU',
    categories: ['sumemr', 'shirt', 'women', 'winter'],
    size: ['S', 'M', 'L'],
    color: ['red', 'blue', 'black'],
    price: '80',
  }),
  new productSchema({
    title: '3 Red shirt',
    desc: 'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. ',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGiOu8cckjROembFUrAJWwvALpjJAHrPOYVUCziSbq-MBcOO-6zE2TKuGj9HYQbBYI-74&usqp=CAU',
    categories: ['sumemr', 'shirt', 'women', 'winter'],
    size: ['S', 'M', 'L'],
    color: ['red', 'blue', 'black'],
    price: '80',
  }),
  new productSchema({
    title: '4 Red shirt',
    desc: 'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. ',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGiOu8cckjROembFUrAJWwvALpjJAHrPOYVUCziSbq-MBcOO-6zE2TKuGj9HYQbBYI-74&usqp=CAU',
    categories: ['sumemr', 'shirt', 'women', 'winter'],
    size: ['S', 'M', 'L'],
    color: ['red', 'blue', 'black'],
    price: '80',
  }),
  new productSchema({
    title: '5 Red shirt',
    desc: 'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. ',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGiOu8cckjROembFUrAJWwvALpjJAHrPOYVUCziSbq-MBcOO-6zE2TKuGj9HYQbBYI-74&usqp=CAU',
    categories: ['sumemr', 'shirt', 'women', 'winter'],
    size: ['S', 'M', 'L'],
    color: ['red', 'blue', 'black'],
    price: '80',
  }),
];
const runSeeds = async () => {
  const db = await database();
  for (let i = 0; i < products.length; i++) {
    const saved = await products[i].save();
    console.log('saved ', saved);
  }
  await db.disconnect();
};

runSeeds();
