const model = require('./../../models/index')
const menu = model.menu

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const multer = require('multer')

const storage = multer


exports.controllerGetMenu = async(req, res)=> {
    await menu.findAll({
        attributes: {
            exclude: ["createdAt", "updatedAt"],
        },
      
    })
    .then(result=> {
        res.json({
            data: result
        })
    })
    .catch(err=> {
        console.log(err)
    })
}

exports.controllerGetMenuById = async(req, res)=> {
    await menu.findOne({
        where: {
            id: req.params.id
        },
        attributes: {
            exclude: ["createdAt", "updatedAt"],
        },
        include: [
            {
                model: model.menu,
                as: "id_menus",
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                }
            }
        ]
    })
    .then(result=> {
        res.json({
            data: result
        })
    })
    .catch(err=> {
        console.log(err)
    })
}

exports.controllerAddMenu = async(req, res)=> {
    const {name, jenis, deskripsi, image, harga}= req.body
    const data = {
        name : name,
        jenis: jenis,
        deskripsi: deskripsi,
        image: image,
        harga: harga
    }
    await menu.create(data)
    .then(result=> {
        res.json({
            data: data
        })
    })
    .catch(err=> {
        console.log(err)
    })
}

exports.controllerUpdateMenu = async(req, res)=> {
    const {name, jenis, deskripsi, image, harga}= req.body
    const data = {
        name : name,
        jenis: jenis,
        deskripsi: deskripsi,
        image: image,
        harga: harga
    }
    await menu.update(data, {
        where: {
            id: req.params.id
        }
    })
    .then(result=> {
        res.json({
            data: data
        })
    })
    .catch(err=> {
        console.log(err)
    })
}

exports.controllerDeleteMenu = async(req, res)=> {
    await menu.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(result=> {
        res.json({
            message: "data was deleted successfully"
        })
    })
    .catch(err=> {
        console.log(err)
    })
}