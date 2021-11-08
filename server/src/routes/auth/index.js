const router = require('express').Router();

const { authController } = require('../../controllers');
const { registerUser, loginUser } = authController();

const { validateDto } = require('../../middleware');
const {
  schemas: { registerSchema, loginSchema },
} = require('../../utils');

router.post('/register', validateDto(registerSchema), registerUser);
router.post('/login', validateDto(loginSchema), loginUser);

module.exports = router;
