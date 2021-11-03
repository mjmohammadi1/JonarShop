

const {userService} = require('../../services');

const updateUser = async (req, res, next) => {
	try{
		const updateduser = await userService.updateUserPassword({'id':req.params.id,'password':req.body.password});
		res.status(201).json({updateduser});
	}catch(err){
		next(err);
	}
};

const deleteUser = async (req, res, next) => {
	try{
		const deleteResult = await userService.deleteUser({'id':req.params.id});
			res.status(200).json({deleteResult});
	}catch(err){
		next(err);
	}
};

const getUser = async (req, res, next)=>{
	try{
		const foundUser = await userService.getUser({'id':req.params.id});
		res.status(200).json({foundUser});
	}catch(err){
		next(err);
	}
};

const getUsers = async (req, res, next)=>{
	try{
		const foundUsers = await userService.getUsers({'query':req.query.new});
		res.status(200).json({foundUsers});
	}catch(err){
		next(err);
	}
};

const getUsersStats = async (req, res, next)=>{
	try{
		const userStats = await userService.getUsersStats();
		res.status(200).json({userStats});
	}catch(err){
		next(err);
	}
};

module.exports = {updateUser,deleteUser,getUser,getUsers, getUsersStats};