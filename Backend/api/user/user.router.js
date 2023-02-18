let express = require('express');
let router = express.Router();
let {
    controllerGetUser,
    controllerGetUserById,
    controllerAddUser,
    controllerUpdateUser,
    controllerDeleteUser,
    controllerLoginUser
} = require('./user.controller');

router.get('/', controllerGetUser)
router.get('/:id', controllerGetUserById)
router.post('/', controllerAddUser)
router.post('/login', controllerLoginUser)
router.put('/:id', controllerUpdateUser)
router.delete('/:id', controllerDeleteUser)

module.exports = router