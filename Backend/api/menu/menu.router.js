let express = require('express');
let router = express.Router();
let {
    controllerGetMenu,
    controllerGetMenuById,
    controllerAddMenu,
    controllerUpdateMenu,
    controllerDeleteMenu,
} = require('./menu.controller');

router.get('/', controllerGetMenu)
router.get('/:id', controllerGetMenuById)
router.post('/', controllerAddMenu)
router.put('/:id', controllerUpdateMenu)
router.delete('/:id', controllerDeleteMenu)

module.exports = router