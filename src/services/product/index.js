const {productDAO} = require('../../dao');

const createProduct = async(params)=>{
	const {title, desc, img, categories, size, color, price} = params;
	return productDAO.createProduct({title, desc, img, categories, size, color, price});
};

const updateProduct = async(params)=>{
	const {title, desc, img, categories, size, color, price} = params;
	return productDAO.updateProduct({title, desc, img, categories, size, color, price});
};

const getProduct = async(params)=>{
	const {id} = params;
	return productDAO.getProduct(id);
};

const getProducts = async(params)=>{
	return productDAO.getProducts(params);
};

const deleteProduct = async(params)=>{
	const {id} = params;
	return productDAO.deleteProduct(id);
};

module.exports ={createProduct,updateProduct, deleteProduct,getProduct,getProducts };