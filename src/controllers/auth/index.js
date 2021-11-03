

const {authService} = require('../../services');

const registerUser = async (req, res, next) => {
	
	//only error handling, reponse, calling related service, LOGGING (think about it)//don't forget GLOBALIZED ERROR HANDLING;
	try{
		const registeredUser = await authService.registerUser(req.body);
		res.status(201).json({registeredUser});
	}catch(err){
		next(err);
	}
};

const loginUser = async(req, res, next)=>{
	try{
		const signedInUser = await authService.loginUser(req.body);
		res.status(200).json({signedInUser});
	}catch(err){
		next(err);
	}
};

//updateUser
//deleteUser


module.exports = {registerUser,loginUser};