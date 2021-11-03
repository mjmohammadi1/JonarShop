const {productService} = require('../../services');


const createProduct = async(req,res,next)=>{
	try{
		const createdProduct = await productService.createProduct(req.body);
		res.status(201).json({createdProduct});
	}catch(err){
		next(err);
	}
};

const updateProduct = async(req,res,next)=>{
	try{
		const updatedProduct = await productService.updateProduct(req.body);
		res.status(201).json({updatedProduct});
	}catch(err){
		next(err);
	}
};

const deleteProduct = async (req, res, next) => {
	try{
		const deleteResult = await productService.deleteProduct({'id':req.params.id});
			res.status(200).json({deleteResult});
	}catch(err){
		next(err);
	}
};

const getProduct = async (req, res, next)=>{
	try{
		const foundProduct = await productService.getProduct({'id':req.params.id});
		res.status(200).json({foundProduct});
	}catch(err){
		next(err);
	}
};

const getProducts = async(req,res,next)=>{
	try{
		const products = await productService.getProducts(req.query);
		res.status(200).json({products});
	}catch(err){
		next(err);
	}
};

module.exports={createProduct,updateProduct,deleteProduct,getProducts, getProduct};