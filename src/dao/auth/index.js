
const database = require('../../db');
const {userSchema} = require('../../schemas');
const {authHelper,ApiError} = require('../../utils');

const registerUser = async(username,password,email)=>{
	//const hashing function for password
	//validate user password 
	await database;
	const hashedPassword = await authHelper.hashPassword(password);

	const newUser = new userSchema({
		username:username,
		email:email,
		password:hashedPassword,
	});
		return await newUser.save();
};

const loginUser = async(username, password)=>{
	await database;
	const user = await userSchema.findOne({username:username});
	if(!user){
		throw ApiError.notFound('Invalid credentials!');
	}
	const isValidPassword = await authHelper.verifyPassword(password, user.password);
	if(!isValidPassword){
		throw ApiError.notFound('Invalid credentials!');
	}
	const {password:pass, ...userProfile} = user._doc;
	const accessToken = authHelper.genAccessToken(userProfile._id, userProfile.isAdmin);
	// return userProfile;
	return {...userProfile, accessToken};
	//generate token
};
module.exports={
	registerUser,
	loginUser
};

// checking user sign in , check user exists, then verify the password