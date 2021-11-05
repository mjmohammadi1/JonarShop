const { userDAO } = require('../../dao');

const updateUserPassword = async(params)=>{
	const {id, password} = params;
	return userDAO.updateUserPassword(id, password);
};

const deleteUser = async(params)=>{
	const {id} = params;
	return userDAO.deleteUser(id);
};

const getUser = async(params)=>{
	const {id} = params;
	return userDAO.getUser(id);
};

const getUsers = async(params)=>{
	const {query} = params;
	return userDAO.getUsers(query);
};

const getUsersStats = async()=>{
	return userDAO.getUsersStats();
};

module.exports ={
	updateUserPassword,
	deleteUser,
	getUser,
	getUsers,
	getUsersStats
};