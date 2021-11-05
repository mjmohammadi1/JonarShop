const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {JWT_SECRET} = process.env;

const hashPassword = async (password)=>{
	const hashedPassword = bycrypt.hash(password,10);
	return hashedPassword;
};

const verifyPassword = async(password,hashedPassword)=>{
	const isValid = await bycrypt.compare(password,hashedPassword);
	return isValid;
};

const genAccessToken = (id, isAdmin)=>{
	return jwt.sign({id, isAdmin},JWT_SECRET, {expiresIn:'2d'});
};

module.exports={
	hashPassword,
	verifyPassword,
	genAccessToken
};