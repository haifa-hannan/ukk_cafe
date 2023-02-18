let express = require('express');
let router = express.Router();
let {
    controllerGetMeja,
    controllerAddMeja,
    controllerDeleteMeja,
    controllerUpdateMeja
} = require('../meja/meja.controller');

router.get('/', controllerGetMeja)
router.post('/', controllerAddMeja)
router.delete('/:id', controllerDeleteMeja)
router.put('/:id', controllerUpdateMeja)

module.exports = router;