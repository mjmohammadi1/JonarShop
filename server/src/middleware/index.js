const validateDto = require('./validate-dto');
const {verifyToken} = require('./verifyToken');
const {verifyUser, verifyAdmin} = require('./verifyauthorization');

const authUserMiddleWare = [verifyToken,verifyUser];
const authAdminMiddleWare = [verifyToken,verifyAdmin];

module.exports={
	validateDto,
	verifyToken,
	authUserMiddleWare,
	authAdminMiddleWare
};