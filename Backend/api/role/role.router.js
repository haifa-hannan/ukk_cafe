let express = require('express');
let router = express.Router();
let {
    controllerGetRole,
    controllerGetRoleById,
    controllerAddRole,
    controllerUpdateRole,
    controllerDeleteRole
} = require('./role.controller');

router.get('/', controllerGetRole)
router.get('/:id', controllerGetRoleById)
router.post('/', controllerAddRole)
router.put('/:id', controllerUpdateRole)
router.delete('/:id', controllerDeleteRole)

module.exports = router