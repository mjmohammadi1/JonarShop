
const database = require('../../db');
const {userSchema} = require('../../schemas');
const { authHelper, ApiError } = require('../../utils');

const updateUserPassword = async(id,password)=>{
	await database;
	const hashedPassword = await authHelper.hashPassword(password);
	const updateduser = await userSchema.findByIdAndUpdate(
		id, {
			password: hashedPassword
		},{new:true});
	return updateduser;
};

const deleteUser = async(id,password)=>{
	await database;
	const deleteResult =  await userSchema.findByIdAndDelete(id);
	if(deleteResult === null){
		throw ApiError.notFound('Not Found');
	}
	return deleteResult;
};

const getUser = async(id)=>{
	await database;
	const foundUser = await userSchema.findById(id);
	if(foundUser === null){
		throw ApiError.notFound('Not Found');
	}
	const { password, ...userProfile } = foundUser._doc;
	return userProfile;
};

const getUsers = async(query)=>{
	await database;
  const users = query
		? await userSchema.find().sort({ _id: -1 }).limit(5)
		: await userSchema.find();
	return users;
};

const getUsersStats = async()=>{
	const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  const usersStats = await userSchema.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: '$createdAt' },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ]);
	return usersStats;
};

module.exports={
	updateUserPassword,
	deleteUser,
	getUser,
	getUsers,
	getUsersStats
};