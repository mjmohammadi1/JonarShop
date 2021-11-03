


//mention that error handling will happen in controller level

const { authDAO } = require('../../dao');

const registerUser = async(params)=>{
	const {username, password, email} = params;
	return authDAO.registerUser(username, password,email);
};

const loginUser = async(params)=>{
	const {username, password} = params;
	return authDAO.loginUser(username, password);
};
module.exports ={
	registerUser,
	loginUser
};