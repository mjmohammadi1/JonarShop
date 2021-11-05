const router = require('express').Router();
const {validateDto, authUserMiddleWare, authAdminMiddleWare} = require('../../middleware');
const {schemas:{userUpdateSchema}} = require('../../utils');
const {userController:{updateUser, deleteUser, getUser,getUsers,getUsersStats }} = require('../../controllers');

router.get('/stats', authAdminMiddleWare, getUsersStats);
router.put('/:id',authUserMiddleWare,validateDto(userUpdateSchema) ,updateUser);
router.delete('/:id',authUserMiddleWare, deleteUser );
router.get('/:id', authAdminMiddleWare, getUser);
router.get('/', authAdminMiddleWare, getUsers);

module.exports = router;