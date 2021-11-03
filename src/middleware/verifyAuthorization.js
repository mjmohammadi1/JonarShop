const {ApiError} = require('../utils');

const verifyUser = (req,res, next)=>{

	const {user:{id:userId, isAdmin}, params:{id:paramId}} = req;

	if(userId === paramId || isAdmin){
		return next();
	}
	throw ApiError.forbidden('The action is not allowed!');
};

const verifyAdmin = (req, res, next)=>{
	const {user:{isAdmin}} = req;
	if(isAdmin){
		return next();
	}
	throw ApiError.forbidden('The action is not allowed!');
};

module.exports= {verifyUser,verifyAdmin};