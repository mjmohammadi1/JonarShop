const validateDto = require('./validate-dto');
const { verifyToken } = require('./verifyToken');
const { verifyUser, verifyAdmin } = require('./verifyAuthorization');

const authUserMiddleWare = [verifyToken, verifyUser];
const authAdminMiddleWare = [verifyToken, verifyAdmin];

module.exports = {
  validateDto,
  verifyToken,
  authUserMiddleWare,
  authAdminMiddleWare,
};
