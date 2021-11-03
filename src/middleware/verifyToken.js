
const jwt = require('jsonwebtoken');
const {ApiError} = require('../utils');
const {JWT_SECRET} = process.env;

const verifyToken = (req,res,next)=>{
	const authorization = req.headers.authorization;
	if(authorization){
		const token = authorization.replace('Bearer ','');
		jwt.verify(token,JWT_SECRET, (err, user)=>{
			if(err){
				throw ApiError.unAuthenticated('Invalid token!');
			}
			req.user=user;
			next();
		});
	}else{
		throw ApiError.unAuthenticated('You are not authenticated!');
	}
};

module.exports={verifyToken};