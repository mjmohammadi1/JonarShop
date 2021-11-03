
const router = require('express').Router();
const {authController:{registerUser,loginUser}} = require('../../controllers');

const {validateDto} = require('../../middleware');
const {schemas:{registerSchema, loginSchema}} = require('../../utils');

router.post('/register', validateDto(registerSchema), registerUser);
router.post('/login',validateDto(loginSchema),loginUser);

module.exports = router;
